'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const segments = [
  { icon: '🏭', titleKey: 'index_96', descKey: 'index_97', ctaKey: 'index_98', href: '/vendors', color: 'from-blue-500/10 to-blue-600/5' },
  { icon: '🏪', titleKey: 'index_99', descKey: 'index_100', ctaKey: 'index_101', href: '/vendors', color: 'from-green-500/10 to-green-600/5' },
  { icon: '💻', titleKey: 'index_102', descKey: 'index_103', ctaKey: 'index_104', href: '/vendors', color: 'from-purple-500/10 to-purple-600/5' },
];

export default function SegmentsSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="segments" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#e8581c] font-semibold text-sm mb-2">{t('index_93')}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">{t('index_94')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('index_95')}</p>
        </div>

        {/* 3 Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((seg, i) => (
            <div key={i} className={`bg-gradient-to-br ${seg.color} border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all`}>
              <div className="text-4xl mb-4">{seg.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{t(seg.titleKey)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t(seg.descKey)}</p>
              <Link
                href={`/${locale}${seg.href}`}
                className="inline-flex items-center text-[#e8581c] hover:text-[#d14e18] text-sm font-semibold transition-colors"
              >
                {t(seg.ctaKey)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
