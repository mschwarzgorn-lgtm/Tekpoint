'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function CtaSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="partners" className="py-16 lg:py-24 bg-gradient-to-br from-[#1a1a2e] to-[#2d1810]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#e8581c] font-semibold text-sm mb-3">{t('index_143')}</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t('index_144')}</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">{t('index_145')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/become-a-partner`}
            className="inline-flex items-center justify-center bg-[#e8581c] hover:bg-[#d14e18] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
          >
            {t('index_17')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
          >
            {t('index_146')}
          </Link>
        </div>
      </div>
    </section>
  );
}
