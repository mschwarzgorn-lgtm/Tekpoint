'use client';
import { useTranslations } from 'next-intl';

const segments = [
  { icon: '🏭', titleKey: 'index_96', descKey: 'index_97', linkKey: 'index_98', link: '/vendors' },
  { icon: '🏪', titleKey: 'index_99', descKey: 'index_100', linkKey: 'index_101', link: '/retailers' },
  { icon: '🛒', titleKey: 'index_102', descKey: 'index_103', linkKey: 'index_104', link: '/etailers' },
];

export default function SegmentsSection() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">{t('index_93')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('index_94')}</h2>
          <p className="text-gray-400">{t('index_95')}</p>
        </div>
        <div className="space-y-6">
          {segments.map((seg) => (
            <div key={seg.titleKey} className="bg-[#111d33] rounded-xl p-10 border-2 border-orange-500 text-center">
              <div className="text-5xl mb-5">{seg.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(seg.titleKey)}</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">{t(seg.descKey)}</p>
              <a href={seg.link} className="text-orange-500 font-semibold hover:text-orange-400">{t(seg.linkKey)}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
