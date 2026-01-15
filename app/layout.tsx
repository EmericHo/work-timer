import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com'),
  title: {
    default: "Timer Focus Gratuit pour Travail - Pomodoro & Productivité",
    template: "%s | Timer Focus Gratuit",
  },
  description: "Timer en ligne gratuit avec technique Pomodoro pour améliorer votre productivité et concentration au travail. Outil de gestion du temps simple et efficace pour travailleurs, étudiants et freelances.",
  keywords: [
    "timer gratuit",
    "timer en ligne",
    "pomodoro",
    "technique pomodoro",
    "productivité",
    "concentration",
    "gestion du temps",
    "chronomètre travail",
    "timer travail",
    "focus timer",
    "timer étudiant",
    "timer freelance",
    "minuteur en ligne",
    "timer productivité",
    "pomodoro gratuit",
    "timer français",
    "chronomètre en ligne",
    "outil productivité",
    "gestion temps travail",
    "timer focus gratuit"
  ],
  authors: [{ name: "Work Timer" }],
  creator: "Work Timer",
  publisher: "Work Timer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Timer Focus",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Timer Focus Gratuit pour Travail",
    title: "Timer Focus Gratuit pour Travail - Pomodoro & Productivité",
    description: "Timer en ligne gratuit avec technique Pomodoro pour améliorer votre productivité et concentration au travail. Outil de gestion du temps simple et efficace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timer Focus Gratuit pour Travail - Application Pomodoro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timer Focus Gratuit pour Travail - Pomodoro & Productivité",
    description: "Timer en ligne gratuit avec technique Pomodoro pour améliorer votre productivité et concentration au travail.",
    images: ["/og-image.png"],
    creator: "@worktimer",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="fr">
      <head>
        {/* Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-7974922980225669" />
        
        {/* SEO Meta Tags */}
        <meta name="language" content="French" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta httpEquiv="Content-Language" content="fr" />
        
        {/* PWA Meta Tags */}
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains for performance */}
        {gaMeasurementId && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        )}
        {adsenseClientId && (
          <>
            <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
            <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
          </>
        )}
        
        {/* Google Analytics - Chargé uniquement si NEXT_PUBLIC_GA_MEASUREMENT_ID est défini */}
        {gaMeasurementId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
        {/* Google AdSense Script - Chargé uniquement si NEXT_PUBLIC_ADSENSE_CLIENT_ID est défini */}
        {adsenseClientId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Timer Focus Gratuit pour Travail",
              "alternateName": "Work Timer",
              "description": "Timer en ligne gratuit avec technique Pomodoro pour améliorer votre productivité et concentration au travail. Outil de gestion du temps simple et efficace pour travailleurs, étudiants et freelances.",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Any",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Timer standard avec chronomètre précis",
                "Technique Pomodoro intégrée (25 min travail / 5 min pause)",
                "Notifications de bureau",
                "Sauvegarde automatique de l'état",
                "Interface responsive",
                "Calculateur de temps de travail"
              ],
              "screenshot": "/og-image.png",
              "inLanguage": "fr-FR",
              "isAccessibleForFree": true,
              "author": {
                "@type": "Organization",
                "name": "Work Timer"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Qu'est-ce que la technique Pomodoro ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La technique Pomodoro est une méthode de gestion du temps qui divise le travail en périodes de 25 minutes appelées 'pomodoros', suivies de courtes pauses de 5 minutes. Cette technique améliore la concentration et la productivité."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Le timer est-il gratuit ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, notre timer focus est complètement gratuit à utiliser. Il ne nécessite aucune inscription ni paiement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Le timer fonctionne-t-il hors ligne ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Une fois chargé, le timer peut fonctionner sans connexion internet. L'état du timer est sauvegardé localement dans votre navigateur."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Work Timer",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com",
              "logo": "/icon.svg",
              "description": "Timer en ligne gratuit avec technique Pomodoro pour améliorer la productivité",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        {gaMeasurementId && (
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        )}
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
