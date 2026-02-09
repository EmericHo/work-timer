import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "JSON Formatter Gratuit - Beautifier Validateur Minifier JSON en Ligne",
  description: "Formatez, validez et minifiez vos données JSON en ligne gratuitement. Outil JSON formatter pour beautifier, indenter et valider la syntaxe de vos fichiers JSON. Traitement côté client sécurisé.",
  keywords: [
    "json formatter",
    "json beautifier",
    "json validator",
    "json minifier",
    "formatter json en ligne",
    "valider json",
    "json pretty print",
    "json lint",
    "beautifier json gratuit",
    "minifier json",
    "json parser",
    "format json",
    "json viewer",
    "json editor",
  ],
  alternates: {
    canonical: "/json-formatter",
  },
  openGraph: {
    title: "JSON Formatter - Beautifier et Validateur JSON Gratuit",
    description: "Formatez, validez et minifiez vos données JSON instantanément. Outil gratuit et sécurisé pour beautifier vos fichiers JSON.",
    url: "/json-formatter",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Formatter et Beautifier Gratuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter Gratuit - Beautifier & Validator",
    description: "Formatez et validez vos données JSON instantanément. 100% gratuit et sécurisé.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "JSON Formatter", url: "/json-formatter" },
        ]}
      />
      <SoftwareApplicationSchema
        name="JSON Formatter Gratuit - Beautifier et Validateur"
        description="Formatez, validez et minifiez vos données JSON en ligne. Outil gratuit pour beautifier, indenter et valider la syntaxe JSON avec traitement côté client sécurisé."
        url="/json-formatter"
        category="DeveloperApplication"
        keywords={[
          "json formatter",
          "json beautifier",
          "json validator",
          "json minifier",
          "json pretty print"
        ]}
        features={[
          "Formatage JSON automatique (beautify)",
          "Validation syntaxe JSON",
          "Minification JSON",
          "Indentation personnalisable",
          "Détection d'erreurs",
          "Traitement côté client",
          "Copie en un clic",
          "Support JSON imbriqué complexe",
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Qu'est-ce qu'un JSON Formatter ?",
            answer: "Un JSON Formatter (ou beautifier) est un outil qui formate et indente automatiquement les données JSON pour les rendre plus lisibles. Il transforme du JSON compact ou mal formaté en JSON proprement indenté et structuré, facilitant la lecture et la compréhension des données."
          },
          {
            question: "Comment valider un fichier JSON ?",
            answer: "Notre outil valide automatiquement votre JSON lors du formatage. Si votre JSON contient des erreurs de syntaxe (virgules manquantes, guillemets incorrects, etc.), l'outil affichera un message d'erreur détaillé indiquant la ligne et le type d'erreur pour vous aider à la corriger."
          },
          {
            question: "Mes données JSON sont-elles sécurisées ?",
            answer: "Oui, toutes les données JSON sont traitées entièrement dans votre navigateur. Aucune donnée n'est envoyée à nos serveurs ou à des tiers, garantissant une confidentialité totale. C'est particulièrement important pour les données sensibles."
          },
          {
            question: "Quelle est la différence entre beautify et minify ?",
            answer: "Beautify (formatter) ajoute de l'indentation et des sauts de ligne pour rendre le JSON lisible par les humains. Minify fait l'inverse : il supprime tous les espaces et sauts de ligne inutiles pour réduire la taille du fichier, idéal pour la production et les APIs."
          },
          {
            question: "Puis-je formatter de gros fichiers JSON ?",
            answer: "Oui, notre outil peut traiter des fichiers JSON de plusieurs mégaoctets. Le traitement se fait dans votre navigateur, donc la limite dépend de votre appareil. Pour de très gros fichiers, le formatage peut prendre quelques secondes."
          }
        ]}
      />
      {children}
    </>
  );
}
