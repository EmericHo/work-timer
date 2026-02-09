import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Générateur de QR Code Gratuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur QR Code Gratuit - Personnalisé",
    description: "Créez des QR codes personnalisés instantanément. PNG/SVG gratuit.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "/" },
          { name: "Générateur de QR Code", url: "/generateur-qr-code" },
        ]}
      />
      <SoftwareApplicationSchema
        name="Générateur de QR Code Gratuit - Personnalisable"
        description="Créez des QR codes gratuits et personnalisables pour URLs, texte, WiFi, email, téléphone. Téléchargez en PNG ou SVG. Outil simple et sécurisé."
        url="/generateur-qr-code"
        category="MultimediaApplication"
        keywords={[
          "générateur qr code",
          "créer qr code",
          "qr code gratuit",
          "qr code personnalisé",
          "qr code generator"
        ]}
        features={[
          "QR codes pour URL, texte, email, téléphone, WiFi",
          "Personnalisation des couleurs",
          "Ajustement de la taille",
          "Export PNG et SVG",
          "Haute résolution",
          "Génération instantanée",
          "Traitement côté client sécurisé",
          "Sans limite de génération",
        ]}
      />
      <HowToSchema
        name="Comment créer un QR Code personnalisé"
        description="Guide étape par étape pour générer un QR code personnalisé avec notre outil gratuit."
        totalTime="PT1M"
        steps={[
          {
            name: "Choisir le type de QR Code",
            text: "Sélectionnez le type de contenu que vous souhaitez encoder : URL (lien web), texte simple, email, numéro de téléphone, ou configuration WiFi. Chaque type adapte automatiquement le format du QR code.",
          },
          {
            name: "Entrer vos données",
            text: "Saisissez le contenu à encoder dans le QR code. Par exemple, pour une URL, entrez l'adresse complète du site web (https://...). Pour WiFi, entrez le nom du réseau et le mot de passe.",
          },
          {
            name: "Personnaliser l'apparence",
            text: "Personnalisez votre QR code en choisissant les couleurs, la taille et le niveau de correction d'erreur. Une correction d'erreur élevée permet au QR code de fonctionner même s'il est partiellement endommagé.",
          },
          {
            name: "Télécharger le QR Code",
            text: "Cliquez sur 'Télécharger' pour obtenir votre QR code au format PNG (pour impression) ou SVG (vectoriel, pour designs professionnels). Le QR code est prêt à être imprimé ou partagé numériquement.",
          },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Qu'est-ce qu'un QR Code ?",
            answer: "Un QR Code (Quick Response Code) est un code-barres bidimensionnel qui peut stocker des informations comme des URLs, du texte, des contacts, etc. Il peut être scanné avec un smartphone pour accéder instantanément au contenu encodé. Les QR codes sont largement utilisés dans le marketing, les menus de restaurant, les cartes de visite et bien plus."
          },
          {
            question: "Comment scanner un QR Code ?",
            answer: "Sur la plupart des smartphones modernes, ouvrez simplement l'appareil photo et pointez-le vers le QR code. Une notification apparaîtra automatiquement pour ouvrir le lien ou afficher le contenu. Sur les appareils plus anciens, vous devrez peut-être télécharger une application de lecture de QR code depuis votre magasin d'applications."
          },
          {
            question: "Les QR Codes générés expirent-ils ?",
            answer: "Non, les QR codes générés avec notre outil ne contiennent que l'information que vous y avez encodée. Ils ne dépendent pas de nos serveurs et n'expirent jamais. Cependant, si vous encodez une URL, assurez-vous que le site web reste accessible."
          },
          {
            question: "Quelle taille de QR Code dois-je choisir ?",
            answer: "La taille dépend de votre utilisation. Pour l'impression sur papier A4, 300-500px est suffisant. Pour les affiches ou panneaux, utilisez 1000px ou plus. Pour le web, 200-300px est généralement idéal. Plus le QR code est grand, plus il est facile à scanner de loin."
          },
          {
            question: "Puis-je utiliser les QR codes générés commercialement ?",
            answer: "Oui, tous les QR codes générés peuvent être utilisés librement pour des projets personnels ou commerciaux. Ils ne contiennent aucun filigrane ni restriction d'utilisation."
          }
        ]}
      />
      {children}
    </>
  );
}
