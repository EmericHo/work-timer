'use client';

import { useEffect, useState } from 'react';
import { hasAdConsent, updateAdConsent } from '@/lib/adsense';

/**
 * Bannière de consentement RGPD pour cookies et publicités
 * Respecte la législation européenne sur la vie privée
 */
export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    updateAdConsent(true);
    closeWithAnimation();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    updateAdConsent(false);
    closeWithAnimation();
  };

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-500 shadow-lg transition-transform duration-300 ${
        isClosing ? 'translate-y-full' : 'translate-y-0'
      }`}
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 id="consent-title" className="text-lg font-semibold text-gray-900 mb-2">
              🍪 Gestion des cookies
            </h3>
            <p id="consent-description" className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience et afficher des publicités pertinentes. 
              En acceptant, vous consentez à l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Refuser les cookies"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
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
