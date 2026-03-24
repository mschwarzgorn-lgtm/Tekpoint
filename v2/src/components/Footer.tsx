'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <footer className="bg-[#0a0a15] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('index_147')}</h3>
            <p className="text-gray-400 text-sm mb-6">{t('index_148')}</p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors text-sm font-bold">{t('index_149')}</a>
              <a href="https://xing.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors text-sm font-bold">X</a>
              <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors text-sm font-bold">▶</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('index_150')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href={`/${locale}/about`} className="hover:text-white transition-colors">{t('index_39')}</a></li>
              <li><a href={`/${locale}/management-board`} className="hover:text-white transition-colors">{t('index_151')}</a></li>
              <li><a href={`/${locale}/about`} className="hover:text-white transition-colors">{t('index_152')}</a></li>
              <li><a href={`/${locale}/career`} className="hover:text-white transition-colors">{t('index_153')}</a></li>
              <li><a href={`/${locale}/contact`} className="hover:text-white transition-colors">{t('nav_contact') || 'Contact'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">All Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href={`/${locale}/services/logistics`} className="hover:text-white transition-colors">{t('index_154')}</a></li>
              <li><a href={`/${locale}/services/marketing`} className="hover:text-white transition-colors">{t('index_126')}</a></li>
              <li><a href={`/${locale}/services/partner-connectivity`} className="hover:text-white transition-colors">{t('index_113')}</a></li>
              <li><a href={`/${locale}/services`} className="hover:text-white transition-colors">{t('index_117')}</a></li>
              <li><a href={`/${locale}/services`} className="hover:text-white transition-colors">{t('index_115')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('index_14')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href={`/${locale}/vendors`} className="hover:text-white transition-colors">{t('index_96')}</a></li>
              <li><a href={`/${locale}/vendors`} className="hover:text-white transition-colors">{t('index_99')}</a></li>
              <li><a href={`/${locale}/vendors`} className="hover:text-white transition-colors">{t('index_102')}</a></li>
              <li><a href={`/${locale}/vendors`} className="hover:text-white transition-colors">{t('index_62')}</a></li>
              <li><a href={`/${locale}/contact`} className="hover:text-white transition-colors">{t('index_155')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>{t('index_156')}</span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t('index_157')}</a>
            <a href={`/${locale}/terms`} className="hover:text-white transition-colors">{t('index_158')}</a>
            <a href={`/${locale}/imprint`} className="hover:text-white transition-colors">{t('index_159')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
