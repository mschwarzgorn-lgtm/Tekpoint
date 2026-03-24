import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import BrandGrid from "@/components/BrandGrid";
import CustomerGrid from "@/components/CustomerGrid";
import ServicesSection from "@/components/ServicesSection";
import SegmentsSection from "@/components/SegmentsSection";
import HighlightsBar from "@/components/HighlightsBar";
import CtaSection from "@/components/CtaSection";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section - 2 column grid like v1 */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
        color: '#fff', padding: '100px 0 80px', position: 'relative', overflow: 'hidden'
      }}>
        {/* Orange glow effects */}
        <div style={{
          position: 'absolute', top: '-50%', right: '-20%', width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(232,88,28,0.15) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-30%', left: '-10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(232,88,28,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none'
        }} />

        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
          alignItems: 'center', position: 'relative', zIndex: 1
        }}>
          {/* Left - Text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(232,88,28,0.15)', border: '1px solid rgba(232,88,28,0.3)',
              padding: '6px 16px', borderRadius: '100px', fontSize: '13px',
              fontWeight: 600, color: '#ff8c5a', marginBottom: '20px'
            }}>
              🚀 {t("index_18")}
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 900, lineHeight: 1.1,
              marginBottom: '20px', letterSpacing: '-1.5px'
            }}>
              {t("index_19")}{" "}
              <span style={{ color: '#e8581c' }}>{t("index_20")}</span>
              <br />
              <span style={{ fontSize: '28px', fontWeight: 400, color: 'rgba(255,255,255,0.75)' }}>
                {t("index_21")} {t("index_22")}
              </span>
            </h1>
            <p style={{
              fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)',
              marginBottom: '36px', maxWidth: '520px'
            }}>
              {t("index_23")}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/become-a-partner" style={{
                background: '#e8581c', color: '#fff', padding: '14px 32px',
                borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}>
                {t("index_155")} →
              </Link>
              <Link href="/about" style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', padding: '14px 32px', borderRadius: '10px',
                fontWeight: 600, fontSize: '15px', transition: 'all 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}>
                {t("index_24")} ↓
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid (2x2 glass cards) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              { value: '3.5M+', label: t('index_28') },
              { value: '120+', label: t('stat_retailers_label') },
              { value: '30+', label: t('index_29') },
              { value: '2009', label: t('stat_founded_label') },
            ].map((stat) => (
              <div key={stat.value} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px', padding: '28px', backdropFilter: 'blur(10px)',
                transition: 'all 0.3s'
              }}>
                <div style={{
                  fontSize: '36px', fontWeight: 900, color: '#e8581c',
                  marginBottom: '4px', letterSpacing: '-1px'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '14px', color: 'rgba(255,255,255,0.65)', fontWeight: 500
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar - Customer Logos */}
      <CustomerGrid />

      {/* About Section */}
      <section id="about" style={{ padding: '96px 0', background: '#f8f9fa' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'
        }}>
          {/* Left - Features */}
          <div>
            <div style={{
              fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '2px', color: '#e8581c', marginBottom: '12px'
            }}>
              {t("index_39")}
            </div>
            <h2 style={{
              fontSize: '36px', fontWeight: 800, color: '#1a1a2e',
              marginBottom: '16px', lineHeight: 1.2
            }}>
              {t("index_40")} {t("index_41")}
            </h2>
            <p style={{
              fontSize: '16px', color: '#868e96', lineHeight: 1.7, marginBottom: '32px'
            }}>
              {t("index_42")}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📦', title: t("index_43"), desc: t("index_44") },
                { icon: '🌍', title: t("index_45"), desc: t("index_46") },
                { icon: '🤝', title: t("index_47"), desc: t("index_48") },
              ].map((feature) => (
                <div key={feature.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px', background: '#fff3ee',
                    borderRadius: '12px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '22px'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a2e', marginBottom: '4px' }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#868e96', lineHeight: 1.6 }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Map Graphic */}
          <div style={{
            position: 'relative', borderRadius: '20px', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                🇪🇺 Serving Western, Central &amp; Eastern Europe
              </div>
              <p>Local presence. Pan-European coverage.</p>
              <p style={{ fontWeight: 600, marginTop: '12px', marginBottom: '4px' }}>Office Locations</p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '12px' }}>
                {['🇦🇹 Austria (HQ)', '🇩🇪 Germany', '🇷🇸 Serbia'].map((tag) => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                    padding: '4px 12px', borderRadius: '100px', fontSize: '12px'
                  }}>{tag}</span>
                ))}
              </div>
              <p style={{ fontWeight: 600, marginTop: '12px', marginBottom: '4px' }}>Markets Served</p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['🇨🇭 Switzerland', '🇳🇱 Netherlands', '🇧🇪 Belgium', '🇱🇺 Luxembourg', '🇧🇦 Balkans', '🌍 Wider Europe'].map((tag) => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                    padding: '4px 12px', borderRadius: '100px', fontSize: '12px'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section id="brands" style={{ padding: '96px 0', background: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '2px', color: '#e8581c', marginBottom: '12px'
          }}>
            {t("index_62")}
          </div>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#1a1a2e', marginBottom: '16px'
          }}>
            {t("index_63")}
          </h2>
          <p style={{ fontSize: '16px', color: '#868e96', maxWidth: '600px', margin: '0 auto 48px' }}>
            {t("index_64")}
          </p>
          <BrandGrid />
        </div>
      </section>

      {/* Segments - For Manufacturers / Retailers / E-Tailers */}
      <SegmentsSection />

      {/* Services */}
      <ServicesSection />

      {/* Highlights Bar */}
      <HighlightsBar />

      {/* CTA */}
      <CtaSection />
    </>
  );
}
