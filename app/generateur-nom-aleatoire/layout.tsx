import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Nom Aléatoire Gratuit - Random Name Generator Français",
  description: "Générez des noms et prénoms français aléatoires instantanément. Générateur gratuit pour personnages, tests, anonymisation. Noms réalistes pour hommes et femmes.",
  keywords: [
    "générateur nom aléatoire",
    "random name generator",
    "nom aléatoire français",
    "générateur prénom",
    "fake name generator",
    "nom random",
    "générateur identité",
    "nom fictif",
  ],
  alternates: {
    canonical: "/generateur-nom-aleatoire",
  },
  openGraph: {
    title: "Générateur Nom Aléatoire - Prénoms Français",
    description: "Générez des noms français réalistes instantanément. Outil gratuit.",
    url: "/generateur-nom-aleatoire",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Nom Aléatoire",
    description: "Générez des noms français aléatoires.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
