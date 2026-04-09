import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ShieldCheck, Recycle, Battery, FlaskConical, Package, UserCheck, AlertTriangle } from "lucide-react";

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
  { titleKey: "seo2_r1_title", textKey: "seo2_r1_text", icon: ShieldCheck, color: "bg-orange-500" },
  { titleKey: "seo2_r2_title", textKey: "seo2_r2_text", icon: Recycle, color: "bg-green-600" },
  { titleKey: "seo2_r3_title", textKey: "seo2_r3_text", icon: Battery, color: "bg-yellow-500" },
  { titleKey: "seo2_r4_title", textKey: "seo2_r4_text", icon: FlaskConical, color: "bg-red-500" },
  { titleKey: "seo2_r5_title", textKey: "seo2_r5_text", icon: Package, color: "bg-blue-500" },
  { titleKey: "seo2_r6_title", textKey: "seo2_r6_text", icon: UserCheck, color: "bg-purple-500" },
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
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t("seo2_subtitle")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("seo2_intro_title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("seo2_intro_text")}</p>
        </div>
      </section>

      {/* Regulations — Stacked full-width blocks with colored icon strips */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">{t("seo2_regs_title")}</h2>
          <div className="space-y-6">
            {regulations.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.titleKey} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
                  {/* Colored icon strip */}
                  <div className={`${r.color} sm:w-20 flex items-center justify-center py-4 sm:py-0 flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(r.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(r.textKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Tekpoint handles — Timeline with connecting line */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("seo2_how_title")}</h2>
          <p className="text-lg text-gray-600 mb-12">{t("seo2_how_subtitle")}</p>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-100" />
            <div className="space-y-8">
              {steps.map((key, i) => (
                <div key={key} className="flex items-start gap-6 relative">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10 shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{t(key)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Section — Warning callout style */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("seo2_risk_title")}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{t("seo2_risk_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Light background (different from other pages) */}
      <section className="py-20 md:py-28 bg-[#0a1628] text-white">
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
