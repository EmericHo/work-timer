import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Bannière LinkedIn Gratuit - Créer Bannière Professionnelle",
  description: "Créez une bannière LinkedIn professionnelle gratuitement. Dimensions optimales 1584x396 px. Modèles personnalisables, aperçu en direct, téléchargement PNG. Améliorez votre profil LinkedIn.",
  keywords: [
    "générateur bannière linkedin",
    "bannière linkedin",
    "linkedin banner generator",
    "créer bannière linkedin",
    "bannière linkedin gratuit",
    "dimensions bannière linkedin",
    "bannière profil linkedin",
    "bannière linkedin personnalisée",
    "image de couverture linkedin",
    "header linkedin",
    "bannière linkedin 1584x396",
    "design bannière linkedin",
    "template bannière linkedin",
    "bannière linkedin professionnelle",
    "personal branding linkedin",
    "optimiser profil linkedin",
    "image arrière-plan linkedin",
    "couverture linkedin",
    "bannière linkedin en ligne",
    "créateur bannière linkedin",
    "outil bannière linkedin",
  ],
  alternates: {
    canonical: "/generateur-banniere-linkedin",
  },
  openGraph: {
    title: "Générateur de Bannière LinkedIn Gratuit - Design Professionnel en Ligne",
    description: "Créez instantanément une bannière LinkedIn aux dimensions parfaites (1584x396 px). Modèles professionnels, personnalisation complète, téléchargement gratuit.",
    url: "/generateur-banniere-linkedin",
    type: "website",
    images: [
      {
        url: "/og-linkedin-banner.png",
        width: 1200,
        height: 630,
        alt: "Générateur de Bannière LinkedIn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de Bannière LinkedIn Gratuit",
    description: "Créez une bannière LinkedIn professionnelle en quelques clics. Dimensions optimales, modèles personnalisables.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
