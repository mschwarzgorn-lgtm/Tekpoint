
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BecomeAPartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{t("index_155")}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">{t("index_140")}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">{t("contact_40")}</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t("contact_41")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              <input type="email" placeholder={t("contact_42")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder={t("contact_43")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            <textarea rows={5} placeholder={t("contact_44")} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
            <button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              {t("contact_45")}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
