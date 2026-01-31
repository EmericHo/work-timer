import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculatrice Fiscale 2025-2026 Gratuite - Calcul Impôt sur Revenu France",
  description: "Calculez votre impôt sur le revenu 2025-2026 en France instantanément. Calculatrice fiscale gratuite et à jour avec barèmes officiels. Simulation précise de votre impôt pour tous les foyers fiscaux.",
  keywords: [
    "calculatrice fiscale",
    "calcul impôt 2025",
    "impôt sur le revenu",
    "calculateur impôt france",
    "simulation impôt gratuit",
    "calcul impôt 2026",
    "barème fiscal 2025",
    "calculer impôt revenu",
    "impôt gratuit",
    "simulation fiscale",
  ],
  alternates: {
    canonical: "/calculatrice-fiscale",
  },
  openGraph: {
    title: "Calculatrice Fiscale 2025-2026 - Impôt sur le Revenu",
    description: "Calculez votre impôt 2025-2026 avec les barèmes officiels. Simulation gratuite et précise.",
    url: "/calculatrice-fiscale",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Calculatrice Fiscale 2025-2026",
    description: "Calculez votre impôt sur le revenu instantanément.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
