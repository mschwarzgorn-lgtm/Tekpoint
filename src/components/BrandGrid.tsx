"use client";
import {useLocale} from "next-intl";
import {HOME_BRANDS} from "@/lib/brands";

export default function BrandGrid() {
  const locale = useLocale();
  return <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 list-none m-0 p-0">
    {HOME_BRANDS.map(brand => {
      const href = brand.slug === "agibot" ? `/${locale}/robotics/` : brand.website;
      const Tag = href ? "a" : "div";
      return <li key={brand.slug} className="min-w-0"><Tag href={href} aria-label={href ? brand.name : undefined} className={`aspect-[3/2] rounded-xl border border-gray-200 hover:shadow-lg transition-all flex items-center justify-center p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B2A29] ${brand.logoTone === "dark" ? "bg-[#2B2A29]" : "bg-white"}`}>
        {brand.logo ? <img src={`/images/${brand.logo}`} alt={brand.name} loading="lazy" className="max-h-10 md:max-h-12 max-w-full w-auto object-contain"/> : <span className="text-sm font-semibold">{brand.name}</span>}
      </Tag></li>;
    })}
  </ul>;
}
