'use client';
import { useTranslations } from 'next-intl';

export default function CtaSection() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-[#111d33]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">{t('index_143')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('index_144')}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t('index_145')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">{t('index_155')} →</a>
          <a href="/contact" className="border-2 border-gray-500 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors">{t('index_146')}</a>
        </div>
      </div>
    </section>
  );
}
