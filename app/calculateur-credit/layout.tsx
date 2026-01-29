import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de Crédit Auto et Immobilier Gratuit 2025 - Simulation Prêt",
  description: "Calculateur de crédit gratuit pour simuler votre prêt auto ou immobilier. Calculez vos mensualités, intérêts, coût total du crédit et tableau d'amortissement. Outil de simulation de prêt avec assurance et apport personnel.",
  keywords: [
    "calculateur crédit",
    "calcul crédit auto",
    "calcul crédit immobilier",
    "simulation prêt auto",
    "simulation prêt immobilier",
    "calculer mensualité crédit",
    "tableau amortissement",
    "crédit voiture",
    "crédit maison",
    "prêt automobile",
    "prêt habitation",
    "calcul intérêt crédit",
    "taux crédit immobilier",
    "taux crédit auto",
    "mensualité prêt",
    "coût total crédit",
    "assurance emprunteur",
    "apport personnel",
    "crédit consommation",
    "prêt bancaire",
    "simulateur emprunt",
    "calcul capacité emprunt",
    "financement auto",
    "financement immobilier",
    "crédit 2025",
    "meilleur taux crédit",
    "crédit gratuit",
    "calcul crédit en ligne",
  ],
  alternates: {
    canonical: "/calculateur-credit",
  },
  openGraph: {
    title: "Calculateur de Crédit Auto/Immobilier Gratuit - Simulez vos Mensualités",
    description: "Calculez gratuitement vos mensualités de crédit auto ou immobilier. Tableau d'amortissement complet, calcul des intérêts et coût total. Simulation avec assurance et apport.",
    url: "/calculateur-credit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
