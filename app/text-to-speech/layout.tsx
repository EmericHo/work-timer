import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to Speech Gratuit - Synthèse Vocale Français en Ligne",
  description: "Convertissez du texte en parole avec voix naturelles en français. Outil gratuit de text-to-speech (TTS) avec lecture audio instantanée. Parfait pour accessibilité et apprentissage.",
  keywords: [
    "text to speech",
    "synthèse vocale",
    "tts français",
    "text to voice",
    "voix française",
    "lecture audio",
    "tts gratuit",
    "speech synthesis",
  ],
  alternates: {
    canonical: "/text-to-speech",
  },
  openGraph: {
    title: "Text to Speech - Synthèse Vocale Français",
    description: "Convertissez texte en parole avec voix naturelles. TTS gratuit en français.",
    url: "/text-to-speech",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text to Speech Gratuit",
    description: "Synthèse vocale française en ligne.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
