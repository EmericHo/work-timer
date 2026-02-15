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
  category?: string;
  tags?: string[];
}

/**
 * Enhanced Schema.org Article for SEO E-E-A-T compliance
 * Provides rich structured data for search engines and AI systems
 * Optimized for Google, Bing, and AI discoverability
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
  category,
  tags = [],
}: SchemaArticleProps) {
  const baseUrl = SITE_CONFIG.baseUrl;
  
  // Create comprehensive author schema with credentials
  const authorSchema = {
    '@type': 'Person',
    name: author,
    url: `${baseUrl}/a-propos`,
    jobTitle: 'Développeur fullstack & Investisseur',
    description: '8+ ans d\'expérience en développement web et investissement immobilier/financier',
    knowsAbout: [
      'Web Development',
      'Financial Investment',
      'Real Estate',
      'Tax Optimization',
      'ETF Investment',
      'French PEA',
    ],
    sameAs: [
      `${baseUrl}/a-propos`,
    ],
  };
  
  // Enhanced publisher schema for E-E-A-T
  const publisherSchema = {
    '@type': 'Organization',
    name: 'Veldra Tools & Insights',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${baseUrl}/contact`,
    },
    sameAs: [
      baseUrl,
    ],
  };

  // Main article schema with enhanced E-E-A-T signals
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}${image}`,
      width: 1200,
      height: 630,
    },
    datePublished: date,
    dateModified: date,
    author: authorSchema,
    publisher: publisherSchema,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords,
    articleSection: category || 'Blog',
    inLanguage: 'fr-FR',
    ...(readingTime && {
      timeRequired: readingTime,
    }),
    // Additional E-E-A-T signals
    educationalLevel: 'Beginner to Advanced',
    teaches: keywords.split(',').map(k => k.trim()),
    // Add article body schema
    articleBody: description,
    // Add tags/keywords for better categorization
    ...(tags.length > 0 && {
      about: tags.map(tag => ({
        '@type': 'Thing',
        name: tag,
      })),
    }),
    // Indicate this is educational/informational content
    genre: ['Education', 'Information', 'Tutorial'],
    // Add accessibility information
    accessibilityFeature: [
      'readingOrder',
      'structuralNavigation',
      'tableOfContents',
    ],
    // Licensing information
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    copyrightYear: new Date(date).getFullYear(),
    copyrightHolder: authorSchema,
  };
  
  // Also add BreadcrumbList for better navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
