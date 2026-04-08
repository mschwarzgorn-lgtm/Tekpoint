import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Warehouse, Truck, Handshake, RotateCcw, BarChart3 } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/distribution",
    titleKey: "seo3_title",
    descriptionKey: "seo3_meta_desc",
    fallbackTitle: "European Distribution for Technology Brands — Tekpoint",
    fallbackDescription: "Tekpoint distributes technology brands across Europe — warehousing, retail access, fulfillment, and reporting.",
  });
}

const regions = [
  { titleKey: "seo3_cov1_title", textKey: "seo3_cov1_text" },
  { titleKey: "seo3_cov2_title", textKey: "seo3_cov2_text" },
  { titleKey: "seo3_cov3_title", textKey: "seo3_cov3_text" },
];

const howSteps = [
  { titleKey: "seo3_h1_title", textKey: "seo3_h1_text", icon: Warehouse },
  { titleKey: "seo3_h2_title", textKey: "seo3_h2_text", icon: Truck },
  { titleKey: "seo3_h3_title", textKey: "seo3_h3_text", icon: Handshake },
  { titleKey: "seo3_h4_title", textKey: "seo3_h4_text", icon: RotateCcw },
  { titleKey: "seo3_h5_title", textKey: "seo3_h5_text", icon: BarChart3 },
];

export default async function DistributionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        <Image src="/images/image_new25-scaled.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-300 mb-4 block">{t("seo3_tag")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">{t("seo3_title")}</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{t("seo3_subtitle")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo3_intro_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo3_intro_text")}</p>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("seo3_coverage_title")}</h2>
            <p className="text-lg text-gray-600">{t("seo3_coverage_subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((r) => (
              <div key={r.titleKey} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(r.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(r.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t("seo3_how_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.titleKey} className="p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(s.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{t(s.textKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo3_diff_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo3_diff_text")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("seo3_cta_title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">{t("seo3_cta_text")}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
            {t("seo3_cta_button")} →
          </Link>
        </div>
      </section>
    </>
  );
}
