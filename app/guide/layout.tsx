import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Complet - Maîtrisez la Technique Pomodoro et la Productivité",
  description: "Découvrez comment utiliser efficacement nos outils de productivité : timer, Pomodoro, calculateur de temps. Guide complet pour améliorer votre concentration et votre gestion du temps au travail.",
  keywords: [
    "guide pomodoro",
    "technique pomodoro guide",
    "productivité travail",
    "gestion du temps",
    "améliorer concentration",
    "conseils productivité",
    "méthode pomodoro",
    "timer productivité guide",
    "organisation travail"
  ],
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "Guide Complet - Maîtrisez la Technique Pomodoro et la Productivité",
    description: "Découvrez comment utiliser efficacement nos outils de productivité : timer, Pomodoro, calculateur de temps.",
    url: "/guide",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
