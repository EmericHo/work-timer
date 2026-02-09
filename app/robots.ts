import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com'
  
  return {
    rules: [
      // Main crawlers - full access
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/.github/',
          '/docs/',
          '/*.md',
          '/_next/webpack-hmr',
        ],
        crawlDelay: 0,
      },
      // Google specific optimizations
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/.github/',
        ],
      },
      // Optimize for Googlebot Image crawler
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [
          '/api/',
        ],
      },
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'BLEXBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
