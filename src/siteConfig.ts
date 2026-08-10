// Single source of truth for the canonical host. Used by both the SEO
// component (browser bundle) and the prerender build gate (Node script) so
// the two can never drift apart on which domain "self-referencing" means.
export const SITE_URL = 'https://www.zeeniith.in'
