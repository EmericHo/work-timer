"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Cookie Consent Component - GDPR Compliant
 * 
 * This component displays a cookie consent banner for GDPR compliance.
 * Users can accept or reject cookies for Google Analytics and Google AdSense.
 * 
 * The consent is stored in localStorage and persists across sessions.
 */
export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      setIsLoading(false);
      return;
    }
    
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookie-consent");
    
    if (consentGiven === null) {
      // No consent decision made yet, show banner
      setShowBanner(true);
    } else if (consentGiven === "accepted") {
      // User has accepted, load analytics and ads
      loadAnalytics();
      loadAdSense();
    }
    
    setIsLoading(false);
  }, []);

  const loadAnalytics = () => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId || typeof window === "undefined") return;

    // Check if gtag is already loaded
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const loadAdSense = () => {
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
    if (!clientId || typeof window === "undefined") return;

    // AdSense is already loaded in layout.tsx, just update consent
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    
    // Load analytics and ads
    loadAnalytics();
    loadAdSense();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
    
    // Deny consent for analytics and ads
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              🍪 Gestion des cookies
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic du site avec Google Analytics 
              et afficher des publicités personnalisées via Google AdSense.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              En cliquant sur &quot;Accepter&quot;, vous consentez à l&apos;utilisation de ces cookies. 
              Vous pouvez refuser en cliquant sur &quot;Refuser&quot;. 
              Pour en savoir plus, consultez notre{" "}
              <Link 
                href="/politique-confidentialite" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
              aria-label="Refuser les cookies"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
              aria-label="Accepter les cookies"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
