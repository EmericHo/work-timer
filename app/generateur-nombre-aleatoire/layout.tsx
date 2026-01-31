import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Nombre Aléatoire Gratuit - Random Number Generator",
  description: "Générez des nombres aléatoires instantanément avec plages personnalisables. Générateur gratuit de nombres random pour jeux, tirages au sort, statistiques. Aléatoire cryptographiquement sécurisé.",
  keywords: [
    "générateur nombre aléatoire",
    "random number generator",
    "nombre aléatoire",
    "random number",
    "générateur random",
    "tirage au sort",
    "nombre hasard",
    "random gratuit",
    "générateur chiffre",
  ],
  alternates: {
    canonical: "/generateur-nombre-aleatoire",
  },
  openGraph: {
    title: "Générateur Nombre Aléatoire - Random Number",
    description: "Générez des nombres aléatoires avec plages personnalisables. Outil gratuit et sécurisé.",
    url: "/generateur-nombre-aleatoire",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Nombre Aléatoire",
    description: "Générez des nombres random instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
