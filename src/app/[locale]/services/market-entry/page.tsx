import { setRequestLocale, getTranslations } from "next-intl/server";
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
    pagePath: "/market-entry",
    titleKey: "seo1_title",
    descriptionKey: "seo1_meta_desc",
    fallbackTitle: "European Market Entry for Asian Technology Brands — Tekpoint",
    fallbackDescription: "Tekpoint helps Asian technology brands enter the European market — compliance, logistics, retail access and brand building.",
  });
}

const challenges = [
  { titleKey: "seo1_c1_title", textKey: "seo1_c1_text" },
  { titleKey: "seo1_c2_title", textKey: "seo1_c2_text" },
  { titleKey: "seo1_c3_title", textKey: "seo1_c3_text" },
  { titleKey: "seo1_c4_title", textKey: "seo1_c4_text" },
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
      {/* Hero */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        <Image
          src="/images/image_new25-scaled.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-300 mb-4 block">{t("seo1_tag")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">{t("seo1_title")}</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{t("seo1_subtitle")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo1_intro_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo1_intro_text")}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-3xl">{t("seo1_challenge_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((c) => (
              <div key={c.titleKey} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(c.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(c.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("seo1_approach_title")}</h2>
            <p className="text-lg text-gray-600">{t("seo1_approach_subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.titleKey} className="p-6 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(a.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{t(a.textKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo1_who_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo1_who_text")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("seo1_cta_title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">{t("seo1_cta_text")}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
            {t("seo1_cta_button")} →
          </Link>
        </div>
      </section>
    </>
  );
}
