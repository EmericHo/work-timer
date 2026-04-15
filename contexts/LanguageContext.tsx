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

  const resolveTranslation = (translationSet: unknown, keys: string[]): string | undefined => {
    let value: unknown = translationSet;

    for (const keyPart of keys) {
      if (!value || typeof value !== 'object' || !(keyPart in (value as Record<string, unknown>))) {
        return undefined;
      }
      value = (value as Record<string, unknown>)[keyPart];
    }

    return typeof value === 'string' ? value : undefined;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    const selectedLanguage = isClient ? language : defaultLanguage;

    const currentLanguageValue = resolveTranslation(translations[selectedLanguage], keys);
    if (currentLanguageValue !== undefined) return currentLanguageValue;

    const fallbackValue = resolveTranslation(translations[defaultLanguage], keys);
    return fallbackValue ?? '';
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
