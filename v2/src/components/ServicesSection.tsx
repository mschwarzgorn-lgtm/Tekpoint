'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function ServicesSection() {
  const t = useTranslations();
  const locale = usePathname().split('/')[1] || 'en';

  const services = [
    { icon: '🚚', title: t('index_108'), desc: t('index_109') },
    { icon: '📢', title: t('index_111'), desc: t('index_112') },
    { icon: '🔗', title: t('index_113'), desc: t('index_114') },
    { icon: '📊', title: t('index_115'), desc: t('index_116') },
    { icon: '🏭', title: t('index_117'), desc: t('index_118') },
    { icon: t('index_119'), title: t('index_120'), desc: t('index_121') },
  ];

  return (
    <section className="py-20 bg-[#0a0a15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-orange-500 font-semibold mb-2">{t('index_105')}</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('index_106')}</h2>
        <p className="text-gray-300 max-w-3xl mb-12">{t('index_107')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
              <span className="text-3xl mb-4 block">{svc.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{svc.desc}</p>
              <a href={`/${locale}/services`} className="text-orange-400 hover:text-orange-300 text-sm font-semibold">{t('index_110')}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
