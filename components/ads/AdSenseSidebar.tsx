'use client';

import { useEffect, useRef } from 'react';
import { loadAdSense, isAdSenseEnabled } from '@/lib/adsense';

interface AdSenseSidebarProps {
  slot?: string;
  className?: string;
}

/**
 * Publicité Sidebar AdSense 300x600
 * Position : Sidebar articles (desktop uniquement)
 */
export default function AdSenseSidebar({
  slot = '1234567891',
  className = '',
}: AdSenseSidebarProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-7974922980225669';

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
        style={{ width: '300px', height: '600px' }}
      >
        <div className="text-center">
          <p className="font-semibold">AdSense Sidebar</p>
          <p className="text-xs mt-1">300x600</p>
          <p className="text-xs">Placeholder (développement)</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={adRef} className={`adsense-sidebar ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'inline-block',
          width: '300px',
          height: '600px',
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
      />
    </div>
  );
}
