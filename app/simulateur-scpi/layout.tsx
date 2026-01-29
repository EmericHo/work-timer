import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur SCPI Gratuit - Calcul Investissement Immobilier Locatif",
  description: "Simulateur SCPI en ligne gratuit pour calculer vos investissements immobiliers. Estimez vos revenus locatifs, rendements nets après impôts et plus-values sur votre placement en Société Civile de Placement Immobilier. Outil de simulation pour investisseurs.",
  keywords: [
    "simulateur scpi",
    "scpi gratuit",
    "calcul scpi",
    "investissement scpi",
    "rendement scpi",
    "scpi rendement",
    "placement immobilier",
    "revenus fonciers",
    "immobilier locatif",
    "scpi fiscale",
    "pierre papier",
    "investissement locatif",
    "scpi de rendement",
    "simulation investissement immobilier",
    "calcul revenus scpi",
    "société civile placement immobilier",
    "scpi 2025",
    "meilleure scpi",
    "scpi fiscalité",
    "revenu passif immobilier",
  ],
  alternates: {
    canonical: "/simulateur-scpi",
  },
  openGraph: {
    title: "Simulateur SCPI Gratuit - Calculez vos Rendements Immobiliers",
    description: "Outil gratuit pour simuler votre investissement en SCPI. Calculez vos revenus nets, impôts et rendements sur le long terme. Simulation complète avec détails année par année.",
    url: "/simulateur-scpi",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
