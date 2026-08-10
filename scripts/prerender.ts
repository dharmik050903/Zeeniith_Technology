import { preview, type PreviewServer } from 'vite'
import puppeteerCore, { type Browser } from 'puppeteer-core'
import puppeteerFull from 'puppeteer'
import chromium from '@sparticuz/chromium'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allRoutes } from '../src/routes'
import { SITE_URL } from '../src/siteConfig'

// Vercel's build image is a minimal Linux container missing the shared
// libraries (libnspr4, libnss3, etc.) that Puppeteer's full desktop Chrome
// download needs to run. @sparticuz/chromium ships a Chromium build made
// for exactly that kind of restricted serverless/build environment, so we
// only reach for it when actually running on Vercel; local dev keeps using
// the full puppeteer package's own bundled Chrome, which @sparticuz/chromium
// doesn't even provide binaries for on Windows/macOS.
const IS_VERCEL = !!process.env.VERCEL

async function launchBrowser(): Promise<Browser> {
  if (IS_VERCEL) {
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: false, // chromium.args already includes --headless='shell'
    })
  }
  return puppeteerFull.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
}

const DIST_DIR = join(process.cwd(), 'dist')
const MIN_BYTES = 15000
const SETTLE_MS = 300 // lets the SEO component's useEffect finish writing meta tags
const NOT_FOUND_PROBE_PATH = '/__prerender_404_probe__'

interface CaptureResult {
  route: string
  html: string
}

async function startPreviewServer(): Promise<{ server: PreviewServer; baseUrl: string }> {
  const server = await preview({ preview: { port: 4173, strictPort: false }, logLevel: 'error' })
  const localUrl = server.resolvedUrls?.local[0]
  if (!localUrl) {
    throw new Error('Could not resolve the vite preview server URL')
  }
  return { server, baseUrl: localUrl.replace(/\/$/, '') }
}

async function capture(browser: Browser, baseUrl: string, path: string): Promise<string> {
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1440, height: 900 })

    // Force dark theme so the static HTML matches the site's premium dark
    // positioning regardless of the headless browser's default color scheme.
    await page.evaluateOnNewDocument(() => {
      window.localStorage.setItem('theme', 'dark')
    })

    await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForSelector('h1', { timeout: 15000 })

    // Deliberately do NOT scroll or wait for IntersectionObserver-driven
    // reveal animations / AnimatedCounter to finish. Capturing the natural
    // pre-scroll mount state means the shipped HTML matches exactly what a
    // fresh client render produces (isVisible=false, counters at 0), so
    // hydration has nothing to reconcile. All text content is already in the
    // DOM at this point regardless -- those sections toggle CSS classes on
    // always-mounted markup, they don't conditionally render.
    await new Promise((resolve) => setTimeout(resolve, SETTLE_MS))

    return await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)
  } finally {
    await page.close()
  }
}

function extractTitle(html: string): string | null {
  const m = html.match(/<title>([^<]*)<\/title>/i)
  return m ? m[1].trim() : null
}

function extractDescription(html: string): string | null {
  const m = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)
  return m ? m[1].trim() : null
}

function extractCanonical(html: string): string | null {
  const m = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)
  return m ? m[1].trim() : null
}

function expectedCanonical(routePath: string): string {
  return routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`
}

// routePath is the real site path the canonical must self-reference (e.g.
// "/about"). label is what gets printed -- for the 404 page these differ,
// since its probe route isn't a real path but its canonical still must be.
function verify(label: string, routePath: string, html: string): string[] {
  const problems: string[] = []
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  const title = extractTitle(html)
  const description = extractDescription(html)
  const canonical = extractCanonical(html)
  const byteSize = Buffer.byteLength(html, 'utf-8')

  if (h1Count < 1) problems.push(`no <h1> found (count=${h1Count})`)
  if (!title) problems.push('no non-empty <title> found')
  if (!description || description.length < 10) problems.push('no non-empty <meta name="description"> found')
  if (byteSize <= MIN_BYTES) problems.push(`body too small (${byteSize} bytes, need > ${MIN_BYTES})`)

  const expected = expectedCanonical(routePath)
  if (!canonical) {
    problems.push('no <link rel="canonical"> found')
  } else if (canonical !== expected) {
    problems.push(`canonical "${canonical}" does not self-reference "${expected}"`)
  }

  if (problems.length === 0) {
    console.log(`[prerender] OK   ${label}  h1=${h1Count} bytes=${byteSize}`)
  } else {
    console.error(`[prerender] FAIL ${label}  ${problems.join('; ')}`)
  }
  return problems
}

// Cross-route check: a route silently falling back to index.html's default
// title/description (a prop-threading bug) wouldn't fail any single-route
// check above, since the fallback text is itself non-empty. It only shows up
// as a collision once you compare across the whole manifest.
function verifyUniqueness(entries: { route: string; title: string | null; description: string | null }[]): string[] {
  const problems: string[] = []
  const byTitle = new Map<string, string[]>()
  const byDescription = new Map<string, string[]>()

  for (const { route, title, description } of entries) {
    if (title) byTitle.set(title, [...(byTitle.get(title) ?? []), route])
    if (description) byDescription.set(description, [...(byDescription.get(description) ?? []), route])
  }

  for (const [title, routes] of byTitle) {
    if (routes.length > 1) problems.push(`duplicate <title> "${title}" shared by: ${routes.join(', ')}`)
  }
  for (const [description, routes] of byDescription) {
    if (routes.length > 1) {
      problems.push(`duplicate <meta description> "${description}" shared by: ${routes.join(', ')}`)
    }
  }

  return problems
}

function writeRouteFile(route: string, html: string) {
  const outPath =
    route === '/' ? join(DIST_DIR, 'index.html') : join(DIST_DIR, route.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf-8')
}

async function main() {
  const { server, baseUrl } = await startPreviewServer()
  const browser = await launchBrowser()

  const results: CaptureResult[] = []
  const failedRoutes: string[] = []

  try {
    for (const { path } of allRoutes) {
      const html = await capture(browser, baseUrl, path)
      results.push({ route: path, html })
    }

    // Capture the real NotFound page content via a guaranteed-unmatched path,
    // then save it as dist/404.html so Vercel serves it with a 404 status
    // for any URL that isn't a known route.
    const notFoundHtml = await capture(browser, baseUrl, NOT_FOUND_PROBE_PATH)
    results.push({ route: '__404__', html: notFoundHtml })
  } finally {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((err) => (err ? reject(err) : resolve()))
    })
  }

  for (const { route, html } of results) {
    if (route === '__404__') {
      writeFileSync(join(DIST_DIR, '404.html'), html, 'utf-8')
      const problems = verify('/404 (not-found page)', '/404', html)
      if (problems.length > 0) failedRoutes.push('/404')
      continue
    }

    writeRouteFile(route, html)
    const problems = verify(route, route, html)
    if (problems.length > 0) failedRoutes.push(route)
  }

  // Cross-route check, run after every route is captured. Excludes the 404
  // page: it isn't part of the route manifest and is noindex'd anyway, so a
  // title/description collision with it isn't the bug this guards against.
  const manifestEntries = results
    .filter((r) => r.route !== '__404__')
    .map(({ route, html }) => ({
      route,
      title: extractTitle(html),
      description: extractDescription(html),
    }))
  const uniquenessProblems = verifyUniqueness(manifestEntries)
  if (uniquenessProblems.length > 0) {
    for (const problem of uniquenessProblems) {
      console.error(`[prerender] FAIL (cross-route)  ${problem}`)
    }
    failedRoutes.push('(cross-route uniqueness)')
  }

  if (failedRoutes.length > 0) {
    console.error(
      `\n[prerender] ${failedRoutes.length} route(s) failed verification: ${failedRoutes.join(', ')}`
    )
    console.error('[prerender] Refusing to ship a build that would silently fall back to the empty SPA shell.')
    process.exit(1)
  }

  console.log(`\n[prerender] All ${results.length} route(s) verified and written to dist/.`)
}

main().catch((err) => {
  console.error('[prerender] Unhandled error:', err)
  process.exit(1)
})
