import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lanceur de Dés Gratuit - Dice Roller Simulateur en Ligne",
  description: "Lancez des dés virtuels (D6, D20, D100) instantanément. Simulateur gratuit de dés pour jeux de rôle, jeux de société et décisions aléatoires. Multiple dice roller.",
  keywords: [
    "lanceur de dés",
    "dice roller",
    "lancer dés",
    "dé virtuel",
    "d20 roller",
    "d6 dice",
    "simulateur dés",
    "roll dice online",
  ],
  alternates: {
    canonical: "/lanceur-des",
  },
  openGraph: {
    title: "Lanceur de Dés - Dice Roller D6 D20 D100",
    description: "Lancez des dés virtuels pour jeux et décisions. Simulateur gratuit.",
    url: "/lanceur-des",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lanceur de Dés Gratuit",
    description: "Simulateur de dés en ligne.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
