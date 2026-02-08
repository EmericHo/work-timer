'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function HomePageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
          {t('header.mainTitle')}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
          {t('header.description')}
        </p>
      </section>
    </>
  );
}
