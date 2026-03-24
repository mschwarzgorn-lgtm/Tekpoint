'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { locales, localeNames } from '@/i18n/config';

const flagMap: Record<string, string> = {
  en: '🇬🇧', de: '🇩🇪', pl: '🇵🇱', cs: '🇨🇿', ro: '🇷🇴',
  hu: '🇭🇺', sk: '🇸🇰', bg: '🇧🇬', hr: '🇭🇷', sl: '🇸🇮',
  sr: '🇷🇸', bs: '🇧🇦', mk: '🇲🇰', sq: '🇦🇱', el: '🇬🇷',
  tr: '🇹🇷', uk: '🇺🇦', nl: '🇳🇱', fr: '🇫🇷', it: '🇮🇹',
  es: '🇪🇸', pt: '🇵🇹', sv: '🇸🇪', da: '🇩🇰', fi: '🇫🇮',
  nb: '🇳🇴', et: '🇪🇪', lv: '🇱🇻', lt: '🇱🇹', ja: '🇯🇵',
  no: '🇳🇴', is: '🇮🇸', ga: '🇮🇪', mt: '🇲🇹', zh: '🇨🇳', ko: '🇰🇷',
};

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'en';
  const flag = flagMap[currentLocale] || '🇬🇧';
  const langCode = currentLocale.toUpperCase();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const navLinks = [
    { href: `/${currentLocale}/about`, label: t('nav_about') || 'About Us' },
    { href: `/${currentLocale}/vendors`, label: t('nav_vendors') || 'Vendors' },
    { href: `/${currentLocale}/services`, label: t('nav_services') || 'Services' },
    { href: `/${currentLocale}/career`, label: t('nav_career') || 'Careers' },
    { href: `/${currentLocale}/contact`, label: t('nav_contact') || 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div className="bg-[#0a0a15] border-b border-white/10 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm text-gray-400">
          <span className="truncate mr-2">{t('index_5')}</span>
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              {flag} {langCode} ▾
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 bg-[#1a1a2e] border border-white/20 rounded-lg shadow-xl py-2 w-48 max-h-64 overflow-y-auto z-50">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 ${
                      loc === currentLocale ? 'text-orange-400 font-bold' : 'text-gray-300'
                    }`}
                  >
                    {flagMap[loc] || '🏳️'} {localeNames[loc] || loc.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10 py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href={`/${currentLocale}`} className="flex-shrink-0">
            <Image src="/images/tekpoint-logo.png" alt="Tekpoint" width={220} height={56} className="h-10 sm:h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href={`/${currentLocale}/become-a-partner`} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm">
              {t('index_17') || 'Become a Partner →'}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`/${currentLocale}/become-a-partner`}
                onClick={() => setMobileMenuOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                {t('index_17') || 'Become a Partner →'}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
