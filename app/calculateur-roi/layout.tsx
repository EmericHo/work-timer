import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur ROI Gratuit - Calcul Retour sur Investissement en Ligne",
  description: "Calculez le ROI (Return On Investment) de vos projets instantanément. Calculateur gratuit de retour sur investissement avec ratio, pourcentage et analyse financière. Parfait pour investisseurs et entreprises.",
  keywords: [
    "calculateur roi",
    "calcul roi",
    "retour sur investissement",
    "roi calculator",
    "return on investment",
    "calcul rentabilité",
    "roi gratuit",
    "calculer roi projet",
    "analyse roi",
  ],
  alternates: {
    canonical: "/calculateur-roi",
  },
  openGraph: {
    title: "Calculateur ROI - Retour sur Investissement Gratuit",
    description: "Calculez le ROI de vos investissements instantanément. Outil gratuit avec analyse détaillée.",
    url: "/calculateur-roi",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculateur ROI Gratuit",
    description: "Calculez votre retour sur investissement.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
