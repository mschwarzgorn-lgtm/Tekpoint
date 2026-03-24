'use client';
import { useTranslations } from 'next-intl';

const articles = [
  { catKey: 'index_134', titleKey: 'index_135', descKey: 'index_136', icon: '📊' },
  { catKey: 'index_137', titleKey: 'index_138', descKey: 'index_139', icon: '🤝' },
  { catKey: 'index_140', titleKey: 'index_141', descKey: 'index_142', icon: '💡' },
];

export default function NewsSection() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">{t('index_131')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('index_132')}</h2>
          </div>
          <a href="/news" className="text-orange-500 font-semibold hover:text-orange-400 hidden md:block">{t('index_133')}</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div key={a.titleKey} className="bg-[#111d33] rounded-xl p-6 hover:bg-[#162240] transition-colors">
              <div className="text-3xl mb-4">{a.icon}</div>
              <span className="text-orange-500 text-sm font-semibold uppercase">{t(a.catKey)}</span>
              <h3 className="text-lg font-bold text-white mt-2 mb-3">{t(a.titleKey)}</h3>
              <p className="text-gray-400 text-sm">{t(a.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
