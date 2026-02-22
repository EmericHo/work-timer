import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

/**
 * Generates consistent SEO metadata for tool pages.
 * Title template: "Nom de l'outil - Outil Gratuit en ligne | Veldra"
 */
export function generateToolMetadata({
  title,
  description,
  slug,
  keywords = [],
  image = "/og-image.png",
}: {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const fullTitle = `${title} - Outil Gratuit en ligne | Veldra`;
  const url = `/${slug}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
