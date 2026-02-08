// Supported languages
export type Language = 'en' | 'es' | 'de' | 'fr';

export const languages: Language[] = ['en', 'es', 'de', 'fr'];

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
};

// Default language is English
export const defaultLanguage: Language = 'en';

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
