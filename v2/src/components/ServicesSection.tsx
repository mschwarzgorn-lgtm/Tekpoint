"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesSection() {
  const t = useTranslations();
  const services = [
    { icon: '🔗', title: t("index_102"), desc: t("index_103"), href: '/services/partner-connectivity' as const },
    { icon: '📦', title: t("index_104"), desc: t("index_105"), href: '/services/logistics' as const },
    { icon: '📢', title: t("index_106"), desc: t("index_107"), href: '/services/marketing' as const },
  ];

  return (
    <section style={{ padding: '96px 0', background: '#f8f9fa', textAlign: 'center' }}>
      <div className="container">
        <div style={{
          fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '2px', color: '#e8581c', marginBottom: '12px'
        }}>
          {t("index_99")}
        </div>
        <h2 style={{
          fontSize: '36px', fontWeight: 800, color: '#1a1a2e', marginBottom: '16px'
        }}>
          {t("index_100")}
        </h2>
        <p style={{
          fontSize: '16px', color: '#868e96', maxWidth: '600px', margin: '0 auto 48px'
        }}>
          {t("index_101")}
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'left'
        }}>
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} style={{
              background: '#ffffff', border: '1px solid #e9ecef', borderRadius: '20px',
              padding: '40px 28px', transition: 'all 0.3s', display: 'block'
            }}>
              <div style={{
                width: '52px', height: '52px', background: '#fff3ee', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', marginBottom: '20px'
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a2e', marginBottom: '10px' }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#868e96', lineHeight: 1.7, marginBottom: '16px' }}>
                {svc.desc}
              </p>
              <span style={{
                color: '#e8581c', fontWeight: 600, fontSize: '14px',
                display: 'inline-flex', alignItems: 'center', gap: '6px'
              }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
