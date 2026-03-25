
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";


import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/vendors",
    titleKey: "vendors_1",
    descriptionKey: "vendors_2",
    fallbackTitle: "Vendors — Brand Portfolio | Tekpoint",
    fallbackDescription: "Explore Tekpoint's portfolio of 28+ leading technology brands.",
  });
}


export default async function VendorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const featuredBrands = [
    { name: "Xiaomi", logo: "Xiaomi-2.png", bg: "xiaomi_bg-jpg.webp" },
    { name: "OPPO", logo: "VI_PNG_OPPO-Logo_White_CMYK_20191204-01-2.png", bg: "oppo.png" },
    { name: "POCO", logo: "on-hover-2.png", bg: "poco-2.png" },
    { name: "Amazfit", logo: "amazfit-2.png", bg: "amazfit_bg-jpg.webp" },
    { name: "Realme", logo: "realme-logo.png", bg: "realme_bg-jpg.webp" },
    { name: "OnePlus", logo: "icon-brand-oneplus.png", bg: "oneplus_bg-jpg.webp" },
    { name: "Oclean", logo: "oclean-logo.png", bg: "oclean_bg-jpg.webp" },
    { name: "Anker", logo: "anker.png", bg: "Anker_bg-jpg.webp" },
    { name: "Nothing", logo: "Nothing.png", bg: "nothing_bg-jpg.webp" },
    { name: "Roborock", logo: "Group.svg", bg: "3eb9ca14b75698a5197a5d07ff87fd8b.png" },
    { name: "Narwal", logo: "Narwal-1.svg", bg: "a8f131925ee4f759e636c99fdbcce4c6.png" },
    { name: "IMIKI", logo: "Imiki.svg", bg: "bbbc240f453e5becc4098326ae851c48.jpeg" },
    { name: "RENPHO", logo: "Renpro.svg", bg: "38a444420680af9adfa6751332370f11.png" },
    { name: "DYU", logo: "DYU.svg", bg: "98999b50860f542d41d52d312ed1f333.png" },
    { name: "Govee", logo: "Mask-group-2.svg", bg: "govee.png" },
    { name: "MYVU", logo: "MYVU.svg", bg: "5c03093d789768d4cac331ce849b155b.png" },
    { name: "SFP", logo: "SFP-1.svg", bg: "a11fae9e9c9f32debc8741029b36d3d9.png" },
    { name: "Panasonic", logo: "Panasonic.svg", bg: "655adcea23ea7dc0bdafd6744b4d926a.png" },
    { name: "HMD", logo: "HMD.svg", bg: "188a76ae58a729161068cdd8924287e2.png" },
    { name: "Sony", logo: "sony.svg", bg: "1ecf5b8014b1e6ed446b163e8b3a982c.png" },
    { name: "DJI ROMO", logo: "DJI-ROMO.svg", bg: "170b377c572b948a8a66adbff97470f10963cef5.jpg" },
  ];

  const moreBrands = [
    { name: "Tecno", logo: "Tecno.png" },
    { name: "Aqara", logo: "aqara_logo_white-1-2.png" },
    { name: "Zepp", logo: "zepp.png" },
    { name: "Enabot", logo: "logo-enabot.png" },
    { name: "Haylou", logo: "Haylou-1.png" },
    { name: "Mibro", logo: "mibro-logo.png" },
    { name: "Viomi", logo: "viomi-2-1.png" },
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
            {featuredBrands.map((brand) => (
              <div key={brand.name} className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={`/images/${brand.bg}`} alt={brand.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img src={`/images/${brand.logo}`} alt={brand.name} className="max-h-12 md:max-h-16 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">More Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {moreBrands.map((brand) => (
                <div key={brand.name} className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex items-center justify-center h-24">
                  <img src={`/images/${brand.logo}`} alt={brand.name} className="max-h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
