
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
    titleKey: "eco_meta_title",
    descriptionKey: "eco_meta_desc",
    fallbackTitle: "Our Ecosystem — Brands & Retail Partners | Tekpoint",
    fallbackDescription: "Tekpoint connects international technology brands with retail partners across Europe. Explore our curated brand portfolio and pan-European retail network.",
  });
}


export default async function VendorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const brands = [
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
    { name: "Amazon", logo: "retailers-real/amazon.svg" },
    { name: "eBay", logo: "retailers-real/ebay.svg" },
    { name: "Metro", logo: "retailers-real/metro.png" },
    { name: "Media Markt", logo: "retailers-real/mediamarkt.svg" },
    { name: "A1", logo: "retailers-real/a1.png" },
    { name: "Decathlon", logo: "retailers-real/decathlon.png" },
    { name: "Lidl", logo: "retailers-real/lidl.svg" },
    { name: "Otto", logo: "retailers-real/otto.png" },
    { name: "Euronics", logo: "retailers-real/euronics.png" },
    { name: "Mobilcom Debitel", logo: "retailers-real/mobilcom.png" },
    { name: "Telefónica", logo: "retailers-real/telefonica.svg" },
    { name: "Yettel", logo: "retailers-real/yettel.png" },
    { name: "Notebooksbilliger.de", logo: "retailers-real/nbb.png" },
    { name: "Expert", logo: "retailers-real/expert.png" },
    { name: "Tink", logo: "retailers-real/tink.png" },
    { name: "1&1", logo: "retailers-real/oneandone.png" },
    { name: "Aldi Süd", logo: "retailers-real/aldisud.png" },
    { name: "Aldi Nord", logo: "retailers-real/aldinord.png" },
    { name: "Saturn", logo: "retailers-real/saturn.svg" },
    { name: "Electronic4you", logo: "retailers-real/electronic4you.png" },
    { name: "Vodafone", logo: "retailers-real/vodafone.png" },
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
      {/* ===== SECTION 1: HERO — Our Ecosystem ===== */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">{t("eco_hero_tag")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("eco_hero_title_1")} <span className="text-orange-300">{t("eco_hero_title_2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed">{t("eco_hero_text")}</p>
        </div>
      </section>

      {/* ===== SECTION 2: How we select and develop brands ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">{t("eco_select_title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{t("eco_select_intro")}</p>
          <p className="text-base font-medium text-gray-800 mb-4">{t("eco_select_subtitle")}</p>
          <ul className="space-y-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                <span className="text-gray-700">{t(`eco_select_${i}`)}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-4 italic">{t("eco_select_closing")}</p>
        </div>
      </section>

      {/* ===== SECTION 3: Technology Brands We Represent ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">{t("eco_brands_title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">{t("eco_brands_text")}</p>

          {/* Brand logos grid — original colors (Brands page rule) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {brands.map((brand) => (
              <div key={brand.name} className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={`/images/${brand.bg}`} alt={brand.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img src={`/images/${brand.logo}`} alt={brand.name} className="max-h-12 md:max-h-16 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">{t("eco_brands_context")}</p>
          <p className="text-gray-700 leading-relaxed font-medium">{t("eco_brands_closing")}</p>
        </div>
      </section>

      {/* ===== SECTION 4: Retail & Channel Partners ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">{t("eco_retail_title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t("eco_retail_text")}</p>
          <p className="text-base font-medium text-gray-800 mb-4">{t("eco_retail_includes")}</p>
          <ul className="space-y-3 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                <span className="text-gray-700">{t(`eco_retail_${i}`)}</span>
              </li>
            ))}
          </ul>

          {/* Retailer logos grid — original colors (Brands page rule) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
            {retailers.map((retailer) => (
              <div key={retailer.name} className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-all group">
                <img src={`/images/${retailer.logo}`} alt={retailer.name} className="max-h-12 max-w-full w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">{t("eco_retail_closing")}</p>
        </div>
      </section>

      {/* ===== SECTION 5: How Tekpoint connects brands and retailers ===== */}
      <section className="py-20 md:py-28 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t("eco_connect_title")}</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{t("eco_connect_text")}</p>

          <div className="space-y-4 mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-5">
                <span className="mt-0.5 h-3 w-1 rounded-full bg-orange-500 shrink-0" />
                <span className="text-gray-200">{t(`eco_connect_${i}`)}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{t("eco_connect_closing")}</p>
          <p className="text-xl font-semibold text-orange-300 border-l-4 border-orange-500 pl-4">{t("eco_connect_tagline")}</p>
        </div>
      </section>

      {/* ===== SECTION 6: CTA — Become a Partner ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("vendors_88")}</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{t("vendors_89")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${locale}/become-a-partner`} className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              {t("vendors_90")}
            </a>
            <a href={`/${locale}/services`} className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              {t("vendors_91")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
