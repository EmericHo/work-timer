import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Robots.txt Gratuit - Créer fichier Robots.txt SEO Optimal",
  description: "Créez votre fichier robots.txt optimisé pour le SEO en quelques clics. Générateur gratuit pour contrôler l'indexation de votre site par les moteurs de recherche. Configuration facile pour Google, Bing et autres crawlers.",
  keywords: [
    "générateur robots.txt",
    "robots.txt generator",
    "créer robots.txt",
    "robots txt",
    "fichier robots",
    "robots.txt seo",
    "robots file generator",
    "crawler control",
    "indexation google",
    "robots.txt gratuit",
  ],
  alternates: {
    canonical: "/generateur-robots-txt",
  },
  openGraph: {
    title: "Générateur Robots.txt - Optimisez l'Indexation SEO",
    description: "Créez votre fichier robots.txt pour contrôler l'indexation de votre site. Outil gratuit et simple.",
    url: "/generateur-robots-txt",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Robots.txt SEO",
    description: "Créez un fichier robots.txt optimisé instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
