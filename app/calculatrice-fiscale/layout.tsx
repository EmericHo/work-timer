import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calculatrice Fiscale 2025-2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculatrice Fiscale 2025-2026",
    description: "Calculez votre impôt sur le revenu instantanément.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Calculatrice Fiscale", url: "/calculatrice-fiscale" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Calculatrice Fiscale 2025-2026 - Calcul Impôt France"
        description="Calculez votre impôt sur le revenu en France pour 2025-2026. Calculatrice gratuite avec barèmes officiels à jour pour simulation fiscale précise."
        url="/calculatrice-fiscale"
        category="FinanceApplication"
        keywords={[
          "calculatrice fiscale",
          "calcul impôt",
          "impôt sur le revenu",
          "simulation fiscale",
          "barème fiscal 2025"
        ]}
        features={[
          "Barèmes fiscaux 2025-2026 officiels",
          "Calcul automatique de l'impôt",
          "Support tous types de foyers fiscaux",
          "Prise en compte du quotient familial",
          "Calcul du taux marginal d'imposition",
          "Simulation précise et instantanée",
          "Interface simple et intuitive",
          "100% gratuit et sans inscription",
        ]}
      />
      <HowToSchema
        name="Comment calculer votre impôt sur le revenu 2025-2026"
        description="Guide étape par étape pour calculer votre impôt sur le revenu avec notre calculatrice fiscale gratuite."
        totalTime="PT2M"
        steps={[
          {
            name: "Entrer votre revenu imposable",
            text: "Saisissez votre revenu net imposable annuel. Ce montant figure sur votre dernier avis d'imposition ou votre fiche de paie annuelle. N'incluez que les revenus soumis au barème progressif de l'impôt sur le revenu.",
          },
          {
            name: "Indiquer le nombre de parts fiscales",
            text: "Sélectionnez votre nombre de parts fiscales (quotient familial). Célibataire sans enfant = 1 part, couple marié/pacsé = 2 parts, + 0.5 part par enfant à charge pour les 2 premiers, puis 1 part par enfant supplémentaire.",
          },
          {
            name: "Lancer le calcul",
            text: "Cliquez sur le bouton 'Calculer' pour obtenir instantanément le montant de votre impôt, votre taux marginal d'imposition et le détail du calcul par tranche.",
          },
          {
            name: "Analyser les résultats",
            text: "Consultez le résultat détaillé affichant votre impôt brut, les réductions éventuelles, votre taux moyen et taux marginal d'imposition. Le calcul est basé sur les barèmes officiels 2025-2026.",
          },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Comment est calculé l'impôt sur le revenu en France ?",
            answer: "L'impôt sur le revenu en France est calculé selon un barème progressif par tranches. Le revenu imposable est divisé par le nombre de parts fiscales (quotient familial), puis l'impôt est calculé en appliquant des taux différents à chaque tranche : 0% jusqu'à 11 294€, 11% jusqu'à 28 797€, 30% jusqu'à 82 341€, 41% jusqu'à 177 106€, et 45% au-delà. Le résultat est ensuite multiplié par le nombre de parts."
          },
          {
            question: "Qu'est-ce que le quotient familial ?",
            answer: "Le quotient familial est un mécanisme qui permet de réduire l'impôt en fonction de la composition du foyer. Chaque personne seule a 1 part, un couple marié ou pacsé a 2 parts. Les enfants à charge ajoutent 0,5 part pour les deux premiers, puis 1 part pour chaque enfant supplémentaire. Ce système avantage les familles nombreuses."
          },
          {
            question: "Les barèmes sont-ils à jour pour 2025-2026 ?",
            answer: "Oui, notre calculatrice utilise les barèmes fiscaux officiels 2025-2026 tels que publiés par le gouvernement français. Les tranches d'imposition et les taux sont mis à jour chaque année pour suivre les modifications législatives et l'inflation."
          },
          {
            question: "Dois-je inclure tous mes revenus ?",
            answer: "Vous devez entrer votre revenu net imposable, qui correspond aux revenus déclarés à l'administration fiscale (salaires, pensions, revenus fonciers, etc.) après déduction des frais professionnels et des charges déductibles. Certains revenus peuvent être soumis à des régimes spéciaux (prélèvements forfaitaires)."
          },
          {
            question: "Cette simulation est-elle précise ?",
            answer: "Notre calculatrice fournit une estimation précise basée sur les barèmes officiels. Cependant, le calcul réel de votre impôt peut inclure des éléments complémentaires comme les crédits d'impôt, réductions, niches fiscales ou situations particulières. Pour un calcul définitif, consultez le simulateur officiel des impôts ou votre avis d'imposition."
          }
        ]}
      />
      {children}
    </>
  );
}
