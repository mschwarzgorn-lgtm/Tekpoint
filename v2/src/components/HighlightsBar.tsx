'use client';
import { useTranslations } from 'next-intl';

export default function HighlightsBar() {
  const t = useTranslations();

  const highlights = [
    { icon: '🌍', line1: t('index_122'), line2: 'Distribution' },
    { icon: '🏭', line1: t('index_123'), line2: t('index_117') },
    { icon: '🛒', line1: t('index_124'), line2: t('index_125') },
    { icon: '📢', line1: t('index_126'), line2: t('index_13') },
    { icon: '🏢', line1: t('index_127'), line2: t('index_128') },
  ];

  return (
    <section className="bg-orange-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col items-center text-white">
              <span className="text-3xl mb-2">{h.icon}</span>
              <span className="font-bold text-sm uppercase">{h.line1}</span>
              <span className="text-xs uppercase opacity-80">{h.line2}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
