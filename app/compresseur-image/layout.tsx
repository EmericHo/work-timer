import { Metadata } from "next";

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
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
