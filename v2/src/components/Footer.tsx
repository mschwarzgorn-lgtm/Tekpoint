import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-[#0a1628] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/images/tekpoint-logo.png" alt="Tekpoint" className="h-10 w-auto mb-6" />
            <p className="text-sm leading-relaxed">
              {t('footer_description')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">{t('nav_about')}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t('nav_services')}</Link></li>
              <li><Link href="/career" className="hover:text-white transition-colors">{t('nav_career')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t('nav_contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/logistics" className="hover:text-white transition-colors">{t('services_logistics_title')}</Link></li>
              <li><Link href="/services/marketing" className="hover:text-white transition-colors">{t('services_marketing_title')}</Link></li>
              <li><Link href="/services/partner-connectivity" className="hover:text-white transition-colors">{t('services_partner_title')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">{t('nav_impressum')}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">{t('nav_privacy')}</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">{t('nav_terms')}</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">{t('nav_cookies')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Tekpoint e.U. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
