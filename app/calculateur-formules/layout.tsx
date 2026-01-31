import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de Formules Gratuit - Résoudre Équations Mathématiques",
  description: "Calculez et résolvez des formules mathématiques complexes instantanément. Calculateur gratuit avec support des fonctions scientifiques, variables et équations. Parfait pour étudiants et scientifiques.",
  keywords: [
    "calculateur formules",
    "résoudre équation",
    "calcul mathématique",
    "formule math",
    "calculateur scientifique",
    "équation gratuit",
  ],
  alternates: {
    canonical: "/calculateur-formules",
  },
  openGraph: {
    title: "Calculateur Formules - Équations Mathématiques",
    description: "Résolvez des formules mathématiques complexes. Calculateur gratuit.",
    url: "/calculateur-formules",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur de Formules",
    description: "Résolvez équations mathématiques.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
