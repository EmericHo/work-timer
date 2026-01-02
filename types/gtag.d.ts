// Type definitions for Google Analytics gtag.js
// This file extends the Window interface to include gtag function

interface GtagCommand {
  (command: 'config', targetId: string, config?: { page_path: string }): void;
  (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void;
  (command: 'js', date: Date): void;
}

declare global {
  interface Window {
    gtag?: GtagCommand;
    dataLayer?: unknown[];
  }
}

export {};
