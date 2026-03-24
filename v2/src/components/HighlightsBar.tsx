'use client';
import { useTranslations } from 'next-intl';

export default function HighlightsBar() {
  const t = useTranslations();
  const highlights = [
    { icon: '🌍', label: `${t('index_122')} Distribution` },
    { icon: '🏭', label: `${t('index_123')} Warehousing` },
    { icon: '🛒', label: `${t('index_124')} ${t('index_125')}` },
    { icon: '📣', label: `${t('index_126')} Services` },
    { icon: '🏢', label: `${t('index_127')} ${t('index_128')}` },
  ];
  return (
    <section className="bg-orange-500 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 text-white">
              <span className="text-3xl">{h.icon}</span>
              <span className="font-bold text-sm uppercase tracking-wider">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
