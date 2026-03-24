import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ManagementBoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const ceo = {
    name: t("management-board_28"),
    role: t("management-board_29"),
    title: t("management-board_30"),
    bio: t("management-board_31"),
    img: "/images/team/mark-schwarzgorn.png",
  };

  const team = [
    { name: t("management-board_34"), role: t("management-board_35"), title: t("management-board_36"), img: "/images/team/margarete-nigl.jpg", linkedin: "" },
    { name: t("management-board_37"), role: t("management-board_38"), title: t("management-board_39"), img: "/images/team/aleksandar-mitic.webp", linkedin: "https://linkedin.com" },
    { name: t("management-board_40"), role: t("management-board_41"), title: t("management-board_42"), img: "/images/team/frank-roesner.jpeg", linkedin: "https://linkedin.com" },
    { name: t("management-board_43"), role: t("management-board_44"), title: t("management-board_45"), img: "/images/team/daniel-dorner.jpeg", linkedin: "" },
    { name: t("management-board_46"), role: t("management-board_47"), title: t("management-board_48"), img: "/images/team/gerhard-belousek.webp", linkedin: "" },
    { name: t("management-board_49"), role: t("management-board_50"), title: t("management-board_51"), img: "/images/team/gerhard-amtmann.webp", linkedin: "" },
    { name: t("management-board_52"), role: t("management-board_53"), title: t("management-board_54"), img: "/images/team/suzana-bozovic.webp", linkedin: "" },
  ];

  return (
    <>
      {/* Hero - Dark gradient, centered text */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6">
            <a href={`/${locale}`} className="hover:text-white">Home</a>
            <span className="mx-2">/</span>
            <a href={`/${locale}/about`} className="hover:text-white">{t("management-board_10") || "About Us"}</a>
            <span className="mx-2">/</span>
            <span className="text-orange-400">{t("management-board_12") || "Management Board"}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {t("management-board_12") || "Management Board"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t("management-board_24") || "Leading with a vision"}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-4">
            {t("management-board_25") || "Our Leadership"}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t("management-board_26") || "Driving Innovation & Growth"}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t("management-board_27")}
          </p>
        </div>
      </section>

      {/* CEO Section - Rectangular photo left, text right */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* CEO Photo - rectangular */}
            <div className="w-full md:w-[360px] flex-shrink-0 relative">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 shadow-lg">
                <img src={ceo.img} alt={ceo.name} className="w-full h-full object-cover" loading="eager" />
              </div>
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {ceo.role}
              </span>
            </div>
            {/* CEO Info */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{ceo.name}</h2>
              <p className="text-orange-500 font-semibold text-lg mb-4">{ceo.title}</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{ceo.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid - 3 columns, white cards with rectangular photos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                {/* Rectangular photo with role badge */}
                <div className="relative aspect-[4/3] bg-gray-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {m.role}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-gray-600">
                    <span className="text-orange-500 font-semibold">{m.role}</span> {m.title}
                  </p>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-3">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-400 font-semibold uppercase tracking-wide text-sm">{t("management-board_55")}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4">{t("management-board_56")}</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{t("management-board_57")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${locale}/contact`} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-center">
              {t("management-board_58") || "Contact Us →"}
            </a>
            <a href={`/${locale}/about`} className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-center">
              {t("management-board_59") || "Learn More About Tekpoint"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
