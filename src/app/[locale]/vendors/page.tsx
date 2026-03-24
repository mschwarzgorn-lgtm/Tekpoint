
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function VendorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const brands = [
    { name: "Alcatel", key: "vendors_39" },
    { name: "TCL", key: "vendors_44" },
    { name: "Motorola", key: "vendors_49" },
    { name: "Gigaset", key: "vendors_54" },
    { name: "Wiko", key: "vendors_59" },
    { name: "Emporia", key: "vendors_64" },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("vendors_24")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("vendors_25")} <span className="text-blue-300">{t("vendors_26")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">{t("vendors_27")}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] bg-gray-50 flex items-center justify-center p-8">
                  <img
                    src={`/images/brands/${brand.name.toLowerCase()}-logo.png`}
                    alt={brand.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{brand.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(brand.key)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
