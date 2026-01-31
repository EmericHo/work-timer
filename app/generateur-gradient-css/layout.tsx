import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Gradient CSS Gratuit - CSS Gradient Generator",
  description: "Créez des gradients CSS personnalisés avec aperçu en direct. Générateur gratuit de dégradés linéaires et radiaux avec code CSS prêt à copier. Parfait pour développeurs web et designers.",
  keywords: [
    "générateur gradient css",
    "css gradient generator",
    "gradient css",
    "dégradé css",
    "linear gradient",
    "radial gradient",
    "css gradient gratuit",
    "gradient maker",
    "css color gradient",
  ],
  alternates: {
    canonical: "/generateur-gradient-css",
  },
  openGraph: {
    title: "Générateur Gradient CSS - Dégradés Personnalisés",
    description: "Créez des gradients CSS avec aperçu en direct. Code prêt à copier.",
    url: "/generateur-gradient-css",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Gradient CSS",
    description: "Créez des dégradés CSS instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
