import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer style={{ background: '#111122', color: 'rgba(255,255,255,0.6)', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px'
        }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img
                src="/images/tekpoint-logo.png" alt="Tekpoint"
                style={{ width: '200px', height: 'auto', filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('footer_description')}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              color: '#fff', fontSize: '14px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px'
            }}>
              {t('footer_company')}
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { href: '/about' as const, label: t('nav_about') },
                { href: '/vendors' as const, label: t('nav_vendors') },
                { href: '/career' as const, label: t('nav_career') },
                { href: '/contact' as const, label: t('nav_contact') },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: '10px' }}>
                  <Link href={item.href} style={{ fontSize: '14px', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              color: '#fff', fontSize: '14px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px'
            }}>
              {t('footer_services')}
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { href: '/services/logistics' as const, label: t('services_logistics_title') },
                { href: '/services/marketing' as const, label: t('services_marketing_title') },
                { href: '/services/partner-connectivity' as const, label: t('services_partner_title') },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: '10px' }}>
                  <Link href={item.href} style={{ fontSize: '14px', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              color: '#fff', fontSize: '14px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px'
            }}>
              {t('footer_legal')}
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {[
                { href: '/impressum' as const, label: t('nav_impressum') },
                { href: '/privacy-policy' as const, label: t('nav_privacy') },
                { href: '/terms-and-conditions' as const, label: t('nav_terms') },
                { href: '/cookie-policy' as const, label: t('nav_cookies') },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: '10px' }}>
                  <Link href={item.href} style={{ fontSize: '14px', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', fontSize: '13px', flexWrap: 'wrap', gap: '12px'
        }}>
          <span>© {new Date().getFullYear()} Tekpoint e.U. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy" style={{ marginLeft: '24px', transition: 'color 0.2s' }}>{t('nav_privacy')}</Link>
            <Link href="/terms-and-conditions" style={{ marginLeft: '24px', transition: 'color 0.2s' }}>{t('nav_terms')}</Link>
            <Link href="/impressum" style={{ marginLeft: '24px', transition: 'color 0.2s' }}>{t('nav_impressum')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
