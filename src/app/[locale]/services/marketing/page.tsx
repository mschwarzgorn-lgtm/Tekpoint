
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  LocaleBreadcrumbJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Rocket, Smartphone, Newspaper, Store, Building2, Palette, PartyPopper, Package, Link2 } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services/marketing",
    titleKey: "services-marketing_1",
    descriptionKey: "services-marketing_2",
    fallbackTitle: "Marketing Services — Tekpoint",
    fallbackDescription: "Tekpoint marketing services for Western, Central & Eastern Europe.",
  });
}

const iconMap = {
  rocket: Rocket,
  smartphone: Smartphone,
  newspaper: Newspaper,
  store: Store,
  building2: Building2,
  palette: Palette,
  partyPopper: PartyPopper,
  package: Package,
  link2: Link2,
};

const marketingServices = [
  {
    iconName: "rocket" as const,
    titleKey: "services-marketing_38",
    targetKey: "services-marketing_40",
    challengeKey: "services-marketing_42",
    solutionKey: "services-marketing_44",
    benefitsKey: "services-marketing_46",
  },
  {
    iconName: "smartphone" as const,
    titleKey: "services-marketing_47",
    targetKey: "services-marketing_48",
    challengeKey: "services-marketing_49",
    solutionKey: "services-marketing_50",
    benefitsKey: "services-marketing_51",
  },
  {
    iconName: "newspaper" as const,
    titleKey: "services-marketing_52",
    targetKey: "services-marketing_40",
    challengeKey: "services-marketing_53",
    solutionKey: "services-marketing_54",
    benefitsKey: "services-marketing_55",
  },
  {
    iconName: "store" as const,
    titleKey: "services-marketing_56",
    targetKey: "services-marketing_40",
    challengeKey: "services-marketing_57",
    solutionKey: "services-marketing_58",
    benefitsKey: "services-marketing_59",
  },
  {
    iconName: "building2" as const,
    titleKey: "services-marketing_61",
    targetKey: "services-marketing_40",
    challengeKey: "services-marketing_62",
    solutionKey: "services-marketing_63",
    benefitsKey: "services-marketing_64",
  },
  {
    iconName: "palette" as const,
    titleKey: "services-marketing_65",
    targetKey: "services-marketing_66",
    challengeKey: "services-marketing_67",
    solutionKey: "services-marketing_68",
    benefitsKey: "services-marketing_69",
  },
  {
    iconName: "partyPopper" as const,
    titleKey: "services-marketing_70",
    targetKey: "services-marketing_71",
    challengeKey: "services-marketing_72",
    solutionKey: "services-marketing_73",
    benefitsKey: "services-marketing_74",
  },
];

export default async function MarketingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <ServiceJsonLd
        locale={locale}
        path="/services/marketing"
        name={t("services-marketing_1")}
        description={t("services-marketing_2")}
        serviceType="Marketing services"
      />
      <LocaleBreadcrumbJsonLd
        locale={locale}
        trail={[
          { name: t("index_13"), path: "/services" },
          { name: t("index_126"), path: "/services/marketing" },
        ]}
      />
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image src="/images/image_new26-scaled.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t("services-marketing_23")}</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">{t("services-marketing_15")}</Link>
            <span>/</span>
            <span className="text-orange-300">{t("services-marketing_19")}</span>
          </nav>
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">
            {t("services-marketing_24")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services-marketing_25")}{" "}
            <span className="text-orange-300">{t("services-marketing_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t("services-marketing_27")}
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-marketing_28")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-marketing_30")}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("services-marketing_31")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("services-marketing_32")}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { value: "7", labelKey: "services-marketing_29" },
              { value: "5+", labelKey: "services-marketing_33" },
              { value: "1", labelKey: "services-marketing_34" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1a6bc4] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-marketing_35")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-marketing_36")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-marketing_37")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((svc) => {
              const Icon = iconMap[svc.iconName];
              return (
                <div key={svc.titleKey} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-orange-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(svc.titleKey)}</h3>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-orange-100 text-[#1a6bc4] px-3 py-1 rounded-full mb-6 w-fit">
                    {t("services-marketing_39")} {t(svc.targetKey)}
                  </span>

                  {/* Challenge */}
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4 mb-4">
                    <p className="text-xs font-bold uppercase text-orange-700 mb-1">{t("services-marketing_41")}</p>
                    <p className="text-sm text-gray-700">{t(svc.challengeKey)}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4 mb-4">
                    <p className="text-xs font-bold uppercase text-orange-700 mb-1">{t("services-marketing_43")}</p>
                    <p className="text-sm text-gray-700">{t(svc.solutionKey)}</p>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-4 mt-auto">
                    <p className="text-xs font-bold uppercase text-green-700 mb-1">{t("services-marketing_45")}</p>
                    <p className="text-sm text-gray-700">{t(svc.benefitsKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-marketing_75")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-marketing_76")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-marketing_77")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/services/logistics/" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-orange-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-marketing_18")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-marketing_80")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-marketing_79")}</span>
            </Link>
            <Link href="/services/partner-connectivity/" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-orange-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Link2 className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-marketing_17")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-marketing_78")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-marketing_79")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2341] to-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">
            {t("services-marketing_81")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services-marketing_82")}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            {t("services-marketing_83")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E87C2A] hover:bg-[#d06b1f] text-white font-semibold rounded-lg transition-colors text-lg"
            >
              {t("services-marketing_84")}
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              {t("services-marketing_85")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
