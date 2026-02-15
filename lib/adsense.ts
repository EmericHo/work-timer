/**
 * Configuration AdSense pour Veldra Tools & Insights
 * Gère les emplacements publicitaires et le chargement lazy
 */

export interface AdSenseConfig {
  client: string;
  slot: string;
  format: string;
  responsive?: boolean;
  fullWidthResponsive?: boolean;
}

// IDs des emplacements publicitaires
// ⚠️ IMPORTANT: Ces IDs sont des PLACEHOLDERS
// Remplacez-les par vos vrais slot IDs depuis Google AdSense:
// 1. Connectez-vous à https://adsense.google.com
// 2. Allez dans "Annonces" > "Par unité publicitaire"  
// 3. Créez 4 unités publicitaires (Banner, Sidebar, In-Article, Footer)
// 4. Copiez chaque slot ID et remplacez les valeurs ci-dessous
export const AD_SLOTS = {
  HEADER_BANNER: {
    slot: '1234567890', // ⚠️ PLACEHOLDER - À remplacer
    format: 'auto',
    responsive: true,
    fullWidthResponsive: true,
  },
  SIDEBAR: {
    slot: '1234567891', // ⚠️ PLACEHOLDER - À remplacer
    format: 'rectangle',
    responsive: false,
  },
  IN_ARTICLE: {
    slot: '1234567892', // ⚠️ PLACEHOLDER - À remplacer
    format: 'fluid',
    responsive: true,
  },
  FOOTER_STICKY: {
    slot: '1234567893', // ⚠️ PLACEHOLDER - À remplacer
    format: 'auto',
    responsive: true,
    fullWidthResponsive: true,
  },
} as const;

/**
 * Vérifie si AdSense est activé
 */
export function isAdSenseEnabled(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_ADSENSE_ID &&
    process.env.NEXT_PUBLIC_ADSENSE_ID.startsWith('ca-pub-')
  );
}

/**
 * Charge les publicités AdSense avec intersection observer
 */
export function loadAdSense(adElement: HTMLElement | null) {
  if (!adElement || !isAdSenseEnabled()) return;

  // Lazy loading avec IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            try {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
              observer.unobserve(entry.target);
            } catch (error) {
              console.error('Erreur lors du chargement AdSense:', error);
            }
          }
        });
      },
      {
        rootMargin: '200px', // Charge 200px avant que l'ad ne soit visible
        threshold: 0.01,
      }
    );

    observer.observe(adElement);

    return () => observer.disconnect();
  } else {
    // Fallback si IntersectionObserver n'est pas supporté
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (error) {
      console.error('Erreur lors du chargement AdSense:', error);
    }
  }
}

/**
 * Obtient le consentement RGPD pour les publicités
 */
export function hasAdConsent(): boolean {
  if (typeof window === 'undefined') return false;
  
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
}

/**
 * Notifie Google du consentement utilisateur
 */
export function updateAdConsent(granted: boolean) {
  if (typeof window === 'undefined') return;

  if ((window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
    });
  }
}
