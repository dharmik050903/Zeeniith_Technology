import { blogPosts } from './data/blogPosts'

export interface RouteEntry {
  path: string
  changefreq: 'daily' | 'weekly' | 'monthly'
  priority: number
}

export const staticRoutes: RouteEntry[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/services', changefreq: 'monthly', priority: 0.9 },
  { path: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { path: '/partnership', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
]

export const blogRoutes: RouteEntry[] = blogPosts.map((post) => ({
  path: `/blog/${post.id}`,
  changefreq: 'monthly',
  priority: 0.6,
}))

// All routes that must resolve to real content and get prerendered + sitemapped.
// Does not include the catch-all 404 route, which is intentionally excluded from the sitemap.
export const allRoutes: RouteEntry[] = [...staticRoutes, ...blogRoutes]
