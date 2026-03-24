
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import BrandGrid from "@/components/BrandGrid";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium tracking-wide uppercase text-blue-300 mb-6">
              {t("index_18")}
            </span>
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("index_19")}{" "}
              <span className="text-blue-300">{t("index_20")}</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl text-gray-300">
                {t("index_21")} {t("index_22")}
              </span>
            </h1>
            <p className="text-pretty text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              {t("index_23")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/become-a-partner"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white h-14 px-10 text-lg font-semibold rounded-lg transition-colors"
              >
                {t("index_155")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white h-14 px-10 text-lg font-semibold rounded-lg transition-colors"
              >
                {t("index_24")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* About Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-4 block">
                {t("index_39")}
              </span>
              <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                {t("index_40")} {t("index_41")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("index_42")}
              </p>
              <div className="space-y-4">
                {["index_43", "index_45", "index_47"].map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t(key)}</h3>
                      <p className="text-gray-600 text-sm mt-1">{t(`index_${parseInt(key.split('_')[1]) + 1}`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/images/tekpoint-office.jpg"
                alt="Tekpoint office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-4 block">
              {t("index_62")}
            </span>
            <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              {t("index_63")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("index_64")}
            </p>
          </div>
          <BrandGrid />
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* CTA */}
      <CtaSection />
    </>
  );
}
