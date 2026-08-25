
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BRANDS, RETAILERS } from "@/lib/brands";
import {
  BrandPortfolioJsonLd,
  LocaleBreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/JsonLd";
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

  const brands = BRANDS;
  const retailers = RETAILERS;

  return (
    <>
      <WebPageJsonLd
        type="CollectionPage"
        locale={locale}
        path="/vendors"
        name={t("eco_meta_title")}
        description={t("eco_meta_desc")}
      />
      <LocaleBreadcrumbJsonLd
        locale={locale}
        trail={[{ name: t("index_12"), path: "/vendors" }]}
      />
      <BrandPortfolioJsonLd
        locale={locale}
        name={t("eco_brands_title")}
        description={t("eco_brands_text")}
      />
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
              <div key={brand.name} id={`brand-${brand.slug}`} className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer">
                <img src={`/images/${brand.bg}`} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img src={`/images/${brand.logo}`} alt={`${brand.name} logo`} className={`${brand.logoClass ?? "max-h-12 md:max-h-16"} w-auto object-contain brightness-0 invert`} />
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
            <a href={`/${locale}/become-a-partner/`} className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              {t("vendors_90")}
            </a>
            <a href={`/${locale}/services/`} className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              {t("vendors_91")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
