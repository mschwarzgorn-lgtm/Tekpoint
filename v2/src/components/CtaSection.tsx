'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function CtaSection() {
  const t = useTranslations();
  const locale = usePathname().split('/')[1] || 'en';

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#2d1810] to-[#1a1a2e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-500 font-semibold mb-4">{t('index_143')}</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('index_144')}</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('index_145')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`/${locale}/contact`} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('index_17')}
          </a>
          <a href={`/${locale}/contact`} className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('index_146')}
          </a>
        </div>
      </div>
    </section>
  );
}
