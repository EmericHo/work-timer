import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de QR Code Gratuit - Créer QR Code en Ligne Personnalisé",
  description: "Générez des QR codes gratuits et personnalisables en ligne. Créez des QR codes pour URLs, texte, WiFi, email, téléphone. Téléchargez en PNG ou SVG. Outil simple, rapide et sécurisé.",
  keywords: [
    "générateur qr code",
    "qr code generator",
    "créer qr code",
    "qr code gratuit",
    "qr code en ligne",
    "générer qr code",
    "qr code personnalisé",
    "qr code couleur",
    "télécharger qr code",
    "qr code url",
    "qr code wifi",
    "qr code gratuit en ligne",
    "créateur qr code",
    "qr code png",
    "qr code svg",
    "qr code menu restaurant",
    "qr code carte visite",
    "qr code marketing",
  ],
  alternates: {
    canonical: "/generateur-qr-code",
  },
  openGraph: {
    title: "Générateur de QR Code Gratuit - Créer et Personnaliser en Ligne",
    description: "Créez instantanément des QR codes personnalisés gratuitement. Téléchargez en PNG ou SVG. Parfait pour cartes de visite, menus, marketing et plus encore.",
    url: "/generateur-qr-code",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
