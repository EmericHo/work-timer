import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Crédit Immobilier Gratuit - Simulation Prêt Maison 2025",
  description: "Calculez vos mensualités de crédit immobilier instantanément. Simulateur gratuit de prêt immobilier avec tableau d'amortissement, coût total et intérêts. Comparez les offres de crédit pour votre achat immobilier.",
  keywords: [
    "calculateur crédit immobilier",
    "simulation prêt immobilier",
    "calcul mensualité crédit",
    "crédit immobilier 2025",
    "calculateur prêt maison",
    "simulation emprunt immobilier",
    "mensualité crédit gratuit",
    "tableau amortissement",
    "calcul intérêt prêt",
  ],
  alternates: {
    canonical: "/calculateur-credit-immobilier",
  },
  openGraph: {
    title: "Calculateur Crédit Immobilier - Simulation Gratuite",
    description: "Calculez vos mensualités et le coût total de votre crédit immobilier. Simulation gratuite avec tableau d'amortissement.",
    url: "/calculateur-credit-immobilier",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur Crédit Immobilier",
    description: "Simulez votre prêt immobilier instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
