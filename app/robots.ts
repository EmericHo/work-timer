import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/.github/',
          '/docs/',
          '/*.md',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
