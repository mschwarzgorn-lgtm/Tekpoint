'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const newsItems = [
  { tagKey: 'index_134', titleKey: 'index_135', descKey: 'index_136', color: 'blue' },
  { tagKey: 'index_137', titleKey: 'index_138', descKey: 'index_139', color: 'green' },
  { tagKey: 'index_140', titleKey: 'index_141', descKey: 'index_142', color: 'purple' },
];

const tagColors: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
};

export default function NewsSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <p className="text-[#e8581c] font-semibold text-sm mb-2">{t('index_131')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e]">{t('index_132')}</h2>
          </div>
          <Link
            href={`/${locale}/news`}
            className="mt-4 sm:mt-0 text-[#e8581c] hover:text-[#d14e18] font-semibold text-sm transition-colors"
          >
            {t('index_133')}
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, i) => (
            <article key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d5e] flex items-center justify-center">
                <span className="text-4xl">📰</span>
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${tagColors[item.color]}`}>
                  {t(item.tagKey)}
                </span>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#e8581c] transition-colors leading-snug">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
