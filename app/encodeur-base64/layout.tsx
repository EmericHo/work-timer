import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encodeur Base64 Gratuit - Encoder/Décoder Base64 en Ligne",
  description: "Encodez et décodez du texte en Base64 instantanément. Outil gratuit de conversion Base64 pour texte, images et fichiers. Parfait pour développeurs web et API.",
  keywords: [
    "encodeur base64",
    "décodeur base64",
    "base64 encoder",
    "base64 decoder",
    "convertir base64",
    "encoder texte base64",
    "décoder base64",
    "base64 en ligne",
    "base64 gratuit",
    "conversion base64",
  ],
  alternates: {
    canonical: "/encodeur-base64",
  },
  openGraph: {
    title: "Encodeur/Décodeur Base64 Gratuit en Ligne",
    description: "Encodez et décodez du texte en Base64 instantanément. Outil gratuit pour développeurs.",
    url: "/encodeur-base64",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Encodeur Base64 Gratuit",
    description: "Convertissez texte en Base64 et vice-versa.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
