import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Palette Couleurs Gratuit - Color Palette Generator",
  description: "Créez des palettes de couleurs harmonieuses instantanément. Générateur gratuit avec preview, codes HEX/RGB et export. Parfait pour designers web, UI/UX et graphistes.",
  keywords: [
    "générateur palette couleurs",
    "color palette generator",
    "palette couleur",
    "color scheme",
    "générateur couleur",
    "palette harmonieuse",
    "color picker",
    "palette gratuit",
    "color combinations",
  ],
  alternates: {
    canonical: "/generateur-palette-couleurs",
  },
  openGraph: {
    title: "Générateur Palette Couleurs - Color Scheme",
    description: "Créez des palettes harmonieuses avec preview. Outil gratuit pour designers.",
    url: "/generateur-palette-couleurs",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Palette Couleurs",
    description: "Créez des color schemes harmonieux.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
