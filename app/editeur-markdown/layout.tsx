import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Éditeur Markdown Gratuit en Ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Éditeur Markdown Gratuit - Prévisualisation Live",
    description: "Écrivez en Markdown avec prévisualisation temps réel. Conversion HTML instantanée.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Éditeur Markdown", url: "/editeur-markdown" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Éditeur Markdown Gratuit - Prévisualisation en Temps Réel"
        description="Éditeur Markdown en ligne avec prévisualisation instantanée. Écrivez en syntaxe Markdown et voyez le résultat HTML en temps réel. Parfait pour la documentation et la rédaction."
        url="/editeur-markdown"
        category="DeveloperApplication"
        keywords={[
          "éditeur markdown",
          "markdown to html",
          "prévisualisation markdown",
          "markdown editor",
          "convertir markdown"
        ]}
        features={[
          "Prévisualisation en temps réel",
          "Support syntaxe Markdown complète",
          "Conversion HTML instantanée",
          "Coloration syntaxique code",
          "Support tableaux et listes",
          "Export HTML",
          "Interface divisée éditeur/preview",
          "Raccourcis clavier pratiques",
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Qu'est-ce que Markdown ?",
            answer: "Markdown est un langage de balisage léger créé pour être facile à lire et à écrire. Il permet de formater du texte en utilisant une syntaxe simple (*, #, [], etc.) qui est ensuite convertie en HTML. C'est largement utilisé pour la documentation, les README GitHub, les blogs et les forums."
          },
          {
            question: "Comment utiliser l'éditeur Markdown ?",
            answer: "Tapez simplement votre texte en utilisant la syntaxe Markdown dans le panneau de gauche. La prévisualisation HTML apparaît en temps réel dans le panneau de droite. Par exemple, utilisez # pour les titres, ** pour le gras, * pour l'italique, et [] () pour les liens."
          },
          {
            question: "Puis-je exporter mon contenu en HTML ?",
            answer: "Oui, vous pouvez copier le HTML généré depuis la prévisualisation ou utiliser la fonction d'export si disponible. Le HTML généré est propre et prêt à être intégré dans votre site web ou votre blog."
          },
          {
            question: "Quels éléments Markdown sont supportés ?",
            answer: "Notre éditeur supporte la syntaxe Markdown complète : titres (H1-H6), gras, italique, listes, liens, images, citations, code inline et blocs de code, tableaux, et lignes horizontales. La syntaxe GitHub Flavored Markdown (GFM) est également supportée."
          },
          {
            question: "Mes documents sont-ils sauvegardés ?",
            answer: "Le contenu est temporairement stocké dans votre navigateur pour éviter la perte de données en cas de rafraîchissement de page. Cependant, nous vous recommandons de copier ou télécharger votre travail régulièrement pour une sauvegarde permanente."
          }
        ]}
      />
      {children}
    </>
  );
}
