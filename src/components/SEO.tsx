import { useEffect } from 'react'
import { SITE_URL } from '../siteConfig'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  noindex?: boolean
}

const SEO = ({ title, description, path = '', image = '', noindex = false }: SEOProps) => {
  const siteUrl = SITE_URL
  const fullUrl = `${siteUrl}${path}`
  const ogImage = image || `${siteUrl}/og-image.jpg`

  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:url', fullUrl, 'property')
    updateMetaTag('og:type', 'website', 'property')
    updateMetaTag('og:image', ogImage, 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)
  }, [title, description, path, ogImage, fullUrl, noindex])

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zeeniith',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Custom software development company building web platforms, mobile apps, and AI-integrated products.',
    sameAs: [
      'https://twitter.com/zeeniith',
      'https://linkedin.com/company/zeeniith',
      'https://github.com/zeeniith',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+916357120971',
      contactType: 'Customer Service',
      email: 'info@zeeniith.in',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default SEO

