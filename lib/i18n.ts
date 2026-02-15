// Supported languages (18 languages as per requirements)
export type Language = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja' | 'zh' | 'ko' | 'ar' | 'hi' | 'tr' | 'sv' | 'da' | 'no';

export const languages: Language[] = ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'pl', 'ru', 'ja', 'zh', 'ko', 'ar', 'hi', 'tr', 'sv', 'da', 'no'];

export const languageNames: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ru: 'Русский',
  ja: '日本語',
  zh: '中文',
  ko: '한국어',
  ar: 'العربية',
  hi: 'हिन्दी',
  tr: 'Türkçe',
  sv: 'Svenska',
  da: 'Dansk',
  no: 'Norsk',
};

export const languageFlags: Record<Language, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  nl: '🇳🇱',
  pl: '🇵🇱',
  ru: '🇷🇺',
  ja: '🇯🇵',
  zh: '🇨🇳',
  ko: '🇰🇷',
  ar: '🇸🇦',
  hi: '🇮🇳',
  tr: '🇹🇷',
  sv: '🇸🇪',
  da: '🇩🇰',
  no: '🇳🇴',
};

export const languageDirections: Record<Language, 'ltr' | 'rtl'> = {
  fr: 'ltr',
  en: 'ltr',
  es: 'ltr',
  de: 'ltr',
  it: 'ltr',
  pt: 'ltr',
  nl: 'ltr',
  pl: 'ltr',
  ru: 'ltr',
  ja: 'ltr',
  zh: 'ltr',
  ko: 'ltr',
  ar: 'rtl',
  hi: 'ltr',
  tr: 'ltr',
  sv: 'ltr',
  da: 'ltr',
  no: 'ltr',
};

// Default language is French (as per requirements)
export const defaultLanguage: Language = 'fr';

// Detect browser language
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;

  try {
    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    
    // Check for exact match or language prefix match
    for (const lang of languages) {
      if (browserLang === lang || browserLang.startsWith(`${lang}-`)) {
        return lang;
      }
    }
    
    // Return default if no match
    return defaultLanguage;
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return defaultLanguage;
  }
}

// Get stored language or detect from browser
export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;

  try {
    const stored = localStorage.getItem('language');
    if (stored && languages.includes(stored as Language)) {
      return stored as Language;
    }
    
    // Detect browser language if no stored preference
    const detected = detectBrowserLanguage();
    localStorage.setItem('language', detected);
    return detected;
  } catch (error) {
    console.error('Error getting initial language:', error);
    return defaultLanguage;
  }
}

// Store language preference
export function setLanguage(language: Language): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('language', language);
  } catch (error) {
    console.error('Error storing language:', error);
  }
}
