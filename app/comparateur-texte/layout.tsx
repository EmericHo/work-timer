import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparateur de Texte Gratuit - Comparer 2 Textes Ligne par Ligne",
  description: "Comparez deux textes et visualisez les différences ligne par ligne avec highlighting. Outil gratuit de comparaison de texte (diff viewer) pour développeurs, rédacteurs et éditeurs. Détection précise des modifications.",
  keywords: [
    "comparateur texte",
    "comparer texte",
    "diff viewer",
    "text diff",
    "compare text",
    "différence texte",
    "text comparison",
    "comparaison texte gratuit",
    "text diff online",
    "merge tool",
  ],
  alternates: {
    canonical: "/comparateur-texte",
  },
  openGraph: {
    title: "Comparateur de Texte - Visualisez les Différences",
    description: "Comparez deux textes ligne par ligne avec highlighting. Outil gratuit pour développeurs.",
    url: "/comparateur-texte",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Comparateur Texte Gratuit",
    description: "Comparez 2 textes et visualisez les différences.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
