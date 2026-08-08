import { preview, type PreviewServer } from 'vite'
import puppeteer, { type Browser } from 'puppeteer'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { allRoutes } from '../src/routes'

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

function verify(route: string, html: string): string[] {
  const problems: string[] = []
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  const hasDescription = /<meta[^>]+name="description"[^>]+content="[^"]{10,}"/i.test(html)
  const byteSize = Buffer.byteLength(html, 'utf-8')

  if (h1Count < 1) problems.push(`no <h1> found (count=${h1Count})`)
  if (!hasDescription) problems.push('no non-empty <meta name="description"> found')
  if (byteSize <= MIN_BYTES) problems.push(`body too small (${byteSize} bytes, need > ${MIN_BYTES})`)

  if (problems.length === 0) {
    console.log(`[prerender] OK   ${route}  h1=${h1Count} bytes=${byteSize}`)
  } else {
    console.error(`[prerender] FAIL ${route}  ${problems.join('; ')}`)
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
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

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
      const problems = verify('/404 (not-found page)', html)
      if (problems.length > 0) failedRoutes.push('/404')
      continue
    }

    writeRouteFile(route, html)
    const problems = verify(route, html)
    if (problems.length > 0) failedRoutes.push(route)
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
