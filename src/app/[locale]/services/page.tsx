
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/services",
    titleKey: "services_1",
    descriptionKey: "services_2",
    fallbackTitle: "Services — Tekpoint",
    fallbackDescription: "Tekpoint's comprehensive service portfolio: logistics, marketing, and partner connectivity.",
  });
}

const retailerChecks = [
  "services_28", // The right products at the best possible price
  "services_29", // Access to young, innovative and international brands
  "services_30", // Fast, hassle-free deliveries
  "services_31", // Individual handling of your warehouse
  "services_32", // Flexible processes through IT automation (EDI)
];

const vendorChecks = [
  "services_38", // Smooth import
  "services_39", // Takeover of storage, logistics, finance and overstock management
  "services_40", // Flexible and individually coordinated work processes
  "services_41", // An international team with excellent communication skills
  "services_42", // Implementation of brand building and marketing
  "services_43", // Digital and fast reporting
];

const services = [
  {
    titleKey: "services_48",
    descKey: "services_49",
    ctaKey: "services_50",
    icon: "📦",
  },
  {
    titleKey: "services_51",
    descKey: "services_52",
    ctaKey: "services_53",
    icon: "📢",
  },
  {
    titleKey: "services_54",
    descKey: "services_55",
    ctaKey: "services_56",
    icon: "🔗",
  },
];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("services_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services_18")} <span className="text-blue-300">{t("services_19")} {t("services_20")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("services_21")}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("services_22")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t("services_23")}</p>
        </div>
      </section>

      {/* Retailer Benefits */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("services_34")}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services_25")}</h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-4">{t("services_26")}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{t("services_27")}</p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                {t("services_33")}
              </Link>
            </div>
            <div className="space-y-4">
              {retailerChecks.map((key) => (
                <div key={key} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium pt-1">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              {vendorChecks.map((key) => (
                <div key={key} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium pt-1">{t(key)}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("services_44")}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services_35")}</h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-4">{t("services_36")}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{t("services_37")}</p>
              <Link href="/partnership" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                {t("services_33")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("services_45")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services_46")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("services_47")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.titleKey} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-6">{svc.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{t(svc.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{t(svc.descKey)}</p>
                <span className="text-blue-600 font-medium text-sm">{t(svc.ctaKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services_57")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">{t("services_58")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg">
              {t("services_59")}
            </Link>
            <Link href="/vendors" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20">
              {t("services_60")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
