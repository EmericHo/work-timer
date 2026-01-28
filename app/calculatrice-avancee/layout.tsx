import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculatrice Scientifique Avancée Gratuite en Ligne - Calculs Mathématiques Complexes",
  description: "Calculatrice scientifique avancée gratuite en ligne avec fonctions trigonométriques, logarithmes, exponentielles et mémoire. Outil parfait pour étudiants, ingénieurs et professionnels nécessitant des calculs mathématiques complexes.",
  keywords: [
    "calculatrice scientifique",
    "calculatrice en ligne",
    "calcul avancé",
    "calculatrice gratuite",
    "calculatrice mathématique",
    "calculatrice trigonométrique",
    "calculatrice logarithme",
    "calculette scientifique",
    "calculateur en ligne",
    "calculs mathématiques",
    "calculatrice fonction",
    "calculatrice ingénieur",
    "calculatrice étudiant",
    "calculator online",
  ],
  alternates: {
    canonical: "/calculatrice-avancee",
  },
  openGraph: {
    title: "Calculatrice Scientifique Avancée - Calculs Mathématiques en Ligne",
    description: "Effectuez des calculs mathématiques complexes avec notre calculatrice scientifique gratuite. Fonctions avancées, mémoire et historique.",
    url: "/calculatrice-avancee",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
