'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getInitialLanguage, setLanguage as storeLanguage, defaultLanguage } from '@/lib/i18n';
import { translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const initialLang = getInitialLanguage();
    setLanguageState(initialLang);
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    storeLanguage(lang);
  };

  const t = (key: string): string => {
    if (!isClient) return key;
    
    const keys = key.split('.');
    
    // Get translations for current language or fall back to default
    const langTranslations = translations[language] || translations[defaultLanguage];
    if (!langTranslations) return key;
    
    let value: Record<string, unknown> = langTranslations as Record<string, unknown>;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k] as Record<string, unknown>;
      } else {
        // Fallback to default language if key not found
        const fallbackTranslations = translations[defaultLanguage];
        if (!fallbackTranslations) return key;
        
        value = fallbackTranslations as Record<string, unknown>;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey] as Record<string, unknown>;
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
