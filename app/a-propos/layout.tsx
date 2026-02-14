import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - Outils Gratuits Pro | Notre Mission et Valeurs",
  description: "Découvrez l'histoire et la mission d'Outils Gratuits Pro : fournir +60 outils en ligne gratuits, performants et sécurisés pour améliorer votre productivité et simplifier votre travail quotidien.",
  keywords: [
    "à propos",
    "qui sommes nous",
    "mission outils gratuits",
    "équipe outils pro",
    "notre histoire",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À Propos - Notre Mission et Valeurs",
    description: "Découvrez la mission d'Outils Gratuits Pro : +60 outils gratuits pour votre productivité.",
    url: "/a-propos",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com';
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "À Propos d'Outils Gratuits Pro",
            "description": "Page décrivant la mission, l'histoire et les valeurs d'Outils Gratuits Pro, plateforme de +60 outils gratuits en ligne pour la productivité, le développement web et le design.",
            "url": `${baseUrl}/a-propos`,
            "mainEntity": {
              "@type": "Organization",
              "name": "Outils Gratuits Pro",
              "alternateName": "Work Timer",
              "url": baseUrl,
              "description": "Plateforme de +60 outils gratuits en ligne pour améliorer la productivité, optimiser le développement web et faciliter le travail quotidien. Tous nos outils sont gratuits, sans inscription, et traitent les données côté client pour garantir votre confidentialité.",
              "foundingDate": "2024",
              "slogan": "Boostez votre productivité avec des outils professionnels gratuits",
              "knowsAbout": [
                "Productivity Tools",
                "Web Development",
                "Image Optimization",
                "Time Management",
                "Pomodoro Technique",
                "Code Formatting",
                "Data Conversion",
                "SEO Tools"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Suite d'outils gratuits",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Timer Pomodoro",
                      "description": "Timer professionnel pour la technique Pomodoro avec cycles de 25 minutes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compresseur d'image",
                      "description": "Compression ultra-rapide d'images JPG, PNG, WebP"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Générateurs et convertisseurs",
                      "description": "UUID, QR Code, mots de passe, couleurs, et +50 autres outils"
                    }
                  }
                ]
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
