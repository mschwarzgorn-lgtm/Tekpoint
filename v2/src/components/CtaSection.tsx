"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CtaSection() {
  const t = useTranslations();
  return (
    <section id="contact" style={{
      padding: '96px 0',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#fff', textAlign: 'center'
    }}>
      <div className="container">
        <div style={{
          fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '2px', color: '#ff8c5a', marginBottom: '12px'
        }}>
          Let&apos;s Grow Together
        </div>
        <h2 style={{
          fontSize: '36px', fontWeight: 800, color: '#fff', marginBottom: '16px'
        }}>
          {t("index_139")}
        </h2>
        <p style={{
          fontSize: '18px', color: 'rgba(255,255,255,0.7)',
          marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'
        }}>
          {t("index_140")}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/become-a-partner" style={{
            background: '#e8581c', color: '#fff', padding: '14px 32px',
            borderRadius: '10px', fontWeight: 700, fontSize: '15px',
            display: 'inline-flex', alignItems: 'center', gap: '8px'
          }}>
            {t("index_155")} →
          </Link>
          <Link href="/contact" style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', padding: '14px 32px', borderRadius: '10px',
            fontWeight: 600, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px'
          }}>
            {t("index_16")}
          </Link>
        </div>
      </div>
    </section>
  );
}
