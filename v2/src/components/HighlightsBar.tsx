'use client';

import { useTranslations } from 'next-intl';

const highlights = [
  { icon: '🌍', titleKey1: 'index_122', titleKey2: 'Distribution' },
  { icon: '📦', titleKey1: 'index_123', titleKey2: 'Warehousing' },
  { icon: '🏪', titleKey1: 'index_124', titleKey2: 'index_125' },
  { icon: '📢', titleKey1: 'index_126', titleKey2: 'Services' },
  { icon: '🏢', titleKey1: 'index_127', titleKey2: 'index_128' },
];

export default function HighlightsBar() {
  const t = useTranslations();

  return (
    <section className="bg-[#e8581c] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {highlights.map((hl, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl lg:text-4xl mb-2">{hl.icon}</div>
              <div className="text-sm lg:text-base font-bold leading-tight">
                {t(hl.titleKey1)}
                <br />
                {hl.titleKey2.startsWith('index_') ? t(hl.titleKey2) : hl.titleKey2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
