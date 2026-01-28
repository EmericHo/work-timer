import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minificateur CSS JavaScript Gratuit - Compresser et Optimiser Code JS CSS en Ligne",
  description: "Minifiez et compressez votre code CSS et JavaScript gratuitement en ligne. Réduisez la taille de vos fichiers jusqu'à 80% pour améliorer les performances web. Outil de minification rapide et sécurisé pour optimiser votre code.",
  keywords: [
    "minifier css",
    "minifier javascript",
    "minification css js",
    "compression code",
    "optimisation web",
    "minify js",
    "minify css",
    "compresser javascript",
    "compresser css",
    "outil minification",
    "optimiser code web",
    "réduire taille javascript",
    "minificateur en ligne",
    "minifier js en ligne",
    "compresseur css",
  ],
  alternates: {
    canonical: "/minificateur-css-js",
  },
  openGraph: {
    title: "Minificateur CSS JavaScript - Optimisez votre Code Web Gratuitement",
    description: "Réduisez la taille de vos fichiers CSS et JavaScript jusqu'à 80% avec notre outil de minification gratuit. Améliorez les performances de votre site.",
    url: "/minificateur-css-js",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
