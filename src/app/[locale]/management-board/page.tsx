import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ManagementBoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const teamMembers = [
    { name: t("management-board_34"), abbr: t("management-board_35"), title: t("management-board_36"), img: "/images/team/margarete-nigl.jpg" },
    { name: t("management-board_37"), abbr: t("management-board_38"), title: t("management-board_39"), img: "/images/team/aleksandar-mitic.webp" },
    { name: t("management-board_40"), abbr: t("management-board_41"), title: t("management-board_42"), img: "/images/team/frank-roesner.jpeg" },
    { name: t("management-board_43"), abbr: t("management-board_44"), title: t("management-board_45"), img: "/images/team/daniel-dorner.jpeg" },
    { name: t("management-board_46"), abbr: t("management-board_47"), title: t("management-board_48"), img: "/images/team/gerhard-belousek.webp" },
    { name: t("management-board_49"), abbr: t("management-board_50"), title: t("management-board_51"), img: "/images/team/gerhard-amtmann.webp" },
    { name: t("management-board_52"), abbr: t("management-board_53"), title: t("management-board_54"), img: "/images/team/suzana-bozovic.webp" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("management-board_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("management-board_25")}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("management-board_26")}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("management-board_27")}</p>
        </div>
      </section>

      {/* CEO Card */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-xl">
              <img src="/images/team/mark-schwarzgorn.png" alt={t("management-board_28")} className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">{t("management-board_29")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t("management-board_28")}</h2>
              <p className="text-gray-500 font-medium text-sm mb-6">{t("management-board_30")}</p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{t("management-board_31")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-2 block">{t("management-board_32")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("management-board_33")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-blue-600 font-bold text-lg">{m.abbr}</p>
                <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                <p className="text-gray-500 text-sm">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-200 mb-4 block">{t("management-board_55")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("management-board_56")}</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">{t("management-board_57")}</p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg">
            {t("management-board_58")}
          </Link>
        </div>
      </section>
    </>
  );
}
