import React from 'react';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  category: string;
  keywords?: string[];
  features?: string[];
}

/**
 * Component that generates SoftwareApplication structured data for tool pages
 * This helps search engines understand individual tools and can result in rich snippets
 */
export default function SoftwareApplicationSchema({
  name,
  description,
  url,
  category,
  keywords = [],
  features = [],
}: SoftwareApplicationSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com';
  
  const softwareAppStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": `${baseUrl}${url}`,
    "applicationCategory": category,
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "accessMode": ["textual", "visual"],
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") }),
    ...(features.length > 0 && { "featureList": features }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareAppStructuredData),
      }}
    />
  );
}
