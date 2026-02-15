import { en } from './en';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';

export type TranslationKeys = typeof en;

// Only include languages that have translation files
// Other languages defined in i18n.ts can be added later
export const translations: Partial<Record<string, TranslationKeys>> = {
  en,
  es,
  de,
  fr,
};
