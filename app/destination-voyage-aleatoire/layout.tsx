import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sélection de Destination de Voyage Aléatoire - Générateur Gratuit",
  description: "Découvrez votre prochaine destination de voyage avec notre sélecteur aléatoire. Plus de 50 pays du monde entier avec informations détaillées, capitales, continents et faits intéressants. Planifiez votre prochain voyage spontané.",
  keywords: [
    "destination voyage aléatoire",
    "sélecteur destination",
    "voyage spontané",
    "générateur destination",
    "où voyager",
    "idée voyage",
    "destination vacances",
    "voyage surprise",
    "sélection pays",
    "tourisme mondial",
    "planification voyage",
    "destination exotique",
    "voyage aventure",
    "tour du monde",
    "destinations populaires",
    "voyage aléatoire",
    "choix destination",
    "voyage international",
    "découverte monde",
    "vacances surprise",
  ],
  alternates: {
    canonical: "/destination-voyage-aleatoire",
  },
  openGraph: {
    title: "Sélection de Destination de Voyage Aléatoire - Découvrez Votre Prochaine Aventure",
    description: "Laissez le hasard choisir votre prochaine destination de voyage parmi plus de 50 pays fascinants. Découvrez des informations sur chaque pays, sa capitale et des faits intéressants.",
    url: "/destination-voyage-aleatoire",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
