import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de Pourboire Gratuit - Calculer Tip Restaurant en France",
  description: "Calculez le pourboire parfait pour restaurant, taxi, livraison instantanément. Calculateur gratuit de tip avec répartition par personne. Simple et pratique pour tous vos services.",
  keywords: [
    "calculateur pourboire",
    "calcul tip",
    "tip calculator",
    "calculer pourboire restaurant",
    "pourboire gratuit",
    "calculateur tip",
    "combien pourboire",
    "tip france",
    "pourboire serveur",
  ],
  alternates: {
    canonical: "/calculateur-pourboire",
  },
  openGraph: {
    title: "Calculateur de Pourboire - Tip Calculator Gratuit",
    description: "Calculez le pourboire idéal avec répartition par personne. Outil gratuit et simple.",
    url: "/calculateur-pourboire",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur Pourboire Gratuit",
    description: "Calculez le tip parfait instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
