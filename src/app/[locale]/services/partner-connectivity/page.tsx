
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ClipboardList, CheckCircle2, Truck, FileText, RefreshCw, Settings, Building, Package, Megaphone } from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services/partner-connectivity",
    titleKey: "services-partner-connectivity_1",
    descriptionKey: "services-partner-connectivity_2",
    fallbackTitle: "Partner Connectivity — Tekpoint Services",
    fallbackDescription: "Tekpoint Partner Connectivity: EDI integration, automated ordering, standardized processes.",
  });
}

const ediIconMap = {
  clipboardList: ClipboardList,
  checkCircle2: CheckCircle2,
  truck: Truck,
  fileText: FileText,
};

const featureIconMap = {
  refreshCw: RefreshCw,
  settings: Settings,
  building: Building,
};

const ediSteps = [
  {
    iconName: "clipboardList" as const,
    stepKey: "services-partner-connectivity_48",
    titleKey: "services-partner-connectivity_49",
    descKey: "services-partner-connectivity_50",
  },
  {
    iconName: "checkCircle2" as const,
    stepKey: "services-partner-connectivity_51",
    titleKey: "services-partner-connectivity_52",
    descKey: "services-partner-connectivity_53",
  },
  {
    iconName: "truck" as const,
    stepKey: "services-partner-connectivity_54",
    titleKey: "services-partner-connectivity_55",
    descKey: "services-partner-connectivity_56",
  },
  {
    iconName: "fileText" as const,
    stepKey: "services-partner-connectivity_57",
    titleKey: "services-partner-connectivity_58",
    descKey: "services-partner-connectivity_59",
  },
];

export default async function PartnerConnectivityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image src="/images/image_new2-scaled.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">{t("services-partner-connectivity_23")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">{t("services-partner-connectivity_15")}</Link>
            <span>/</span>
            <span className="text-blue-300">{t("services-partner-connectivity_17")}</span>
          </nav>
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">
            {t("services-partner-connectivity_24")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services-partner-connectivity_25")}{" "}
            <span className="text-blue-300">{t("services-partner-connectivity_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {t("services-partner-connectivity_27")}
          </p>
        </div>
      </section>

      {/* Intro + Feature Highlights */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-partner-connectivity_29")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-partner-connectivity_27")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("services-partner-connectivity_28")}
            </p>
          </div>

          {/* 3 Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { iconName: "refreshCw" as const, titleKey: "services-partner-connectivity_29", descKey: "services-partner-connectivity_30" },
              { iconName: "settings" as const, titleKey: "services-partner-connectivity_31", descKey: "services-partner-connectivity_32" },
              { iconName: "building" as const, titleKey: "services-partner-connectivity_34", descKey: "services-partner-connectivity_35" },
            ].map((feat, i) => {
              const Icon = featureIconMap[feat.iconName];
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(feat.titleKey)}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t(feat.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-partner-connectivity_36")}
            </span>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-partner-connectivity_37")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4", labelKey: "services-partner-connectivity_38" },
              { valueKey: "services-partner-connectivity_39", labelKey: "services-partner-connectivity_40" },
              { valueKey: "services-partner-connectivity_41", labelKey: "services-partner-connectivity_42" },
              { valueKey: "services-partner-connectivity_43", labelKey: "services-partner-connectivity_44" },
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

      {/* EDI Flow - Vertical Timeline */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-partner-connectivity_45")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-partner-connectivity_46")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-partner-connectivity_47")}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-3xl mx-auto">
            {ediSteps.map((step, i) => {
              const Icon = ediIconMap[step.iconName];
              return (
                <div key={step.titleKey} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {i < ediSteps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-3.5rem)] bg-gradient-to-b from-[#1a6bc4] to-blue-200" />
                  )}
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a6bc4] text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#1a6bc4] mb-1 block">
                      {t(step.stepKey)}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(step.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-wide uppercase text-[#1a6bc4] mb-3 block">
              {t("services-partner-connectivity_60")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services-partner-connectivity_61")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services-partner-connectivity_62")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/services/logistics" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-partner-connectivity_18")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-partner-connectivity_63")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-partner-connectivity_64")}</span>
            </Link>
            <Link href="/services/marketing" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Megaphone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1a6bc4] transition-colors">
                {t("services-partner-connectivity_19")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t("services-partner-connectivity_65")}</p>
              <span className="text-[#1a6bc4] font-medium text-sm">{t("services-partner-connectivity_64")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0a1628] via-[#0f2341] to-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">
            {t("services-partner-connectivity_66")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services-partner-connectivity_67")}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            {t("services-partner-connectivity_68")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E87C2A] hover:bg-[#d06b1f] text-white font-semibold rounded-lg transition-colors text-lg"
            >
              {t("services-partner-connectivity_69")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              {t("services-partner-connectivity_70")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
