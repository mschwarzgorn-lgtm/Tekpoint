
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
    pagePath: "/about",
    titleKey: "about_1",
    descriptionKey: "about_2",
    fallbackTitle: "About Us — Tekpoint",
    fallbackDescription: "Learn about Tekpoint, experts in technology distribution across Western, Central & Eastern Europe.",
  });
}


export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">{t("about_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("about_25")} <span className="text-orange-300">{t("about_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("about_27")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">{t("about_28")}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("about_29")}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t("about_30")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/vendors" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white h-12 px-8 font-medium rounded-lg transition-colors">
                  {t("about_31")}
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-700 h-12 px-8 font-medium rounded-lg transition-colors">
                  {t("about_32")}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img src="/images/image_new12-jpg.webp" alt={t("about_33")} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { top: t("about_36"), bottom: t("about_37") },
              { top: t("about_39"), bottom: t("about_40") },
              { top: t("about_42"), bottom: t("about_43") },
              { top: t("about_45"), bottom: t("about_46") },
            ].map((s, i) => (
              <div key={i} className="text-center py-8">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-orange-600 break-words">{s.top}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-2">{s.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{t("about_47")}</h2>
            <p className="text-lg text-gray-600">{t("about_49")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[50, 51, 52, 53, 54].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-8 text-center border border-orange-200">
                <div className="text-lg font-semibold text-orange-700">{t(`about_${n}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Stance — Phase 6 */}
      <section className="py-24 md:py-32 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t("stance_title")}</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              {t("stance_text")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-white mb-1">{t(`stance_p${n}_title`)}</h3>
                  <p className="text-gray-400 leading-relaxed">{t(`stance_p${n}_text`)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 italic text-lg leading-relaxed">
                {t("stance_closing")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{t("about_57")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{t("about_58")}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[59, 60, 61, 62, 63, 64, 65, 66].map((n) => (
              <div key={n} className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center h-20">
                <span className="text-gray-500 font-medium">{t(`about_${n}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
