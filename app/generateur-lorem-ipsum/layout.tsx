import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur Lorem Ipsum Gratuit - Texte de Remplissage Latin en Ligne",
  description: "Générez du texte Lorem Ipsum instantanément pour vos maquettes et designs web. Générateur gratuit de faux texte latin avec personnalisation (paragraphes, mots, caractères). Parfait pour designers et développeurs.",
  keywords: [
    "lorem ipsum generator",
    "générateur lorem ipsum",
    "texte de remplissage",
    "faux texte",
    "dummy text",
    "placeholder text",
    "lorem ipsum gratuit",
    "texte latin",
    "générateur texte",
    "lipsum generator",
    "blind text",
  ],
  alternates: {
    canonical: "/generateur-lorem-ipsum",
  },
  openGraph: {
    title: "Générateur Lorem Ipsum - Texte de Remplissage Gratuit",
    description: "Créez du texte Lorem Ipsum pour vos maquettes web. Générateur gratuit et rapide.",
    url: "/generateur-lorem-ipsum",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Générateur Lorem Ipsum Gratuit",
    description: "Générez du texte de remplissage Latin instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
