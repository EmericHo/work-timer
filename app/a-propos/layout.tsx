import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - Outils Gratuits Pro | Notre Mission et Valeurs",
  description: "Découvrez l'histoire et la mission d'Outils Gratuits Pro : fournir +60 outils en ligne gratuits, performants et sécurisés pour améliorer votre productivité et simplifier votre travail quotidien.",
  keywords: [
    "à propos",
    "qui sommes nous",
    "mission outils gratuits",
    "équipe outils pro",
    "notre histoire",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À Propos - Notre Mission et Valeurs",
    description: "Découvrez la mission d'Outils Gratuits Pro : +60 outils gratuits pour votre productivité.",
    url: "/a-propos",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
