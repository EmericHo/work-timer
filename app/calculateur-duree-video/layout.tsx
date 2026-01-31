import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Durée Vidéo Gratuit - Calcul Temps Total Vidéos",
  description: "Calculez la durée totale de plusieurs vidéos instantanément. Outil gratuit pour additionner les durées en heures, minutes, secondes. Parfait pour montage vidéo et planification.",
  keywords: [
    "calculateur durée vidéo",
    "calcul temps vidéo",
    "durée totale vidéo",
    "additionner durée",
    "calculateur temps",
    "durée video gratuit",
  ],
  alternates: {
    canonical: "/calculateur-duree-video",
  },
  openGraph: {
    title: "Calculateur Durée Vidéo - Temps Total",
    description: "Calculez la durée totale de plusieurs vidéos. Outil gratuit et rapide.",
    url: "/calculateur-duree-video",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur Durée Vidéo",
    description: "Calculez le temps total de vos vidéos.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
