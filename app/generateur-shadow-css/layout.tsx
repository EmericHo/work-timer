import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Shadow CSS Gratuit - CSS Box Shadow Generator",
  description: "Créez des ombres CSS (box-shadow) avec aperçu en temps réel. Générateur gratuit d'ombres personnalisées avec code CSS prêt à utiliser. Parfait pour designers et développeurs web.",
  keywords: [
    "générateur shadow css",
    "css shadow generator",
    "box shadow",
    "css box shadow",
    "ombre css",
    "shadow css gratuit",
    "box shadow generator",
    "css drop shadow",
    "shadow maker",
  ],
  alternates: {
    canonical: "/generateur-shadow-css",
  },
  openGraph: {
    title: "Générateur Shadow CSS - Box Shadow Personnalisées",
    description: "Créez des ombres CSS avec aperçu en direct. Code prêt à copier.",
    url: "/generateur-shadow-css",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Shadow CSS",
    description: "Créez des box-shadow instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
