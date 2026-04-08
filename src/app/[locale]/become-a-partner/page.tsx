
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { Handshake, Download, Mail, Phone, Lock, Building2, User, Briefcase, ScrollText } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/become-a-partner",
    titleKey: "become-a-partner_1",
    descriptionKey: "become-a-partner_2",
    fallbackTitle: "Become a Partner — Tekpoint",
    fallbackDescription: "Partner with Tekpoint for technology distribution across Western, Central & Eastern Europe.",
  });
}

const formSectionIconMap = {
  building2: Building2,
  user: User,
  briefcase: Briefcase,
  scrollText: ScrollText,
};

export default async function BecomeAPartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const docs = [
    { titleKey: "become-a-partner_20", descKey: "become-a-partner_21" },
    { titleKey: "become-a-partner_22", descKey: "become-a-partner_23" },
    { titleKey: "become-a-partner_24", descKey: "become-a-partner_25" },
    { titleKey: "become-a-partner_26", descKey: "become-a-partner_27" },
  ];

  const formSections = [
    { iconName: "building2" as const, titleKey: "become-a-partner_31", descKey: "become-a-partner_32" },
    { iconName: "user" as const, titleKey: "become-a-partner_33", descKey: "become-a-partner_34" },
    { iconName: "briefcase" as const, titleKey: "become-a-partner_35", descKey: "become-a-partner_36" },
    { iconName: "scrollText" as const, titleKey: "become-a-partner_37", descKey: "become-a-partner_38" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/image_new4-jpg.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block"><Handshake className="w-4 h-4 inline mr-1" /> {t("become-a-partner_3")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("become-a-partner_4")}<br /><span className="text-orange-300">{t("become-a-partner_5")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            {t("become-a-partner_6")}
          </p>
          <a
            href="/downloads/trading-application-form.pdf"
            download
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white h-14 px-8 font-semibold rounded-lg transition-colors text-lg"
          >
            <Download className="w-5 h-5" /> {t("become-a-partner_7")}
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("become-a-partner_8")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("become-a-partner_9")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">{"\u2460"}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("become-a-partner_10")}</h3>
              <p className="text-gray-600 mb-4">{t("become-a-partner_11")}</p>
              <a
                href="/downloads/trading-application-form.pdf"
                download
                className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700"
              >
                <Download className="w-4 h-4" /> {t("become-a-partner_12")}
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">{"\u2461"}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("become-a-partner_13")}</h3>
              <p className="text-gray-600">{t("become-a-partner_14")}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">{"\u2462"}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("become-a-partner_15")}</h3>
              <p className="text-gray-600 mb-2">{t("become-a-partner_16")}</p>
              <p className="text-sm text-gray-500"><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:distribution@tekpoint.com" className="text-orange-600 hover:underline">distribution@tekpoint.com</a></p>
              <p className="text-sm text-gray-500"><Phone className="w-4 h-4 inline mr-1" /> +43/1/3616670-902</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("become-a-partner_17")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("become-a-partner_18")}</h2>
            <p className="text-lg text-gray-600 mt-4">{t("become-a-partner_19")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {docs.map((doc) => (
              <div key={doc.titleKey} className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t(doc.titleKey)}</p>
                  <p className="text-sm text-gray-500">{t(doc.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8"><Lock className="w-4 h-4 inline mr-1" /> {t("become-a-partner_28")}</p>
        </div>
      </section>

      {/* What the Form Covers */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-3 block">{t("become-a-partner_29")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("become-a-partner_30")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {formSections.map((item) => {
              const Icon = formSectionIconMap[item.iconName];
              return (
                <div key={item.titleKey} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                    {Icon && <Icon className="w-5 h-5 text-orange-600" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{t(item.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("become-a-partner_39")}</h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            {t("become-a-partner_40")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/trading-application-form.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 h-12 px-8 font-medium rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Download className="w-5 h-5" /> {t("become-a-partner_41")}
            </a>
            <a
              href="mailto:distribution@tekpoint.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white h-12 px-8 font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              {t("become-a-partner_42")}
            </a>
          </div>
          <p className="text-sm text-orange-200 mt-6">
            <Mail className="w-4 h-4 inline mr-1" /> distribution@tekpoint.com &nbsp;|&nbsp; <Phone className="w-4 h-4 inline mr-1" /> +43/1/3616670 &nbsp;|&nbsp; <Phone className="w-4 h-4 inline mr-1" /> +43/1/3616670-902
          </p>
        </div>
      </section>
    </>
  );
}
