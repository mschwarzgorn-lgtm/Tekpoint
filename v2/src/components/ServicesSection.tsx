'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const services = [
  { icon: '🚚', titleKey: 'index_108', descKey: 'index_109', href: '/services-logistics' },
  { icon: '📢', titleKey: 'index_111', descKey: 'index_112', href: '/services-marketing' },
  { icon: '🔗', titleKey: 'index_113', descKey: 'index_114', href: '/services-partner-connectivity' },
  { icon: '📊', titleKey: 'index_115', descKey: 'index_116', href: '/services' },
  { icon: '📦', titleKey: 'index_117', descKey: 'index_118', href: '/services' },
  { icon: '🛡️', titleKey: 'index_120', descKey: 'index_121', href: '/services' },
];

export default function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#e8581c] font-semibold text-sm mb-2">{t('index_105')}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">{t('index_106')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('index_107')}</p>
        </div>

        {/* 6 Service Cards in 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <div key={i} className="bg-[#1a1a2e] rounded-xl p-6 lg:p-8 group hover:bg-[#22224a] transition-colors">
              <div className="text-3xl mb-4">{svc.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{t(svc.titleKey)}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{t(svc.descKey)}</p>
              <Link
                href={`/${locale}${svc.href}`}
                className="inline-flex items-center text-[#e8581c] hover:text-orange-400 text-sm font-semibold transition-colors group-hover:gap-2"
              >
                {t('index_110')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
