import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Timer en Ligne Gratuit - Pomodoro et Chronomètre de Travail",
  description: "Utilisez notre timer en ligne gratuit avec chronomètre précis, technique Pomodoro (25/5 minutes) et calculateur de temps. Parfait pour améliorer votre productivité au travail, en étude ou en freelance.",
  keywords: [
    "timer en ligne",
    "chronomètre gratuit",
    "pomodoro timer",
    "timer pomodoro gratuit",
    "chronomètre travail",
    "minuteur en ligne",
    "timer productivité",
    "focus timer",
    "timer 25 minutes",
    "pomodoro technique",
    "calculateur temps travail"
  ],
  alternates: {
    canonical: "/timer",
  },
  openGraph: {
    title: "Timer en Ligne Gratuit - Pomodoro et Chronomètre de Travail",
    description: "Utilisez notre timer en ligne gratuit avec chronomètre précis, technique Pomodoro (25/5 minutes) et calculateur de temps.",
    url: "/timer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timer Pomodoro et Chronomètre de Travail Gratuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timer en Ligne Gratuit - Pomodoro et Chronomètre",
    description: "Timer gratuit avec technique Pomodoro (25/5 min) pour booster votre productivité.",
    images: ["/og-image.png"],
  },
};

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Timer", url: "/timer" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Timer Focus Gratuit - Pomodoro et Chronomètre"
        description="Timer en ligne gratuit avec chronomètre précis, technique Pomodoro (25/5 minutes) et calculateur de temps. Améliorez votre productivité avec notre timer professionnel."
        url="/timer"
        category="ProductivityApplication"
        keywords={[
          "timer en ligne",
          "pomodoro timer",
          "chronomètre gratuit",
          "timer productivité",
          "focus timer"
        ]}
        features={[
          "Chronomètre précis au dixième de seconde",
          "Technique Pomodoro (25 minutes de travail, 5 minutes de pause)",
          "Minuteur compte à rebours personnalisable",
          "Notifications sonores et visuelles",
          "Calculateur de temps de travail",
          "Sauvegarde automatique dans le navigateur",
          "Fonctionne hors ligne une fois chargé",
          "Interface simple et intuitive",
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Qu'est-ce que la technique Pomodoro ?",
            answer: "La technique Pomodoro est une méthode de gestion du temps qui divise le travail en périodes de 25 minutes appelées 'pomodoros', suivies de courtes pauses de 5 minutes. Après 4 pomodoros, une pause plus longue de 15-30 minutes est recommandée. Cette technique améliore la concentration, réduit la fatigue mentale et augmente la productivité."
          },
          {
            question: "Le timer est-il gratuit ?",
            answer: "Oui, notre timer focus est complètement gratuit à utiliser. Il ne nécessite aucune inscription, aucun paiement et n'a aucune limitation. Tous nos outils sont 100% gratuits et accessibles à tous."
          },
          {
            question: "Le timer fonctionne-t-il hors ligne ?",
            answer: "Oui, une fois la page chargée, le timer peut fonctionner sans connexion internet. L'état du timer (temps écoulé, statut démarré/arrêté) est sauvegardé localement dans votre navigateur, vous ne perdrez donc pas vos données même si vous fermez la page."
          },
          {
            question: "Comment utiliser le timer Pomodoro ?",
            answer: "Pour utiliser le timer Pomodoro : 1) Choisissez une tâche à accomplir, 2) Lancez un pomodoro de 25 minutes, 3) Travaillez sans interruption jusqu'à la sonnerie, 4) Prenez une pause de 5 minutes, 5) Répétez le cycle. Après 4 pomodoros, prenez une pause plus longue de 15-30 minutes."
          },
          {
            question: "Puis-je personnaliser les durées du timer ?",
            answer: "Oui, notre timer offre plusieurs options : un chronomètre libre, un timer Pomodoro classique (25/5 minutes), et un minuteur personnalisable où vous pouvez définir n'importe quelle durée selon vos besoins."
          }
        ]}
      />
      {children}
    </>
  );
}
