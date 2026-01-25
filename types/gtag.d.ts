// Type definitions for Google Analytics gtag.js
// This file extends the Window interface to include gtag function

interface ConsentParams {
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  ad_user_data?: 'granted' | 'denied';
  ad_personalization?: 'granted' | 'denied';
  wait_for_update?: number;
}

interface GtagCommand {
  (command: 'config', targetId: string, config?: { page_path: string }): void;
  (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void;
  (command: 'js', date: Date): void;
  (command: 'consent', action: 'default' | 'update', params: ConsentParams): void;
}

declare global {
  interface Window {
    gtag?: GtagCommand;
    dataLayer?: unknown[];
    adsbygoogle?: unknown[];
  }
}

export {};
