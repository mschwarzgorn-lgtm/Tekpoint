"use client";
import { useTranslations } from "next-intl";
import { brandData } from "@/data/brands";

export default function BrandGrid() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">{t("brands.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("brands.title")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandData.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center h-40 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
