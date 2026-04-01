
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Package, RefreshCcw, Gift, Wrench, Rocket, Zap, CheckCircle, Trophy, Megaphone, Link2 } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services/logistics",
    titleKey: "services-logistics_1",
    descriptionKey: "services-logistics_2",
    fallbackTitle: "Logistics Services — Tekpoint",
    fallbackDescription: "Fast, hassle-free deliveries across Western, Central & Eastern Europe.",
  });
}

const iconMap = {
  package: Package,
  refreshCcw: RefreshCcw,
  gift: Gift,
  wrench: Wrench,
  rocket: Rocket,
  megaphone: Megaphone,
  link2: Link2,
};

const logisticsServices = [
  {
    iconName: "package" as const,
    titleKey: "services-logistics_42",
    targetKey: "services-logistics_43",
    challengeKey: "services-logistics_45",
    solutionKey: "services-logistics_47",
    benefitsKey: "services-logistics_49",
  },
  {
    iconName: "refreshCcw" as const,
    titleKey: "services-logistics_51",
    targetKey: "services-logistics_52",
    challengeKey: "services-logistics_53",
    solutionKey: "services-logistics_54",
    benefitsKey: "services-logistics_55",
  },
  {
    iconName: "gift" as const,
    titleKey: "services-logistics_56",
    targetKey: "services-logistics_52",
    challengeKey: "services-logistics_57",
    solutionKey: "services-logistics_58",
    benefitsKey: "services-logistics_59",
  },
  {
    iconName: "wrench" as const,
    titleKey: "services-logistics_60",
    targetKey: "services-logistics_52",
    challengeKey: "services-logistics_61",
    solutionKey: "services-logistics_62",
    benefitsKey: "services-logistics_63",
  },
  {
    iconName: "rocket" as const,
    titleKey: "services-logistics_64",
    targetKey: "services-logistics_52",
    challengeKey: "services-logistics_65",
    solutionKey: "services-logistics_66",
    benefitsKey: "services-logistics_67",
  },
];

export default async function LogisticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image src="/images/image_new24-scaled.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t("services-logistics_23")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">{t("services-logistics_15")}</Link>
            <span>/</span>
            <span className="text-blue-300">{t("services-logistics_18")}</span>
          </nav>
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">
            {t("services-logistics_24")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services-logistics_25")}{" "}
            <span className="text-blue-300">{t("services-logistics_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t("services-logistics_27")}
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-logistics_27")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-logistics_28")} {t("services-logistics_29")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("services-logistics_30")}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { valueKey: "services-logistics_31", labelKey: "services-logistics_32" },
              { value: "23", labelKey: "services-logistics_33" },
              { valueKey: "services-logistics_34", labelKey: "services-logistics_35" },
              { valueKey: "services-logistics_36", labelKey: "services-logistics_37" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1a6bc4] mb-2">
                  {"valueKey" in stat && stat.valueKey ? t(stat.valueKey) : stat.value}
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
              {t("services-logistics_39")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-logistics_40")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-logistics_41")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsServices.map((svc) => {
              const Icon = iconMap[svc.iconName];
              return (
                <div key={svc.titleKey} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(svc.titleKey)}</h3>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-blue-100 text-[#1a6bc4] px-3 py-1 rounded-full mb-6 w-fit">
                    {t(svc.targetKey)}
                  </span>

                  {/* Challenge */}
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4 mb-4">
                    <p className="text-xs font-bold uppercase text-orange-700 mb-1 flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> {t("services-logistics_44")}</p>
                    <p className="text-sm text-gray-700">{t(svc.challengeKey)}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4 mb-4">
                    <p className="text-xs font-bold uppercase text-blue-700 mb-1 flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> {t("services-logistics_46")}</p>
                    <p className="text-sm text-gray-700">{t(svc.solutionKey)}</p>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-50 border-l-4 border-green-400 rounded-r-lg p-4">
                    <p className="text-xs font-bold uppercase text-green-700 mb-1 flex items-center gap-1"><Trophy className="w-3.5 h-3.5" /> {t("services-logistics_48")}</p>
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
              {t("services-logistics_68")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-logistics_69")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-logistics_70")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/services/marketing" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Megaphone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-logistics_71")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-logistics_72")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-logistics_73")}</span>
            </Link>
            <Link href="/services/partner-connectivity" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Link2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-logistics_17")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-logistics_74")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-logistics_73")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2341] to-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">
            {t("services-logistics_75")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services-logistics_76")}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            {t("services-logistics_77")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E87C2A] hover:bg-[#d06b1f] text-white font-semibold rounded-lg transition-colors text-lg"
            >
              {t("services-logistics_78")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              {t("services-logistics_79")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
