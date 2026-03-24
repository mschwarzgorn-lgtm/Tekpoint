'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function SegmentsSection() {
  const t = useTranslations();
  const locale = usePathname().split('/')[1] || 'en';

  const segments = [
    { icon: '🏭', title: t('index_96'), desc: t('index_97'), cta: t('index_98'), href: `/${locale}/vendors` },
    { icon: '🛒', title: t('index_99'), desc: t('index_100'), cta: t('index_101'), href: `/${locale}/vendors` },
    { icon: '💻', title: t('index_102'), desc: t('index_103'), cta: t('index_104'), href: `/${locale}/vendors` },
  ];

  return (
    <section className="py-20 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-orange-500 font-semibold mb-2">{t('index_93')}</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('index_94')}</h2>
        <p className="text-gray-300 max-w-3xl mb-12">{t('index_95')}</p>
        <div className="space-y-4">
          {segments.map((seg, i) => (
            <div key={i} className="bg-[#1a1a2e] border-l-4 border-orange-500 rounded-xl p-8 hover:bg-[#1e1e35] transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{seg.icon}</span>
                <h3 className="text-xl font-bold text-white">{seg.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{seg.desc}</p>
              <a href={seg.href} className="text-orange-400 hover:text-orange-300 font-semibold">{seg.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
