'use client';

import { useEffect, useRef } from 'react';
import { loadAdSense, isAdSenseEnabled } from '@/lib/adsense';

interface AdSenseInArticleProps {
  slot?: string;
  className?: string;
}

/**
 * Publicité In-Article AdSense 336x280
 * Position : Milieu d'article (après 3 paragraphes)
 */
export default function AdSenseInArticle({
  slot = '1234567892',
  className = '',
}: AdSenseInArticleProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID || '';

  useEffect(() => {
    if (isAdSenseEnabled() && adRef.current) {
      const cleanup = loadAdSense(adRef.current);
      return cleanup;
    }
  }, []);

  // Mode développement : afficher un placeholder
  if (!isAdSenseEnabled()) {
    return (
      <div
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm mx-auto my-8 ${className}`}
        style={{ width: '336px', height: '280px' }}
      >
        <div className="text-center">
          <p className="font-semibold">AdSense In-Article</p>
          <p className="text-xs mt-1">336x280</p>
          <p className="text-xs">Placeholder (développement)</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={adRef} className={`adsense-in-article my-8 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'inline-block',
          width: '336px',
          height: '280px',
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format="rectangle"
      />
    </div>
  );
}
