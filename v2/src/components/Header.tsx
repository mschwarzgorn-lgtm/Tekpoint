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
    { href: '/about' as const, label: t('nav_about') },
    { href: '/vendors' as const, label: t('nav_vendors') },
    { href: '/services' as const, label: t('nav_services') },
    { href: '/career' as const, label: t('nav_career') },
    { href: '/contact' as const, label: t('nav_contact') },
  ];

  return (
    <>
      {/* Topbar */}
      <div style={{ background: '#111122', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '36px' }}>
          <div>📍 Headquarters: Vienna, Austria &nbsp;|&nbsp; 📧 info@tekpoint.com</div>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {locale.toUpperCase()} ▾
            </button>
            {langOpen && (
              <div style={{
                position: 'absolute', right: 0, top: '100%', marginTop: '4px',
                background: '#fff', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                padding: '8px 0', maxHeight: '320px', overflowY: 'auto', width: '180px', zIndex: 200
              }}>
                {locales.map((l) => (
                  <Link
                    key={l} href={pathname || '/'} locale={l}
                    style={{
                      display: 'block', padding: '8px 16px', fontSize: '13px',
                      color: l === locale ? '#e8581c' : '#343a40',
                      fontWeight: l === locale ? 700 : 400,
                    }}
                    onClick={() => setLangOpen(false)}
                  >
                    {localeNames[l] || l.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav style={{
        background: '#1a1a2e', position: 'sticky', top: 0, zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '96px' }}>
          <Link href="/">
            <img src="/images/tekpoint-logo.png" alt="Tekpoint" style={{ width: '270px', height: 'auto' }} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex" style={{ gap: '32px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.href} href={item.href}
                style={{
                  fontSize: '15px', fontWeight: 500, color: '#ffffff',
                  transition: 'color 0.2s', position: 'relative'
                }}
                className="hover-nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/become-a-partner"
              style={{
                background: '#e8581c', color: '#fff', padding: '10px 24px',
                borderRadius: '8px', fontWeight: 600, fontSize: '14px',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px'
              }}
            >
              {t('nav_partner')} →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" style={{ background: 'none', border: 'none', color: '#fff', padding: '8px', cursor: 'pointer' }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px 24px' }}>
            {navItems.map((item) => (
              <Link
                key={item.href} href={item.href}
                style={{ display: 'block', padding: '12px 0', color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/become-a-partner"
              style={{
                display: 'block', marginTop: '16px', textAlign: 'center', background: '#e8581c',
                color: '#fff', padding: '10px 24px', borderRadius: '8px', fontWeight: 600
              }}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav_partner')} →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
