
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("services_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("services_25")} <span className="text-blue-300">{t("services_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("services_27")}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("services_30"), desc: t("services_31"), href: "/services/partner-connectivity" },
              { title: t("services_38"), desc: t("services_39"), href: "/services/logistics" },
              { title: t("services_46"), desc: t("services_47"), href: "/services/marketing" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-blue-600 font-medium text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">{t("services_56")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">{t("services_57")}</p>
        </div>
      </section>
    </>
  );
}
