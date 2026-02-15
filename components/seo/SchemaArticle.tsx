import { SITE_CONFIG } from '@/lib/config';

interface SchemaArticleProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  url: string;
  keywords: string;
  readingTime?: string;
}

/**
 * Schema.org Article pour SEO E-E-A-T
 * Améliore la visibilité dans les résultats de recherche Google
 */
export default function SchemaArticle({
  title,
  description,
  image,
  date,
  author,
  url,
  keywords,
  readingTime,
}: SchemaArticleProps) {
  const baseUrl = SITE_CONFIG.baseUrl;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `${baseUrl}${image}`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl,
      jobTitle: 'Développeur fullstack & Investisseur immo/crypto',
      description: '8+ ans d\'expérience en développement web et investissement',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Veldra Tools & Insights',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords,
    articleSection: 'Blog',
    inLanguage: 'fr-FR',
    ...(readingTime && {
      timeRequired: readingTime,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
