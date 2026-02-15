'use client';

import { useEffect, useRef } from 'react';
import { loadAdSense, isAdSenseEnabled } from '@/lib/adsense';

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Bannière publicitaire AdSense 728x90 ou responsive
 * Position : Header (après navigation)
 */
export default function AdSenseBanner({
  slot = '1234567890',
  format = 'auto',
  className = '',
  style = {},
}: AdSenseBannerProps) {
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
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ minHeight: '90px', ...style }}
      >
        <div className="text-center">
          <p className="font-semibold">AdSense Banner 728x90</p>
          <p className="text-xs mt-1">Placeholder (développement)</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={adRef} className={`adsense-banner ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
