
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PartnerConnectivityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("services-partner-connectivity_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services-partner-connectivity_25")} <span className="text-blue-300">{t("services-partner-connectivity_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("services-partner-connectivity_27")}</p>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t("services-partner-connectivity_28")}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("services-partner-connectivity_29")}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{t("services-partner-connectivity_30")}</p>
          <p className="text-gray-600 leading-relaxed">{t("services-partner-connectivity_31")}</p>
        </div>
      </section>
    </>
  );
}
