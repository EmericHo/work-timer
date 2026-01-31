import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compteur de Mots Gratuit - Compter Mots, Caractères, Phrases en Ligne",
  description: "Comptez instantanément mots, caractères, phrases et paragraphes avec temps de lecture. Outil gratuit de comptage précis pour rédacteurs, étudiants, auteurs et SEO. Analyse complète de votre texte en temps réel.",
  keywords: [
    "compteur de mots",
    "compter les mots",
    "word counter",
    "compteur caractères",
    "compter caractères",
    "character counter",
    "compteur de phrases",
    "temps de lecture",
    "analyse texte",
    "compteur mots en ligne",
    "outil rédaction",
    "comptage mots gratuit",
  ],
  alternates: {
    canonical: "/compteur-mots",
  },
  openGraph: {
    title: "Compteur de Mots et Caractères Gratuit en Ligne",
    description: "Comptez mots, caractères, phrases et temps de lecture instantanément. Outil gratuit pour rédacteurs et étudiants.",
    url: "/compteur-mots",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compteur de Mots Gratuit",
    description: "Comptez mots, caractères et temps de lecture en temps réel.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
