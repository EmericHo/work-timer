"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Google Analytics Component
 * 
 * Configuration:
 * 1. Créez un compte Google Analytics sur https://analytics.google.com
 * 2. Obtenez votre ID de mesure (format: G-XXXXXXXXXX)
 * 3. Définissez NEXT_PUBLIC_GA_MEASUREMENT_ID dans votre fichier .env.local
 * 
 * Ce composant:
 * - Envoie automatiquement les pages vues
 * - Suit la navigation entre les pages
 * - Respecte les préférences de confidentialité des utilisateurs
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId || typeof window === "undefined") return;

    // Construire l'URL complète avec les paramètres de recherche
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Envoyer l'événement de page vue à Google Analytics
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}
