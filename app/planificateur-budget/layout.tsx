import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planificateur de Budget Interactif Gratuit 2025 - Gestion Finances Personnelles",
  description: "Planificateur de budget gratuit et interactif pour gérer vos finances personnelles. Suivez revenus, dépenses fixes et variables, objectifs d'épargne. Règle 50/30/20, visualisation, export CSV. Outil de gestion budgétaire simple et efficace.",
  keywords: [
    "planificateur budget",
    "budget personnel",
    "gestion budget",
    "finances personnelles",
    "budget mensuel",
    "calculateur budget",
    "gestion dépenses",
    "suivi revenus",
    "dépenses fixes",
    "dépenses variables",
    "objectifs épargne",
    "règle 50/30/20",
    "budget 50 30 20",
    "planification financière",
    "gérer son argent",
    "économiser argent",
    "budget familial",
    "budget étudiant",
    "budget gratuit",
    "outil budget",
    "application budget",
    "suivre ses dépenses",
    "contrôler ses finances",
    "épargner efficacement",
    "budget interactif",
    "gestion argent",
    "finances France",
    "budget 2025",
    "planificateur financier",
    "outil financier gratuit",
    "export budget CSV",
    "calculer budget",
    "optimiser budget",
    "répartition budget",
    "solde mensuel",
    "taux épargne",
  ],
  alternates: {
    canonical: "/planificateur-budget",
  },
  openGraph: {
    title: "Planificateur de Budget Interactif Gratuit - Gérez vos Finances",
    description: "Outil gratuit de planification budgétaire. Suivez revenus et dépenses, définissez objectifs d'épargne, visualisez votre budget selon la règle 50/30/20. Export CSV inclus.",
    url: "/planificateur-budget",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
