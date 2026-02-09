import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Compresseur d'Image Gratuit en Ligne - Réduire Taille JPG PNG WebP",
  description: "Compressez vos images JPG, PNG et WebP gratuitement en ligne. Réduisez la taille de vos fichiers jusqu'à 90% sans perte de qualité visible. Outil de compression d'image rapide et sécurisé pour optimiser vos photos pour le web.",
  keywords: [
    "compresseur image",
    "compression image en ligne",
    "réduire taille image",
    "optimiser image web",
    "compresser jpg",
    "compresser png",
    "compresser webp",
    "compression photo gratuit",
    "réduire poids image",
    "optimisation image seo",
    "compresseur photo en ligne",
    "réduire taille fichier image",
    "compression image gratuite",
    "outil compression image",
  ],
  alternates: {
    canonical: "/compresseur-image",
  },
  openGraph: {
    title: "Compresseur d'Image Gratuit - Optimisez vos Photos en Ligne",
    description: "Réduisez la taille de vos images JPG, PNG et WebP jusqu'à 90% sans perte de qualité. Outil gratuit et sécurisé pour optimiser vos photos.",
    url: "/compresseur-image",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Compresseur d'Image Gratuit en Ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compresseur d'Image Gratuit - JPG PNG WebP",
    description: "Réduisez vos images jusqu'à 90% sans perte de qualité visible. 100% gratuit et sécurisé.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Compresseur d'Image", url: "/compresseur-image" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Compresseur d'Image Gratuit - JPG PNG WebP"
        description="Compressez vos images en ligne gratuitement. Réduisez la taille de vos fichiers JPG, PNG et WebP jusqu'à 90% sans perte de qualité visible. Optimisez vos photos pour le web."
        url="/compresseur-image"
        category="MultimediaApplication"
        keywords={[
          "compresseur image",
          "compression image",
          "optimiser image",
          "réduire taille image",
          "compresser photo"
        ]}
        features={[
          "Compression d'images JPG, PNG et WebP",
          "Réduction de taille jusqu'à 90%",
          "Qualité visuelle préservée",
          "Traitement côté client (sécurisé)",
          "Prévisualisation avant/après",
          "Ajustement du niveau de compression",
          "Traitement par lots",
          "Téléchargement instantané",
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Comment fonctionne la compression d'image ?",
            answer: "Notre compresseur d'image utilise des algorithmes avancés de compression pour réduire la taille des fichiers tout en préservant la qualité visuelle. La compression se fait entièrement dans votre navigateur, garantissant la confidentialité de vos images. Vous pouvez ajuster le niveau de compression selon vos besoins."
          },
          {
            question: "Quels formats d'image sont supportés ?",
            answer: "Notre outil supporte les formats d'image les plus courants : JPG/JPEG, PNG et WebP. Ces formats couvrent la majorité des besoins pour le web et les applications."
          },
          {
            question: "Mes images sont-elles envoyées sur un serveur ?",
            answer: "Non, toutes les images sont traitées directement dans votre navigateur. Aucune image n'est envoyée sur nos serveurs, garantissant une confidentialité totale. C'est plus rapide et plus sécurisé."
          },
          {
            question: "Quelle est la taille maximale des images ?",
            answer: "La taille maximale dépend de votre navigateur et de votre appareil. En général, vous pouvez compresser des images jusqu'à 50 Mo sans problème. Pour de très grandes images, le traitement peut prendre quelques secondes."
          },
          {
            question: "La compression affecte-t-elle la qualité de l'image ?",
            answer: "Notre compresseur utilise une compression intelligente qui réduit la taille du fichier sans perte de qualité visible à l'œil nu. Vous pouvez comparer l'image originale et compressée avant de télécharger. Pour les images web, une compression de 70-80% offre le meilleur rapport qualité/taille."
          }
        ]}
      />
      {children}
    </>
  );
}
