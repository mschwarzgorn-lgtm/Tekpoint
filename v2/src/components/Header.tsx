'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useState } from 'react';
import { locales, localeNames } from '@/i18n/config';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: '/about', label: t('nav_about') },
    { href: '/services', label: t('nav_services') },
    { href: '/vendors', label: t('nav_vendors') },
    { href: '/career', label: t('nav_career') },
    { href: '/management-board', label: t('nav_management') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <img src="/images/tekpoint-logo.png" alt="Tekpoint" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 text-white/80 hover:text-white text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                {locale.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 max-h-80 overflow-y-auto w-48 z-50">
                  {locales.map((l) => (
                    <Link key={l} href={pathname || '/'} locale={l} className={`block px-4 py-2 text-sm hover:bg-gray-100 ${l === locale ? 'text-blue-600 font-bold' : 'text-gray-700'}`} onClick={() => setLangOpen(false)}>
                      {localeNames[l] || l.toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/become-a-partner" className="hidden sm:inline-flex px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors">
              {t('nav_partner')}
            </Link>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-3 text-white/80 hover:text-white text-base" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/become-a-partner" className="block mt-4 text-center px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-full" onClick={() => setMenuOpen(false)}>
              {t('nav_partner')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
