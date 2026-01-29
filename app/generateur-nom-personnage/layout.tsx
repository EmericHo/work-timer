import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Nom de Personnage Gratuit - Prénoms et Noms Aléatoires",
  description: "Générez des noms de personnages réalistes gratuitement en ligne. Créez des prénoms et noms français et internationaux pour vos romans, jeux de rôle, scénarios et histoires. Outil instantané avec exclusion de noms.",
  keywords: [
    "générateur nom personnage",
    "générateur prénom",
    "nom de personnage",
    "créer nom personnage",
    "générateur nom aléatoire",
    "nom personnage roman",
    "générateur nom jdr",
    "nom personnage jeu de rôle",
    "générateur nom fiction",
    "nom personnage RPG",
    "créer personnage",
    "nom aléatoire français",
    "générateur identité",
    "nom personnage gratuit",
    "prénom et nom aléatoire",
    "générateur nom histoire",
    "nom personnage scénario",
  ],
  alternates: {
    canonical: "/generateur-nom-personnage",
  },
  openGraph: {
    title: "Générateur de Nom de Personnage Gratuit - Créez des Noms Réalistes",
    description: "Créez instantanément des noms de personnages réalistes pour vos romans, jeux de rôle et histoires. Mélange de prénoms et noms français et internationaux.",
    url: "/generateur-nom-personnage",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
