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
};

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [langOpen, setLangOpen] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'en';
  const flag = flagMap[currentLocale] || '🇬🇧';
  const langCode = currentLocale.toUpperCase();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div className="bg-[#0a0a15] border-b border-white/10 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-400">
          <span>{t('index_5')}</span>
          <div className="relative">
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
      <nav className="bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href={`/${currentLocale}`} className="flex-shrink-0">
            <Image src="/images/tekpoint-logo.png" alt="Tekpoint" width={180} height={40} className="h-10 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href={`/${currentLocale}/about`} className="text-gray-300 hover:text-white transition-colors">{t('nav_about') || 'About Us'}</a>
            <a href={`/${currentLocale}/vendors`} className="text-gray-300 hover:text-white transition-colors">{t('nav_vendors') || 'Vendors'}</a>
            <a href={`/${currentLocale}/services`} className="text-gray-300 hover:text-white transition-colors">{t('nav_services') || 'Services'}</a>
            <a href={`/${currentLocale}/career`} className="text-gray-300 hover:text-white transition-colors">{t('nav_career') || 'Careers'}</a>
            <a href={`/${currentLocale}/contact`} className="text-gray-300 hover:text-white transition-colors">{t('nav_contact') || 'Contact'}</a>
            <a href={`/${currentLocale}/contact`} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm">
              {t('index_17')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
