'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { languages, languageNames, languageFlags, languageDirections } from '@/lib/i18n';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: typeof language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Top 9 languages (most common)
  const topLanguages = languages.slice(0, 9);
  const otherLanguages = languages.slice(9);

  return (
    <>
      {/* Desktop Version - Sticky Left Sidebar */}
      <div className="hidden md:block fixed left-4 top-24 z-40" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
          aria-label="Change language"
          title={`Current language: ${languageNames[language]}`}
        >
          <span className="text-2xl">{languageFlags[language]}</span>
          <span className="text-sm font-medium">{languageNames[language]}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
              </svg>
              Available Languages
            </div>
            
            {/* Top Languages */}
            {topLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 ${
                  language === lang ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                dir={languageDirections[lang]}
              >
                <span className="text-2xl">{languageFlags[lang]}</span>
                <span className="text-sm font-medium flex-1">{languageNames[lang]}</span>
                {language === lang && (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
            
            {/* Separator */}
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-xs text-gray-600 dark:text-gray-400 font-semibold">
              MORE LANGUAGES
            </div>
            
            {/* Other Languages */}
            {otherLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                  language === lang ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                dir={languageDirections[lang]}
              >
                <span className="text-2xl">{languageFlags[lang]}</span>
                <span className="text-sm font-medium flex-1">{languageNames[lang]}</span>
                {language === lang && (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Version - Floating Bottom Right */}
      <div className="md:hidden fixed bottom-4 right-4 z-40" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all"
          aria-label="Change language"
          title={`Current language: ${languageNames[language]}`}
        >
          <span className="text-2xl">{languageFlags[language]}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 bottom-full mb-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
              </svg>
              Languages
            </div>
            
            {/* Top Languages */}
            {topLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 ${
                  language === lang ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                dir={languageDirections[lang]}
              >
                <span className="text-2xl">{languageFlags[lang]}</span>
                <span className="text-sm font-medium flex-1">{languageNames[lang]}</span>
                {language === lang && (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
            
            {/* Separator */}
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-xs text-gray-600 dark:text-gray-400 font-semibold">
              MORE
            </div>
            
            {/* Other Languages */}
            {otherLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                  language === lang ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                dir={languageDirections[lang]}
              >
                <span className="text-2xl">{languageFlags[lang]}</span>
                <span className="text-sm font-medium flex-1">{languageNames[lang]}</span>
                {language === lang && (
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
