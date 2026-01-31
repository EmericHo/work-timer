import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur de Couleur Gratuit - HEX RGB HSL CMYK en Ligne",
  description: "Convertissez instantanément entre HEX, RGB, HSL, CMYK et plus. Outil gratuit de conversion de couleurs avec prévisualisation en direct. Parfait pour designers web, développeurs et graphistes.",
  keywords: [
    "convertisseur couleur",
    "color converter",
    "hex to rgb",
    "rgb to hex",
    "hsl converter",
    "cmyk to rgb",
    "conversion couleur",
    "color picker",
    "hex color converter",
    "couleur hexadécimale",
  ],
  alternates: {
    canonical: "/convertisseur-couleur",
  },
  openGraph: {
    title: "Convertisseur Couleur - HEX RGB HSL CMYK Gratuit",
    description: "Convertissez entre tous les formats de couleurs instantanément. Outil gratuit avec prévisualisation.",
    url: "/convertisseur-couleur",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Convertisseur Couleur Gratuit",
    description: "Convertissez HEX, RGB, HSL, CMYK instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
