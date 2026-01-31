import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table de Multiplication Gratuite - Apprendre Tables 1 à 12",
  description: "Apprenez et pratiquez les tables de multiplication de 1 à 12 interactivement. Outil éducatif gratuit pour enfants et étudiants avec exercices et quiz.",
  keywords: [
    "table multiplication",
    "tables de multiplication",
    "multiplication table",
    "apprendre tables",
    "multiplication gratuit",
    "exercice multiplication",
    "tables 1 à 12",
  ],
  alternates: {
    canonical: "/table-multiplication",
  },
  openGraph: {
    title: "Table de Multiplication - Apprendre Tables 1-12",
    description: "Apprenez les tables de multiplication interactivement. Outil éducatif gratuit.",
    url: "/table-multiplication",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Table de Multiplication",
    description: "Apprendre et pratiquer les tables.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
