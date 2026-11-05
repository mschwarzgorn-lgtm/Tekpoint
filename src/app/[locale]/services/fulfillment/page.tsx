import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  LocaleBreadcrumbJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Ship, Search, Archive, Store, ShoppingCart, RotateCcw, Clock } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services/fulfillment",
    titleKey: "seo4_title",
    descriptionKey: "seo4_meta_desc",
    fallbackTitle: "Retail & E-Commerce Fulfillment in Europe — Tekpoint",
    fallbackDescription: "End-to-end fulfillment for international technology brands — import, warehousing, retail and marketplace shipping, returns.",
  });
}

const chain = [
  { titleKey: "seo4_ch1_title", textKey: "seo4_ch1_text", icon: Ship },
  { titleKey: "seo4_ch2_title", textKey: "seo4_ch2_text", icon: Search },
  { titleKey: "seo4_ch3_title", textKey: "seo4_ch3_text", icon: Archive },
  { titleKey: "seo4_ch4_title", textKey: "seo4_ch4_text", icon: Store },
  { titleKey: "seo4_ch5_title", textKey: "seo4_ch5_text", icon: ShoppingCart },
  { titleKey: "seo4_ch6_title", textKey: "seo4_ch6_text", icon: RotateCcw },
];

const speedKeys = ["seo4_speed_1", "seo4_speed_2", "seo4_speed_3", "seo4_speed_4"];

export default async function FulfillmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <ServiceJsonLd
        locale={locale}
        path="/services/fulfillment"
        name={t("seo4_title")}
        description={t("seo4_meta_desc")}
        serviceType="Order fulfillment"
      />
      <LocaleBreadcrumbJsonLd
        locale={locale}
        trail={[
          { name: t("index_13"), path: "/services" },
          { name: t("seo_nav_4"), path: "/services/fulfillment" },
        ]}
      />
      {/* Hero */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        <Image src="/images/image_new25-scaled.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-300 mb-4 block">{t("seo4_tag")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">{t("seo4_title")}</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{t("seo4_subtitle")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo4_intro_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo4_intro_text")}</p>
        </div>
      </section>

      {/* Fulfillment Chain */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t("seo4_chain_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chain.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.titleKey} className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-sm font-semibold text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t(c.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{t(c.textKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retail Partners */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo4_retail_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo4_retail_text")}</p>
        </div>
      </section>

      {/* Speed */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t("seo4_speed_title")}</h2>
          <div className="space-y-4">
            {speedKeys.map((key) => (
              <div key={key} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-gray-800 font-medium pt-1">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("seo4_cta_title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">{t("seo4_cta_text")}</p>
          <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
            {t("seo4_cta_button")} →
          </Link>
        </div>
      </section>
    </>
  );
}
