import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Meta SEO Gratuit - Créer Balises Meta Title Description",
  description: "Générez des balises meta optimisées pour le SEO instantanément. Outil gratuit pour créer title, description, keywords parfaits. Améliore le référencement de votre site web.",
  keywords: [
    "générateur meta seo",
    "meta tags generator",
    "meta description",
    "meta title",
    "seo tags",
    "balises meta",
    "seo gratuit",
    "optimisation seo",
    "meta keywords",
  ],
  alternates: {
    canonical: "/generateur-meta-seo",
  },
  openGraph: {
    title: "Générateur Meta SEO - Balises Title Description",
    description: "Créez des balises meta optimisées SEO. Outil gratuit pour améliorer votre référencement.",
    url: "/generateur-meta-seo",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Meta SEO Gratuit",
    description: "Créez des meta tags optimisés.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
