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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com';
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Guide Complet de la Technique Pomodoro et des Outils de Productivité",
            "description": "Guide complet pour maîtriser la technique Pomodoro, améliorer votre concentration et maximiser votre productivité au travail avec nos outils gratuits.",
            "url": `${baseUrl}/guide`,
            "datePublished": "2024-01-01T00:00:00Z",
            "dateModified": new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Outils Gratuits Pro",
              "url": baseUrl
            },
            "publisher": {
              "@type": "Organization",
              "name": "Outils Gratuits Pro",
              "url": baseUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.svg`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${baseUrl}/guide`
            },
            "articleSection": "Productivity",
            "keywords": [
              "Technique Pomodoro",
              "Productivité",
              "Gestion du temps",
              "Concentration",
              "Timer",
              "Organisation travail",
              "Méthode de travail"
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Pomodoro Technique",
                "description": "Time management method using 25-minute focused work sessions"
              },
              {
                "@type": "Thing",
                "name": "Time Management",
                "description": "Strategies and tools to organize and plan time effectively"
              },
              {
                "@type": "Thing",
                "name": "Productivity Tools",
                "description": "Software and applications to enhance work efficiency"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
