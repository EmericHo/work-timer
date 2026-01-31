import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Répéteur de Texte Gratuit - Répéter Texte Plusieurs Fois",
  description: "Répétez du texte plusieurs fois avec séparateur personnalisable instantanément. Outil gratuit de répétition de texte pour tous vos besoins. Simple et efficace.",
  keywords: [
    "répéteur texte",
    "text repeater",
    "répéter texte",
    "repeat text",
    "duplicateur texte",
    "répétition texte gratuit",
    "text multiplier",
    "répéter ligne",
  ],
  alternates: {
    canonical: "/repeteur-texte",
  },
  openGraph: {
    title: "Répéteur de Texte - Text Repeater Gratuit",
    description: "Répétez du texte plusieurs fois avec séparateur. Outil gratuit et simple.",
    url: "/repeteur-texte",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Répéteur de Texte Gratuit",
    description: "Répétez du texte instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
