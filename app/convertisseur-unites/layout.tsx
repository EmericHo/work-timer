import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur d'Unités Gratuit - Longueur Poids Volume Température",
  description: "Convertissez instantanément longueurs, poids, volumes, températures et plus. Outil gratuit de conversion d'unités précis avec tous les systèmes (métrique, impérial). Calculateur universel pour tous vos besoins.",
  keywords: [
    "convertisseur unités",
    "conversion unités",
    "unit converter",
    "convertir longueur",
    "convertir poids",
    "convertir température",
    "km en miles",
    "celsius fahrenheit",
    "conversion métrique",
    "convertisseur gratuit",
  ],
  alternates: {
    canonical: "/convertisseur-unites",
  },
  openGraph: {
    title: "Convertisseur d'Unités - Tous Systèmes Gratuit",
    description: "Convertissez longueurs, poids, volumes et températures instantanément. Outil gratuit et précis.",
    url: "/convertisseur-unites",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Convertisseur Unités Gratuit",
    description: "Conversion universelle d'unités instantanée.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
