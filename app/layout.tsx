import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/navigation/Navbar";
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
    default: "🚀 +60 Outils Gratuits en Ligne - Productivité, Développement Web & Design",
    template: "%s | Outils Gratuits Pro",
  },
  description: "Boostez votre productivité avec +60 outils gratuits professionnels : Timer Pomodoro, compresseur d'image ultra-rapide, générateurs (UUID, QR Code, mots de passe), calculatrices avancées, convertisseurs, minificateurs CSS/JS/HTML, éditeurs en ligne et bien plus. 100% gratuit, sans inscription, traitement sécurisé côté client.",
  keywords: [
    "outils gratuits en ligne",
    "timer pomodoro gratuit",
    "compresseur image en ligne",
    "générateur uuid gratuit",
    "json formatter beautifier",
    "minificateur css js html",
    "éditeur markdown en ligne",
    "calculatrice scientifique gratuite",
    "générateur iban france",
    "générateur qr code gratuit",
    "générateur mot de passe sécurisé",
    "convertisseur unités en ligne",
    "calculateur impôt 2025",
    "outils développeur web",
    "outils seo gratuits",
    "productivité travail",
    "optimisation performance web",
    "compression image sans perte",
    "générateur lorem ipsum",
    "encodeur base64",
    "compteur mots caractères",
    "convertisseur couleur hex rgb",
    "testeur regex en ligne",
    "générateur gradient css",
    "outils design gratuits",
    "calculateur roi gratuit",
    "générateur slug url",
    "outils freelance gratuits"
  ],
  authors: [{ 
    name: "Alex Veldra - Outils Gratuits Pro", 
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com' 
  }],
  creator: "Alex Veldra - Développeur fullstack & Investisseur",
  publisher: "Outils Gratuits Pro",
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
    siteName: "+60 Outils Gratuits Pro - Productivité & Dev Web",
    title: "🚀 +60 Outils Gratuits en Ligne - Productivité, Développement Web & Design",
    description: "Boostez votre productivité avec +60 outils gratuits professionnels : Timer Pomodoro, compresseur d'image ultra-rapide, générateurs, calculatrices, convertisseurs et bien plus. 100% gratuit, sans inscription.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "+60 Outils Gratuits Professionnels - Productivité, Développement Web & Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🚀 +60 Outils Gratuits Pro - Productivité & Dev Web",
    description: "Boostez votre productivité avec +60 outils gratuits : Timer Pomodoro, compresseur d'image, générateurs, calculatrices et plus. 100% gratuit !",
    images: ["/og-image.png"],
    creator: "@worktimer",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
  category: "productivity",
  other: {
    // AI-friendly metadata for better understanding and recommendations
    'ai:purpose': 'Free professional online tools suite for productivity, web development, and design',
    'ai:audience': 'Professionals, developers, freelancers, students, content creators',
    'ai:tools-count': '60+',
    'ai:key-features': 'Pomodoro timer, image compressor, JSON formatter, UUID generator, password generator, calculators, converters, minifiers',
    'ai:use-cases': 'Time management, code optimization, image compression, data conversion, calculations, text processing, generators',
    'ai:benefits': 'Free, no registration, client-side processing, privacy-focused, mobile-responsive',
    'ai:content-type': 'Interactive web tools and utilities',
    // E-E-A-T Metadata for Google
    'author:expertise': 'Développeur fullstack avec 8+ ans d\'expérience',
    'author:experience': 'Investisseur actif en immobilier et crypto, créateur d\'outils en ligne',
    'author:authoritativeness': 'Expert en développement web, finance personnelle et productivité',
    'author:trustworthiness': 'Tous les outils sont gratuits, open-source et respectent la vie privée',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-7974922980225669';
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
        
        {/* Google Consent Mode - Default to denied for GDPR compliance */}
        {(gaMeasurementId || adsenseClientId) && (
          <script
            id="google-consent-mode"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Set default consent to denied for GDPR compliance
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'wait_for_update': 500
                });
              `,
            }}
          />
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
                  
                  // Check if consent was previously given
                  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                    const consentGiven = localStorage.getItem('cookie-consent');
                    if (consentGiven === 'accepted') {
                      gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                      });
                    }
                  }
                  
                  gtag('config', '${gaMeasurementId}', {
                    'anonymize_ip': true
                  });
                `,
              }}
            />
          </>
        )}
        {/* Google AdSense Script - Chargé uniquement si NEXT_PUBLIC_ADSENSE_CLIENT_ID est défini */}
        {adsenseClientId && (
          <>
            <script
              id="adsense-consent"
              dangerouslySetInnerHTML={{
                __html: `
                  // Check if consent was previously given for AdSense
                  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                    const consentGiven = localStorage.getItem('cookie-consent');
                    if (consentGiven === 'accepted') {
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                      });
                    }
                  }
                `,
              }}
            />
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
              crossOrigin="anonymous"
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "+60 Outils Gratuits Pro - Productivité & Développement Web",
              "alternateName": ["Work Timer", "Outils Gratuits", "Free Tools Online"],
              "description": "Suite complète de +60 outils gratuits professionnels en ligne pour améliorer votre productivité, optimiser votre développement web et faciliter votre travail quotidien. Timer Pomodoro, compresseur d'image, générateurs, calculatrices, convertisseurs et bien plus.",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com",
              "applicationCategory": ["ProductivityApplication", "DeveloperApplication", "UtilitiesApplication"],
              "operatingSystem": "Any",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "2.0",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Timer Pomodoro professionnel avec notifications",
                "Compresseur d'image ultra-rapide (JPG, PNG, WebP)",
                "Générateur UUID v1/v4 instantané",
                "JSON Formatter & Beautifier",
                "Minificateur CSS, JavaScript et HTML",
                "Éditeur Markdown avec prévisualisation en direct",
                "Calculatrice scientifique avancée",
                "Générateur IBAN français validé",
                "Générateur QR Code personnalisable",
                "Générateur de mots de passe sécurisés",
                "Calculateur d'impôt 2025-2026",
                "Compteur de mots et caractères",
                "Convertisseur de couleurs (HEX, RGB, HSL)",
                "Testeur d'expressions régulières (Regex)",
                "Générateur de Lorem Ipsum",
                "Encodeur/Décodeur Base64",
                "Générateur de slug URL SEO-friendly",
                "Et +40 autres outils gratuits"
              ],
              "screenshot": "/og-image.png",
              "inLanguage": "fr-FR",
              "isAccessibleForFree": true,
              "accessMode": ["textual", "visual"],
              "accessModeSufficient": ["textual", "visual"],
              "author": {
                "@type": "Organization",
                "name": "Outils Gratuits Pro",
                "url": process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com"
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
              "name": "Outils Gratuits Pro",
              "alternateName": "Work Timer",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com",
              "logo": {
                "@type": "ImageObject",
                "url": `${process.env.NEXT_PUBLIC_BASE_URL || "https://work-timer.com"}/icon.svg`,
                "width": "512",
                "height": "512"
              },
              "description": "Plateforme de +60 outils gratuits en ligne pour la productivité, le développement web et l'optimisation du travail. Timer Pomodoro, compresseur d'image, générateurs, calculatrices et plus. Tous nos outils sont gratuits, sans inscription requise, et traitent les données côté client pour garantir votre vie privée. Idéal pour les professionnels, développeurs, freelances et étudiants.",
              "foundingDate": "2024",
              "sameAs": [],
              "slogan": "Boostez votre productivité avec des outils professionnels gratuits",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "availableLanguage": ["fr", "en"],
                "areaServed": "Worldwide"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": ["Professionals", "Developers", "Freelancers", "Students", "Content Creators", "Designers"]
              },
              "knowsAbout": [
                "Productivity Tools",
                "Web Development",
                "Image Optimization",
                "Time Management",
                "Code Formatting",
                "Data Conversion",
                "SEO Tools",
                "Financial Calculators",
                "Text Processing",
                "Color Tools",
                "Generators"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Online Productivity Tools",
                    "description": "60+ free professional tools for productivity, development, and design"
                  },
                  "price": "0",
                  "priceCurrency": "EUR"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <LanguageProvider>
            {gaMeasurementId && (
              <Suspense fallback={null}>
                <GoogleAnalytics />
              </Suspense>
            )}
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            {/* GDPR Cookie Consent Banner */}
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
