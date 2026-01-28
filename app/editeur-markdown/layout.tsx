import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Éditeur Markdown Gratuit en Ligne - Convertir et Prévisualiser Markdown en HTML",
  description: "Éditeur Markdown en ligne gratuit avec prévisualisation en temps réel. Écrivez en Markdown et convertissez instantanément en HTML. Outil parfait pour la documentation, les blogs et la rédaction technique.",
  keywords: [
    "éditeur markdown",
    "markdown en ligne",
    "convertir markdown",
    "markdown to html",
    "prévisualisation markdown",
    "éditeur markdown gratuit",
    "markdown éditeur français",
    "markdown viewer",
    "convertisseur markdown",
    "markdown editor online",
    "écrire markdown",
    "syntaxe markdown",
    "markdown guide",
    "formatage markdown",
  ],
  alternates: {
    canonical: "/editeur-markdown",
  },
  openGraph: {
    title: "Éditeur Markdown en Ligne Gratuit - Prévisualisation Instantanée",
    description: "Éditez et prévisualisez vos documents Markdown en temps réel. Outil gratuit pour écrire en Markdown avec conversion HTML instantanée.",
    url: "/editeur-markdown",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
