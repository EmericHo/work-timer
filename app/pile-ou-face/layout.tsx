import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pile ou Face Gratuit - Flip Coin Simulateur en Ligne",
  description: "Lancez une pièce virtuelle pour pile ou face instantanément. Simulateur gratuit de tirage au sort équitable et aléatoire. Parfait pour décisions rapides.",
  keywords: [
    "pile ou face",
    "flip coin",
    "coin flip",
    "tirage au sort",
    "pile face en ligne",
    "lanceur pièce",
    "heads or tails",
    "random flip",
  ],
  alternates: {
    canonical: "/pile-ou-face",
  },
  openGraph: {
    title: "Pile ou Face - Coin Flip Simulator",
    description: "Lancez une pièce virtuelle instantanément. Tirage au sort équitable.",
    url: "/pile-ou-face",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pile ou Face Gratuit",
    description: "Simulateur de pile ou face en ligne.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
