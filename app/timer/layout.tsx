import { Metadata } from "next";

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
  },
};

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
