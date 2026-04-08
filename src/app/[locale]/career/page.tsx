
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { Rocket, Lightbulb, Handshake, Scale, Gem } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/career",
    titleKey: "career_1",
    descriptionKey: "career_2",
    fallbackTitle: "Careers — Tekpoint",
    fallbackDescription: "Join the Tekpoint team. Explore career opportunities.",
  });
}

const iconMap = {
  rocket: Rocket,
  lightbulb: Lightbulb,
  handshake: Handshake,
  scale: Scale,
  gem: Gem,
};

const vacancies = [
  { titleKey: "career_76", locationKey: "career_77" },
  { titleKey: "career_79", locationKey: "career_77" },
  { titleKey: "career_80", locationKey: "career_77" },
];

const benefitKeys = [64, 65, 66, 67, 68, 69, 70, 72];

const countryKeys = Array.from({ length: 23 }, (_, i) => `career_${41 + i}`);

const valueKeys = [
  { key: "career_30", iconName: "rocket" as const },
  { key: "career_31", iconName: "lightbulb" as const },
  { key: "career_32", iconName: "handshake" as const },
  { key: "career_34", iconName: "scale" as const },
  { key: "career_35", iconName: "gem" as const },
];

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/image_new28-scaled.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">{t("career_16")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("career_18")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("career_19")}</p>
        </div>
      </section>

      {/* About / Culture */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
              <div className="bg-white rounded-2xl p-8 border border-orange-200">
                <p className="text-4xl font-bold text-orange-600 mb-2">120+</p>
                <p className="text-gray-600 text-sm">{t("career_25")}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-orange-200">
                <p className="text-4xl font-bold text-orange-600 mb-2">23</p>
                <p className="text-gray-600 text-sm">{t("career_39")}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-orange-200">
                <p className="text-4xl font-bold text-orange-600 mb-2">10+</p>
                <p className="text-gray-600 text-sm">{t("career_26")}</p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>{t("career_20")}</p>
              <p>{t("career_21")}</p>
              <p>{t("career_22")}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Tekpoint? */}
      <section className="py-24 md:py-32 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-400 mb-3 block">{t("career_111")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("career_112")}</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>{t("career_113")}</p>
              <p>{t("career_114")}</p>
              <p>{t("career_115")}</p>
              <p className="text-white font-semibold border-l-4 border-orange-500 pl-6 mt-8">{t("career_116")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("career_27")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("career_28")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("career_29")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {valueKeys.map((v) => {
              const Icon = iconMap[v.iconName];
              return (
                <div key={v.key} className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-orange-600" />}
                  </div>
                  <span className="font-medium text-gray-900">{t(v.key)}</span>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <blockquote className="text-xl text-gray-700 italic mb-4">{t("career_37")}</blockquote>
            <p className="text-sm text-gray-500">{t("career_38")}</p>
          </div>
        </div>
      </section>

      {/* Countries of Origin */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("career_39")}</h2>
            <p className="text-gray-600">{t("career_40")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {countryKeys.map((key) => {
              const text = t(key);
              if (!text || text === key) return null;
              return (
                <span key={key} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">
                  {text}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("career_62")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("career_63")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefitKeys.map((n) => {
              const text = t(`career_${n}`);
              if (!text || text === `career_${n}`) return null;
              return (
                <div key={n} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("career_73")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("career_74")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("career_75")}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {vacancies.map((v) => (
              <a
                key={v.titleKey}
                href={`mailto:jobs@tekpoint.com?subject=${encodeURIComponent(t(v.titleKey))}`}
                className="flex items-center justify-between bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{t(v.titleKey)}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t(v.locationKey)}</p>
                </div>
                <span className="text-orange-600 font-medium shrink-0 ml-4">{t("career_78")}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Kununu Recognition */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("career_81")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("career_82")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("career_83")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-5xl font-bold text-orange-600 mb-2">{t("career_23")}</p>
              <p className="text-gray-600">{t("career_84")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-3xl font-bold text-yellow-500 mb-2">{t("career_87")}</p>
              <p className="text-2xl font-bold text-gray-900">{t("career_85")}</p>
              <p className="text-gray-600">{t("career_86")}</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {[88, 89, 90].map((n) => (
              <div key={n} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 italic">{t(`career_${n}`)}</p>
              </div>
            ))}
          </div>
          {/* Kununu Link */}
          <div className="text-center">
            <a
              href="https://www.kununu.com/at/tekpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-[#99c613] hover:bg-[#99c613] hover:text-white text-gray-900 h-14 px-8 font-semibold rounded-xl transition-all shadow-sm hover:shadow-md group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              {t("career_110")}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("career_91")}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{t("career_92")}</p>
          <a href="mailto:jobs@tekpoint.com" className="inline-flex items-center justify-center bg-white text-orange-600 h-12 px-8 font-medium rounded-lg hover:bg-orange-50 transition-colors">
            {t("career_93")}
          </a>
        </div>
      </section>
    </>
  );
}
