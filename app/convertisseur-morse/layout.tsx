import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur Morse Gratuit - Texte vers Code Morse avec Audio",
  description: "Convertissez texte en code Morse et vice-versa instantanément. Outil gratuit avec lecture audio, visualisation et traduction bidirectionnelle. Apprenez et utilisez le code Morse facilement.",
  keywords: [
    "convertisseur morse",
    "code morse",
    "morse code translator",
    "texte vers morse",
    "morse to text",
    "morse audio",
    "morse en ligne",
    "traducteur morse gratuit",
    "apprendre morse",
  ],
  alternates: {
    canonical: "/convertisseur-morse",
  },
  openGraph: {
    title: "Convertisseur Morse - Texte Code Morse avec Audio",
    description: "Convertissez texte en Morse avec lecture audio. Outil gratuit et éducatif.",
    url: "/convertisseur-morse",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Convertisseur Morse Gratuit",
    description: "Convertissez texte en code Morse avec audio.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
