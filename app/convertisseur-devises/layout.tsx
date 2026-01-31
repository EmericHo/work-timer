import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur Devises Gratuit - Taux de Change en Temps Réel 2025",
  description: "Convertissez toutes les devises avec taux de change en temps réel. Convertisseur gratuit EUR, USD, GBP, CHF et +150 monnaies. Conversion précise et à jour pour voyages et finance.",
  keywords: [
    "convertisseur devises",
    "conversion monnaie",
    "currency converter",
    "taux de change",
    "convertir euro dollar",
    "eur usd",
    "convertisseur euro",
    "exchange rate",
    "conversion devise gratuit",
  ],
  alternates: {
    canonical: "/convertisseur-devises",
  },
  openGraph: {
    title: "Convertisseur Devises - Taux Change Temps Réel",
    description: "Convertissez +150 devises avec taux en temps réel. Outil gratuit et précis.",
    url: "/convertisseur-devises",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Convertisseur Devises Gratuit",
    description: "Conversion de devises temps réel.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
