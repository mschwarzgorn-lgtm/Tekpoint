'use client';
import { useTranslations } from 'next-intl';

export default function NewsSection() {
  const t = useTranslations();

  const articles = [
    { tag: t('index_134'), title: t('index_135'), desc: t('index_136'), color: 'bg-blue-500' },
    { tag: t('index_137'), title: t('index_138'), desc: t('index_139'), color: 'bg-green-500' },
    { tag: t('index_140'), title: t('index_141'), desc: t('index_142'), color: 'bg-purple-500' },
  ];

  return (
    <section className="py-20 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-orange-500 font-semibold mb-2">{t('index_131')}</p>
            <h2 className="text-3xl font-bold">{t('index_132')}</h2>
          </div>
          <a href="#" className="text-orange-400 hover:text-orange-300 font-semibold hidden md:block">{t('index_133')}</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="bg-[#1a1a2e] border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-colors">
              <div className="bg-[#12122a] p-8 flex items-center justify-center text-5xl">📰</div>
              <div className="p-6">
                <span className={`${a.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>{a.tag}</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
