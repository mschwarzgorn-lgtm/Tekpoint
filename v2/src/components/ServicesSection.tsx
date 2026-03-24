'use client';
import { useTranslations } from 'next-intl';

const services = [
  { icon: '🚚', titleKey: 'index_108', descKey: 'index_109', link: '/services/logistics' },
  { icon: '📣', titleKey: 'index_111', descKey: 'index_112', link: '/services/marketing' },
  { icon: '🔗', titleKey: 'index_113', descKey: 'index_114', link: '/services/partner-connectivity' },
  { icon: '📊', titleKey: 'index_115', descKey: 'index_116', link: '/services/market-intelligence' },
  { icon: '📦', titleKey: 'index_117', descKey: 'index_118', link: '/services/warehousing' },
  { icon: '🛡️', titleKey: 'index_120', descKey: 'index_121', link: '/services/after-sales' },
];

export default function ServicesSection() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-3">{t('index_105')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('index_106')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('index_107')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div key={svc.titleKey} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(svc.titleKey)}</h3>
              <p className="text-gray-600 mb-4">{t(svc.descKey)}</p>
              <a href={svc.link} className="text-orange-500 font-semibold hover:text-orange-600">{t('index_110')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
