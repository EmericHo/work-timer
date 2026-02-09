import React from 'react';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}

/**
 * Component that generates HowTo structured data
 * This helps search engines understand step-by-step processes and can show rich snippets
 */
export default function HowToSchema({
  name,
  description,
  totalTime,
  steps,
}: HowToSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com';
  
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && {
        "image": step.image.startsWith('http') ? step.image : `${baseUrl}${step.image}`
      }),
      ...(step.url && {
        "url": step.url.startsWith('http') ? step.url : `${baseUrl}${step.url}`
      }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToStructuredData),
      }}
    />
  );
}
