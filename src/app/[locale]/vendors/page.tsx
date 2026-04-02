
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
    fallbackDescription: "Explore Tekpoint's portfolio of 25+ leading technology brands.",
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
    { name: "Oclean", logo: "oclean-logo.png", bg: "oclean_bg-jpg.webp" },
    { name: "Anker", logo: "anker.png", bg: "Anker_bg-jpg.webp" },
    { name: "Nothing", logo: "Nothing.png", bg: "nothing_bg-jpg.webp" },
    { name: "Roborock", logo: "Group.svg", bg: "3eb9ca14b75698a5197a5d07ff87fd8b.png" },
    { name: "Narwal", logo: "Narwal-1.svg", bg: "a8f131925ee4f759e636c99fdbcce4c6.png" },
    { name: "IMIKI", logo: "Imiki.svg", bg: "bbbc240f453e5becc4098326ae851c48.jpeg" },
    { name: "RENPHO", logo: "Renpro.svg", bg: "38a444420680af9adfa6751332370f11.png" },
    { name: "DYU", logo: "DYU.svg", bg: "98999b50860f542d41d52d312ed1f333.png" },
    { name: "Govee", logo: "Mask-group-2.svg", bg: "govee.png" },
    { name: "SFP", logo: "SFP-1.svg", bg: "a11fae9e9c9f32debc8741029b36d3d9.png" },
    { name: "DJI ROMO", logo: "DJI-ROMO.svg", bg: "170b377c572b948a8a66adbff97470f10963cef5.jpg" },
    { name: "Mi Scooter", logo: "brands/mi-scooter.svg", bg: "brands/mi-scooter-bg.webp" },
    { name: "Mi Eco", logo: "brands/mi-eco.svg", bg: "brands/mi-eco-bg.webp" },
    { name: "ANTHBOT", logo: "brands/anthbot.svg", bg: "brands/anthbot-bg.webp" },
    { name: "Honor", logo: "brands/honor.svg", bg: "brands/honor-bg.webp" },
    { name: "Levoit", logo: "brands/levoit.svg", bg: "brands/levoit-bg.webp" },
    { name: "Motorola", logo: "brands/motorola.svg", bg: "brands/motorola-bg.webp" },
    { name: "Navimow", logo: "brands/navimow.svg", bg: "brands/navimow-bg.webp" },
    { name: "NIU", logo: "brands/niu.svg", bg: "brands/niu-bg.webp" },
    { name: "eufy", logo: "brands/eufy.svg", bg: "brands/eufy-bg.webp" },
    { name: "Zepp", logo: "zepp.png", bg: "brands/zepp-bg.webp" },
  ];

  const retailers = [
    /* === Major retailers (from homepage) === */
    { name: "Amazon", logo: "logo-amazon-1.png" },
    { name: "eBay", logo: "logo-Ebay.png" },
    { name: "Metro", logo: "metro.png" },
    { name: "Media Markt", logo: "media-market.png" },
    { name: "A1", logo: "A1.png" },
    { name: "Decathlon", logo: "Decathlon.png" },
    { name: "Lidl", logo: "lidl.png" },
    { name: "Otto", logo: "otto-orange-1.png" },
    { name: "Euronics", logo: "Euronics.png" },
    { name: "Mobilcom Debitel", logo: "Mobilcom-Debitel-1.png" },
    { name: "Telefónica", logo: "logo-Telefonica.png" },
    { name: "Yettel", logo: "yettel-logo.png" },
    { name: "Notebooksbilliger.de", logo: "notebooksbilliger.de-logo.png" },
    { name: "Expert", logo: "Expert_Logo-1.png" },
    { name: "Tink", logo: "tink-logo.png" },
    { name: "1&1", logo: "1_1_logo-1.png" },
    { name: "Aldi Süd", logo: "aldi-sud.png" },
    { name: "Aldi Nord", logo: "ALDI-Nord.png" },
    { name: "Saturn", logo: "saturn.png" },
    { name: "Electronic4you", logo: "electronic4you_logo_flat_normal-1.png" },
    { name: "Vodafone", logo: "Vodafone_2017_logo-1.png" },
    /* === Additional retailers (from partner list) === */
    { name: "EDEKA", logo: "retailers/edeka.png" },
    { name: "Coolblue", logo: "retailers/coolblue.png" },
    { name: "bol.com", logo: "retailers/bol-com.png" },
    { name: "T-Mobile", logo: "retailers/t-mobile.png" },
    { name: "BAUHAUS", logo: "retailers/bauhaus.png" },
    { name: "Fnac Vanden Borre", logo: "retailers/vanden-borre.png" },
    { name: "Cyberport", logo: "retailers/cyberport.png" },
    { name: "Medion", logo: "retailers/medion.png" },
    { name: "Freenet", logo: "retailers/freenet.svg" },
    { name: "Galaxus", logo: "retailers/galaxus.svg" },
    { name: "Printus", logo: "retailers/printus.svg" },
    { name: "Büromarkt Böttcher", logo: "retailers/boettcher.svg" },
    { name: "JD.com", logo: "retailers/jd-com.png" },
    { name: "e-tec", logo: "retailers/e-tec.svg" },
    { name: "Powwow", logo: "retailers/powwow.svg" },
    { name: "Wortmann Telecom", logo: "retailers/wortmann-telecom.svg" },
    { name: "Terra Home & Living", logo: "retailers/terra-home-living.png" },
    { name: "Farkind", logo: "retailers/farkind.png" },
    { name: "Motion TM", logo: "retailers/motion-tm.png" },
    { name: "Michael Telecom", logo: "retailers/michael-telecom.png" },
    { name: "Köhler Teledata", logo: "retailers/koehler-teledata.svg" },
    { name: "Lanckriet", logo: "retailers/lanckriet.png" },
    { name: "MobielWerkt", logo: "retailers/mobielwerkt.png" },
    { name: "Sunny Europe", logo: "retailers/sunny-europe.svg" },
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
                  <img src={`/images/${brand.logo}`} alt={brand.name} className="max-h-16 md:max-h-20 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-4 block">{t("vendors_104")}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {t("vendors_105")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("vendors_106")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {retailers.map((retailer) => (
              <div key={retailer.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow">
                <img src={`/images/${retailer.logo}`} alt={retailer.name} className="max-h-12 max-w-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
