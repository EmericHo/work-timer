import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  title: "Timer Focus Gratuit pour Travail",
  description: "Application de timer et Pomodoro pour améliorer votre productivité et votre concentration au travail.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Timer Focus",
  },
  openGraph: {
    title: "Timer Focus Gratuit pour Travail",
    description: "Application de timer et Pomodoro pour améliorer votre productivité et votre concentration au travail.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timer Focus Gratuit pour Travail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timer Focus Gratuit pour Travail",
    description: "Application de timer et Pomodoro pour améliorer votre productivité et votre concentration au travail.",
    images: ["/og-image.png"],
  },
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
        {/* PWA Meta Tags */}
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
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
              "description": "Application de timer et Pomodoro pour améliorer votre productivité et votre concentration au travail.",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {gaMeasurementId && <GoogleAnalytics />}
        {children}
      </body>
    </html>
  );
}
