
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ManagementBoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const members = [
    { name: t("management-board_27"), role: t("management-board_28"), bio: t("management-board_29"), img: "/images/team/mark-schwarzgorn.jpg" },
    { name: t("management-board_31"), role: t("management-board_32"), bio: t("management-board_33"), img: "/images/team/daniel-gerstl.jpg" },
    { name: t("management-board_35"), role: t("management-board_36"), bio: t("management-board_37"), img: "/images/team/mirna-gerstl.jpg" },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("management-board_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("management-board_25")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">{t("management-board_26")}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {members.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-100 mb-6">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{m.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{m.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
