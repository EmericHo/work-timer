"use client";

import { useEffect } from "react";

interface AdSenseAdProps {
  slot: string;
  format: "horizontal" | "rectangle" | "vertical";
  style?: React.CSSProperties;
}

/**
 * AdSense Component
 * 
 * Configuration:
 * 1. Définissez NEXT_PUBLIC_ADSENSE_CLIENT_ID dans votre fichier .env.local
 *    Exemple: NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
 * 
 * 2. Créez des blocs publicitaires dans votre compte AdSense et utilisez les IDs de slot
 * 
 * 3. Le script AdSense est chargé automatiquement dans app/layout.tsx
 * 
 * Usage:
 * <AdSenseAd 
 *   slot="1234567890"  // ID de votre bloc publicitaire AdSense
 *   format="rectangle"  // horizontal | rectangle | vertical
 *   style={{ width: "300px", height: "250px" }}
 * />
 */
export default function AdSenseAd({ slot, format, style }: AdSenseAdProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    // En production avec un client ID configuré, initialiser les publicités
    if (isProduction && clientId && typeof window !== "undefined") {
      try {
        // @ts-expect-error - adsbygoogle is loaded by external script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("Erreur lors du chargement de la publicité AdSense:", error);
      }
    }
  }, [clientId, isProduction]);

  // En développement ou sans client ID, afficher un placeholder
  if (!isProduction || !clientId) {
    const formatClass = {
      horizontal: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
      rectangle: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
      vertical: "bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm",
    };

    return (
      <div
        className={formatClass[format]}
        style={style}
        aria-label={`Emplacement publicitaire ${slot}`}
      >
        <div className="text-center p-4">
          <p className="font-semibold">AdSense Placeholder</p>
          <p className="text-xs mt-1">{slot} - {format}</p>
          {!clientId && (
            <p className="text-xs mt-2 text-yellow-600 dark:text-yellow-400">
              Configurez NEXT_PUBLIC_ADSENSE_CLIENT_ID
            </p>
          )}
        </div>
      </div>
    );
  }

  // Format mapping pour AdSense
  const adFormat = format === "horizontal" ? "auto" : format === "rectangle" ? "rectangle" : "vertical";
  const fullWidth = format === "horizontal";

  // En production avec client ID, afficher la vraie publicité AdSense
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidth}
      aria-label={`Publicité ${slot}`}
    />
  );
}
