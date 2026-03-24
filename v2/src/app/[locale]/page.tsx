"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import BrandGrid from "@/components/BrandGrid";
import CustomerGrid from "@/components/CustomerGrid";
import SegmentsSection from "@/components/SegmentsSection";
import ServicesSection from "@/components/ServicesSection";
import HighlightsBar from "@/components/HighlightsBar";
import TestimonialSection from "@/components/TestimonialSection";
import NewsSection from "@/components/NewsSection";
import CtaSection from "@/components/CtaSection";

const stats = [
  { value: "10K+", labelKey: "hero.stat1_label" },
  { value: "3.5M+", labelKey: "hero.stat2_label" },
  { value: "28+", labelKey: "hero.stat3_label" },
  { value: "5+", labelKey: "hero.stat4_label" },
];

const features = [
  { icon: "📦", titleKey: "about.feature1_title", descKey: "about.feature1_desc" },
  { icon: "🌍", titleKey: "about.feature2_title", descKey: "about.feature2_desc" },
  { icon: "🤝", titleKey: "about.feature3_title", descKey: "about.feature3_desc" },
];

const officeLocations = [
  { flag: "🇦🇹", name: "Vienna, Austria", role: "HQ" },
  { flag: "🇩🇪", name: "Munich, Germany", role: "Office" },
  { flag: "🇵🇱", name: "Warsaw, Poland", role: "Office" },
  { flag: "🇷🇴", name: "Bucharest, Romania", role: "Office" },
  { flag: "🇭🇺", name: "Budapest, Hungary", role: "Office" },
];

const markets = [
  "🇦🇹","🇩🇪","🇨🇭","🇳🇱","🇧🇪","🇵🇱","🇨🇿","🇸🇰","🇭🇺","🇷🇴","🇧🇬","🇭🇷","🇸🇮","🇷🇸","🇧🇦","🇲🇰","🇦🇱","🇬🇷",
];

export default function HomePage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3d] to-[#1a1a2e]"></div>
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-2 mb-8">
              <span>🚀</span>
              <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">{t("hero.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t("hero.title_line1")} <span className="text-orange-500">{t("hero.title_highlight")}</span> {t("hero.title_line2")}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition text-sm shadow-lg shadow-orange-500/25">
                {t("nav.become_partner")} →
              </Link>
              <a href="#about" className="border border-gray-500 text-gray-300 hover:text-white hover:border-white font-semibold px-8 py-3.5 rounded-lg transition text-sm">
                {t("hero.cta_secondary")} ↓
              </a>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div key={s.labelKey} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-extrabold text-orange-500 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <CustomerGrid />

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">{t("about.subtitle")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">{t("about.description")}</p>
          </div>
          {/* Vertical feature list - matching v1 */}
          <div className="max-w-3xl mx-auto space-y-8 mt-12">
            {features.map((f) => (
              <div key={f.titleKey} className="flex items-start gap-5">
                <span className="text-3xl flex-shrink-0 mt-1">{f.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t(f.titleKey)}</h3>
                  <p className="text-gray-500 leading-relaxed">{t(f.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🌐 {t("map.title")}</h2>
          <p className="text-gray-400 mb-12">{t("map.subtitle")}</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">{t("map.offices_title")}</h3>
              <div className="space-y-3">
                {officeLocations.map((loc) => (
                  <div key={loc.name} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                    <span className="text-xl">{loc.flag}</span>
                    <span className="text-gray-200">{loc.name}</span>
                    {loc.role === "HQ" && <span className="ml-auto bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full font-semibold">HQ</span>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400">{t("map.markets_title")}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {markets.map((flag, i) => (
                  <span key={i} className="text-3xl bg-white/5 rounded-lg p-2">{flag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <BrandGrid />

      {/* Segments */}
      <SegmentsSection />

      {/* Services */}
      <ServicesSection />

      {/* Highlights Bar */}
      <HighlightsBar />

      {/* Testimonial */}
      <TestimonialSection />

      {/* News */}
      <NewsSection />

      {/* CTA */}
      <CtaSection />
    </main>
  );
}
