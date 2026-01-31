import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Protection de vos Données - Outils Gratuits Pro",
  description: "Consultez notre politique de confidentialité et découvrez comment nous protégeons vos données personnelles. Traitement local, sécurité maximale et respect du RGPD pour tous nos outils gratuits.",
  keywords: [
    "politique confidentialité",
    "protection données",
    "rgpd",
    "vie privée",
    "données personnelles",
    "sécurité",
  ],
  alternates: {
    canonical: "/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de Confidentialité - Protection des Données",
    description: "Notre engagement pour la protection de vos données. Traitement local et sécurisé.",
    url: "/politique-confidentialite",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
