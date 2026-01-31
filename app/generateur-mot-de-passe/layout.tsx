import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Mot de Passe Sécurisé Gratuit - Créer Passwords Forts",
  description: "Créez des mots de passe ultra-sécurisés et aléatoires instantanément. Générateur gratuit avec options personnalisables (longueur, majuscules, chiffres, symboles). Protection maximale pour vos comptes en ligne.",
  keywords: [
    "générateur mot de passe",
    "password generator",
    "mot de passe sécurisé",
    "créer mot de passe fort",
    "générateur password",
    "mot de passe aléatoire",
    "strong password generator",
    "générateur mdp",
    "mot de passe robuste",
    "random password",
    "secure password generator",
  ],
  alternates: {
    canonical: "/generateur-mot-de-passe",
  },
  openGraph: {
    title: "Générateur de Mot de Passe Sécurisé Gratuit",
    description: "Créez des mots de passe ultra-sécurisés et aléatoires. Générateur gratuit avec personnalisation complète.",
    url: "/generateur-mot-de-passe",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Mot de Passe Sécurisé",
    description: "Créez des passwords forts et aléatoires instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
