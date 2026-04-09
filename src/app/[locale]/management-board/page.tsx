import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/management-board",
    titleKey: "management-board_1",
    descriptionKey: "management-board_2",
    fallbackTitle: "Management Board — Tekpoint",
    fallbackDescription: "Meet the Tekpoint management board.",
  });
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function GlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default async function ManagementBoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const teamMembers = [
    { name: t("management-board_34"), abbr: t("management-board_35"), title: t("management-board_36"), img: "/images/team/margarete-nigl.jpg", linkedin: "" },
    { name: t("management-board_37"), abbr: t("management-board_38"), title: t("management-board_39"), img: "/images/team/aleksandar-mitic.webp", linkedin: "https://www.linkedin.com/in/aleksandar-mitic-189865108" },
    { name: t("management-board_40"), abbr: t("management-board_41"), title: t("management-board_42"), img: "/images/team/frank-roesner.jpeg", linkedin: "https://www.linkedin.com/in/frank-r%C3%B6sner-61a592145" },
    { name: t("management-board_43"), abbr: t("management-board_44"), title: t("management-board_45"), img: "/images/team/daniel-dorner.jpeg", linkedin: "https://www.linkedin.com/in/daniel-dorner" },
    { name: t("management-board_46"), abbr: t("management-board_47"), title: t("management-board_48"), img: "/images/team/gerhard-belousek.webp", linkedin: "https://www.linkedin.com/in/gerhard-belousek-42aa5729" },
    { name: t("management-board_49"), abbr: t("management-board_50"), title: t("management-board_51"), img: "/images/team/gerhard-amtmann.webp", linkedin: "https://www.linkedin.com/in/gerhard-amtmann-5939123" },
    { name: t("management-board_52"), abbr: t("management-board_53"), title: t("management-board_54"), img: "/images/team/suzana-bozovic.webp", linkedin: "https://www.linkedin.com/in/suzana-bozovic-40460592" },
  ];

  const leadershipPrinciples = [
    { icon: "📊", text: t("management-board_76") },
    { icon: "⚡", text: t("management-board_77") },
    { icon: "🎯", text: t("management-board_78") },
    { icon: "🌍", text: t("management-board_79") },
  ];

  return (
    <>
      {/* Hero Section — asymmetric with orange accent line */}
      <section className="relative bg-[#0a1628] text-white py-24 md:py-36 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-orange-500" />
        <div className="container mx-auto px-4 md:px-6 relative">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-400 mb-6 block">{t("management-board_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
            {t("management-board_25")}
          </h1>
          <div className="w-20 h-1 bg-orange-500 mt-8" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("management-board_26")}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("management-board_27")}</p>
        </div>
      </section>

      {/* Leadership Philosophy Section (Maggie's content) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">{t("management-board_72")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t("management-board_73")}</h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">{t("management-board_74")}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t("management-board_75")}</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("management-board_80")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {leadershipPrinciples.map((p, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <p className="text-gray-700 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <p className="text-lg text-gray-700 italic leading-relaxed">{t("mgmt_leadership_closing")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Feature Card — horizontal layout with oversized photo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Photo side */}
              <div className="md:w-2/5 relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full bg-gradient-to-br from-gray-200 to-gray-300">
                  <img src="/images/team/mark-schwarzgorn.png" alt={t("management-board_28")} className="w-full h-full object-cover" />
                </div>
                {/* Orange accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 md:h-full md:w-1 md:right-0 md:left-auto bg-orange-500" />
              </div>
              {/* Content side */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">{t("management-board_29")}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{t("management-board_28")}</h2>
                <p className="text-gray-500 font-medium mb-6">{t("management-board_30")}</p>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">{t("management-board_31")}</p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/markschwarzgorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                    aria-label="Mark Schwarzgorn on LinkedIn"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/MarkSchwarzgorn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition-all"
                    aria-label="Mark Schwarzgorn on X"
                  >
                    <XIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.markschwarzgorn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                    aria-label="Mark Schwarzgorn's Blog"
                  >
                    <GlobeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section — upgraded cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-2 block">{t("management-board_32")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("management-board_33")}</h2>
          </div>

          {/* First row: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {teamMembers.slice(0, 4).map((m) => (
              <div key={m.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Photo area — tall rectangle */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* LinkedIn overlay */}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600 hover:text-white shadow-md"
                      aria-label={`${m.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                  {/* Orange bottom bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                {/* Info area */}
                <div className="p-5">
                  <p className="text-orange-600 font-bold text-sm tracking-wide mb-0.5">{m.abbr}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{m.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block" /> {/* Spacer for centering */}
            {teamMembers.slice(4).map((m) => (
              <div key={m.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Photo area — tall rectangle */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* LinkedIn overlay */}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600 hover:text-white shadow-md"
                      aria-label={`${m.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                  {/* Orange bottom bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                {/* Info area */}
                <div className="p-5">
                  <p className="text-orange-600 font-bold text-sm tracking-wide mb-0.5">{m.abbr}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-200 mb-4 block">{t("management-board_55")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("management-board_56")}</h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">{t("management-board_57")}</p>
          <Link href={`/${locale}/contact`} className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors text-lg">
            {t("management-board_58")}
          </Link>
        </div>
      </section>
    </>
  );
}
