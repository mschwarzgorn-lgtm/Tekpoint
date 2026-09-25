import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  LocaleBreadcrumbJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Globe, ShieldCheck, Warehouse, Store, Palette, Calculator } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services/market-entry",
    titleKey: "seo1_title",
    descriptionKey: "seo1_meta_desc",
    fallbackTitle: "European Market Entry for Asian Technology Brands — Tekpoint",
    fallbackDescription: "Tekpoint helps Asian technology brands enter the European market — compliance, logistics, retail access and brand building.",
  });
}

const challenges = [
  { titleKey: "seo1_c1_title", textKey: "seo1_c1_text", num: "01" },
  { titleKey: "seo1_c2_title", textKey: "seo1_c2_text", num: "02" },
  { titleKey: "seo1_c3_title", textKey: "seo1_c3_text", num: "03" },
  { titleKey: "seo1_c4_title", textKey: "seo1_c4_text", num: "04" },
];

const approaches = [
  { titleKey: "seo1_a1_title", textKey: "seo1_a1_text", icon: ShieldCheck },
  { titleKey: "seo1_a2_title", textKey: "seo1_a2_text", icon: Warehouse },
  { titleKey: "seo1_a3_title", textKey: "seo1_a3_text", icon: Store },
  { titleKey: "seo1_a4_title", textKey: "seo1_a4_text", icon: Palette },
  { titleKey: "seo1_a5_title", textKey: "seo1_a5_text", icon: Calculator },
];

export default async function MarketEntryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <ServiceJsonLd
        locale={locale}
        path="/services/market-entry"
        name={t("seo1_title")}
        description={t("seo1_meta_desc")}
        serviceType="Market entry consulting and execution"
      />
      <LocaleBreadcrumbJsonLd
        locale={locale}
        trail={[
          { name: t("index_13"), path: "/services" },
          { name: t("seo_nav_1"), path: "/services/market-entry" },
        ]}
      />
      {/* Hero — left-aligned, asymmetric */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        <Image
          src="/images/image_new25-scaled.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-sm font-medium tracking-widest uppercase text-orange-300 mb-4 block">{t("seo1_tag")}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">{t("seo1_title")}</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t("seo1_subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Introduction — with orange left border accent */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="border-l-4 border-orange-500 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo1_intro_title")}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t("seo1_intro_text")}</p>
          </div>
        </div>
      </section>

      {/* Challenges — Zigzag alternating blocks */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t("seo1_challenge_title")}</h2>
          <div className="space-y-12">
            {challenges.map((c, i) => (
              <div key={c.titleKey} className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Number block */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{c.num}</span>
                </div>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(c.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(c.textKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — Horizontal process strip with connected dots */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("seo1_approach_title")}</h2>
            <p className="text-lg text-gray-600">{t("seo1_approach_subtitle")}</p>
          </div>

          {/* Process flow — vertical on mobile, horizontal strip on lg */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {approaches.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={a.titleKey} className="text-center relative">
                    {/* Dot on line */}
                    <div className="w-16 h-16 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-md">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{t(a.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{t(a.textKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for — dark background for contrast */}
      <section className="py-20 md:py-28 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("seo1_who_title")}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t("seo1_who_text")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo1_cta_title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">{t("seo1_cta_text")}</p>
          <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
            {t("seo1_cta_button")} →
          </Link>
        </div>
      </section>
    </>
  );
}
