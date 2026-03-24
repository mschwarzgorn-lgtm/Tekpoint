'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { locales, localeNames } from '@/i18n/config';

const localeFlags: Record<string, string> = {
  en: '🇬🇧', de: '🇩🇪', nl: '🇳🇱', fr: '🇫🇷', es: '🇪🇸',
  it: '🇮🇹', sr: '🇷🇸', da: '🇩🇰', sv: '🇸🇪', no: '🇳🇴',
  fi: '🇫🇮', is: '🇮🇸', pl: '🇵🇱', ro: '🇷🇴', cs: '🇨🇿',
  hu: '🇭🇺', hr: '🇭🇷', bg: '🇧🇬', sk: '🇸🇰', sl: '🇸🇮',
  pt: '🇵🇹', el: '🇬🇷', et: '🇪🇪', lv: '🇱🇻', lt: '🇱🇹',
  ga: '🇮🇪', mt: '🇲🇹', zh: '🇨🇳', ja: '🇯🇵', ko: '🇰🇷',
};

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) setLangDropdownOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) setAboutDropdownOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setServicesDropdownOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentFlag = localeFlags[locale] || '🌐';
  const currentCode = locale.toUpperCase();

  function getLocalePath(targetLocale: string) {
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  }

  const aboutLinks = [
    { label: t('about_11'), href: `/${locale}/about` },
    { label: t('about_12'), href: `/${locale}/management-board` },
    { label: t('about_13'), href: `/${locale}/contact` },
    { label: t('about_14'), href: `/${locale}/vendors` },
  ];

  const servicesLinks = [
    { label: t('about_16'), href: `/${locale}/services` },
    { label: t('about_17'), href: `/${locale}/services-partner-connectivity` },
    { label: t('about_18'), href: `/${locale}/services-logistics` },
    { label: t('about_19'), href: `/${locale}/services-marketing` },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="bg-[#16163a] text-white/70 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="hidden sm:inline">{t('index_5')}</span>
          <span className="sm:hidden text-[11px]">📍 Vienna, Austria | 📧 info@tekpoint.com</span>
          
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-sm"
            >
              <span>{currentFlag}</span>
              <span>{currentCode}</span>
              <svg className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto w-44">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={getLocalePath(loc)}
                    onClick={() => setLangDropdownOpen(false)}
                    className={`flex items-center gap-2 px-4 py-1.5 text-sm hover:bg-orange-50 transition-colors ${
                      loc === locale ? 'text-[#e8581c] font-semibold bg-orange-50' : 'text-gray-700'
                    }`}
                  >
                    <span>{localeFlags[loc] || '🌐'}</span>
                    <span>{localeNames[loc] || loc.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1a1a2e] sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex-shrink-0">
              <img 
                src="/images/tekpoint-logo.png" 
                alt="Tekpoint"
                className="h-8 lg:h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.insertAdjacentHTML('afterend', '<span class="text-white text-2xl lg:text-3xl font-bold tracking-tight">Tekpoint</span>');
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* About Us Dropdown */}
              <div ref={aboutRef} className="relative">
                <button
                  onClick={() => { setAboutDropdownOpen(!aboutDropdownOpen); setServicesDropdownOpen(false); }}
                  className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                >
                  {t('about_10')}
                  <svg className={`w-3 h-3 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 w-56">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8581c] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesDropdownOpen(!servicesDropdownOpen); setAboutDropdownOpen(false); }}
                  className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                >
                  {t('about_15')}
                  <svg className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 w-56">
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e8581c] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href={`/${locale}/career`} className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                {t('about_20')}
              </Link>
              <Link href={`/${locale}/contact`} className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                {t('about_21')}
              </Link>

              {/* CTA Button */}
              <Link
                href={`/${locale}/become-a-partner`}
                className="ml-4 bg-[#e8581c] hover:bg-[#d14e18] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                {t('about_22')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16163a] border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              {/* About Us Mobile Accordion */}
              <div>
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="w-full flex items-center justify-between text-white/80 hover:text-white py-2 text-sm font-medium"
                >
                  {t('about_10')}
                  <svg className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm text-white/60 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Mobile Accordion */}
              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between text-white/80 hover:text-white py-2 text-sm font-medium"
                >
                  {t('about_15')}
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm text-white/60 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href={`/${locale}/career`} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-white/80 hover:text-white font-medium">
                {t('about_20')}
              </Link>
              <Link href={`/${locale}/contact`} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-white/80 hover:text-white font-medium">
                {t('about_21')}
              </Link>

              <Link
                href={`/${locale}/become-a-partner`}
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 bg-[#e8581c] hover:bg-[#d14e18] text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                {t('about_22')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
