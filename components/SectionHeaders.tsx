'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function SectionHeader({ translationKey }: { translationKey: string }) {
  const { t } = useLanguage();
  return <h2 className="text-3xl font-bold mb-6 text-center">{t(translationKey)}</h2>;
}

export function LearnMore() {
  const { t } = useLanguage();
  return <span className="text-sm font-semibold">{t('common.learnMore')}</span>;
}
