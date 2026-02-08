import { Language } from '@/lib/i18n';
import { en } from './en';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';

export type TranslationKeys = typeof en;

export const translations: Record<Language, TranslationKeys> = {
  en,
  es,
  de,
  fr,
};
