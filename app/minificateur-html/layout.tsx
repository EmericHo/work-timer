import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minificateur HTML Gratuit - HTML Minifier Compressor en Ligne",
  description: "Minifiez votre code HTML pour réduire la taille et améliorer les performances. Outil gratuit de compression HTML qui supprime espaces, commentaires et optimise le code. Parfait pour optimisation web.",
  keywords: [
    "minificateur html",
    "html minifier",
    "compresseur html",
    "minify html",
    "html compressor",
    "optimisation html",
    "html gratuit",
    "compression html",
    "html optimizer",
  ],
  alternates: {
    canonical: "/minificateur-html",
  },
  openGraph: {
    title: "Minificateur HTML - Compressez Code HTML Gratuit",
    description: "Réduisez la taille de votre HTML pour améliorer les performances. Outil gratuit.",
    url: "/minificateur-html",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Minificateur HTML Gratuit",
    description: "Compressez votre code HTML instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
