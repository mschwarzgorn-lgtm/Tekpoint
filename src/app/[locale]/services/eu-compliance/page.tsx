import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ShieldCheck, Recycle, Battery, FlaskConical, Package, UserCheck } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/eu-compliance",
    titleKey: "seo2_title",
    descriptionKey: "seo2_meta_desc",
    fallbackTitle: "EU Compliance & Regulatory Guidance — Tekpoint",
    fallbackDescription: "Tekpoint guides technology manufacturers through EU compliance — CE, WEEE, batteries, REACH, packaging, GPSR.",
  });
}

const regulations = [
  { titleKey: "seo2_r1_title", textKey: "seo2_r1_text", icon: ShieldCheck },
  { titleKey: "seo2_r2_title", textKey: "seo2_r2_text", icon: Recycle },
  { titleKey: "seo2_r3_title", textKey: "seo2_r3_text", icon: Battery },
  { titleKey: "seo2_r4_title", textKey: "seo2_r4_text", icon: FlaskConical },
  { titleKey: "seo2_r5_title", textKey: "seo2_r5_text", icon: Package },
  { titleKey: "seo2_r6_title", textKey: "seo2_r6_text", icon: UserCheck },
];

const steps = ["seo2_h1", "seo2_h2", "seo2_h3", "seo2_h4", "seo2_h5"];

export default async function EuCompliancePage({ params }: { params: Promise<{ locale: string }> }) {
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
          <span className="text-sm font-medium tracking-widest uppercase text-orange-300 mb-4 block">{t("seo2_tag")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">{t("seo2_title")}</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{t("seo2_subtitle")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo2_intro_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo2_intro_text")}</p>
        </div>
      </section>

      {/* Regulations Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t("seo2_regs_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.titleKey} className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t(r.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{t(r.textKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Tekpoint handles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("seo2_how_title")}</h2>
          <p className="text-lg text-gray-600 mb-10">{t("seo2_how_subtitle")}</p>
          <div className="space-y-6">
            {steps.map((key, i) => (
              <div key={key} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                <p className="text-gray-700 leading-relaxed pt-1">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo2_risk_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo2_risk_text")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("seo2_cta_title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">{t("seo2_cta_text")}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
            {t("seo2_cta_button")} →
          </Link>
        </div>
      </section>
    </>
  );
}
