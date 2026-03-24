"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function SegmentsSection() {
  const t = useTranslations();
  const segments = [
    {
      icon: '🏭',
      title: t('index_108'),
      desc: t('index_109'),
      href: '/become-a-partner' as const,
    },
    {
      icon: '🏬',
      title: t('index_110'),
      desc: t('index_111'),
      href: '/become-a-partner' as const,
    },
    {
      icon: '🛒',
      title: t('index_112'),
      desc: t('index_113'),
      href: '/become-a-partner' as const,
    },
  ];

  return (
    <section id="segments" style={{ padding: '96px 0', background: '#1a1a2e', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '2px', color: '#ff8c5a', marginBottom: '12px'
          }}>
            {t('index_99')}
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            {t('index_100')}
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto' }}>
            {t('index_101')}
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
        }}>
          {segments.map((seg) => (
            <div key={seg.title} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px', padding: '40px 32px', transition: 'all 0.3s'
            }}>
              <div style={{
                width: '56px', height: '56px', background: 'rgba(232,88,28,0.15)',
                borderRadius: '14px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '28px', marginBottom: '24px'
              }}>
                {seg.icon}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                {seg.title}
              </h3>
              <p style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px'
              }}>
                {seg.desc}
              </p>
              <Link href={seg.href} style={{
                color: '#e8581c', fontWeight: 600, fontSize: '14px',
                display: 'inline-flex', alignItems: 'center', gap: '6px'
              }}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
