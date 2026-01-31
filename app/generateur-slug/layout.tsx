import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Slug URL Gratuit - Créer URLs SEO-Friendly en Ligne",
  description: "Transformez vos titres en slugs d'URL optimisés pour le SEO instantanément. Générateur de slug gratuit pour créer des URLs propres, lisibles et conformes aux standards web. Parfait pour WordPress, blogs et sites web.",
  keywords: [
    "générateur slug",
    "slug url generator",
    "créer slug url",
    "url seo friendly",
    "slug generator gratuit",
    "générateur url propre",
    "url rewriting",
    "slug wordpress",
    "optimisation url seo",
    "permalink generator",
    "url clean",
    "slug maker",
  ],
  alternates: {
    canonical: "/generateur-slug",
  },
  openGraph: {
    title: "Générateur de Slug URL Gratuit - Optimisez vos URLs pour le SEO",
    description: "Créez des slugs d'URL SEO-friendly à partir de vos titres. Outil gratuit pour générer des URLs propres et optimisées.",
    url: "/generateur-slug",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur de Slug URL - SEO Gratuit",
    description: "Transformez vos titres en slugs d'URL SEO-friendly instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
