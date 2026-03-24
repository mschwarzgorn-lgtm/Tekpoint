
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("career_22")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("career_23")} <span className="text-blue-300">{t("career_24")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("career_25")}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">{t("career_26")}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{t("career_27")}</p>
            <div className="space-y-4">
              {[28, 29, 30, 31, 32].map((n) => {
                const text = t(`career_${n}`);
                if (!text || text === `career_${n}`) return null;
                return (
                  <div key={n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t("career_51")}</h2>
          <p className="text-gray-600 mb-8">{t("career_52")}</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 font-medium rounded-lg transition-colors">
            {t("career_53")}
          </Link>
        </div>
      </section>
    </>
  );
}
