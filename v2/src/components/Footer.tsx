'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const companyLinks = [
    { label: t('about_11'), href: `/${locale}/about` },
    { label: t('about_12'), href: `/${locale}/management-board` },
    { label: t('about_13'), href: `/${locale}/contact` },
    { label: t('about_20'), href: `/${locale}/career` },
    { label: t('about_21'), href: `/${locale}/contact` },
  ];

  const servicesLinks = [
    { label: t('about_18'), href: `/${locale}/services-logistics` },
    { label: t('about_19'), href: `/${locale}/services-marketing` },
    { label: t('about_17'), href: `/${locale}/services-partner-connectivity` },
    { label: t('index_117'), href: `/${locale}/services` },
    { label: t('index_115'), href: `/${locale}/services` },
  ];

  const partnersLinks = [
    { label: t('about_110'), href: `/${locale}/vendors` },
    { label: t('about_109'), href: `/${locale}/vendors` },
    { label: t('index_102'), href: `/${locale}/vendors` },
    { label: t('about_107'), href: `/${locale}/vendors` },
    { label: t('about_108'), href: `/${locale}/become-a-partner` },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">{t('index_147')}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              {t('index_148')}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/tekpoint-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0077b5] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">{t('index_149')}</span>
              </a>
              <a
                href="https://www.xing.com/pages/tekpointgmbh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#006567] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Xing"
              >
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="https://www.youtube.com/@tekpointgmbh8118"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#ff0000] rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <span className="text-sm">▶</span>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t('index_150')}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#e8581c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t('about_105')}
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#e8581c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t('about_106')}
            </h4>
            <ul className="space-y-2.5">
              {partnersLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[#e8581c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-sm">
              © 2026 Tekpoint GmbH. {t('index_156').replace(/©\s*2026\s*Tekpoint\.?\s*/i, '')}
            </p>
            <div className="flex items-center gap-6">
              <Link href={`/${locale}/privacy-policy`} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {t('index_157')}
              </Link>
              <Link href={`/${locale}/terms-and-conditions`} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {t('index_158')}
              </Link>
              <Link href={`/${locale}/imprint`} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {t('index_159')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
