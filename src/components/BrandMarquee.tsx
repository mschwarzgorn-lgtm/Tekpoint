"use client";

import {useLocale} from "next-intl";
import {HOME_BRANDS} from "@/lib/brands";

function MarqueeRow({items, reverse = false, speed = 35}: {items: typeof HOME_BRANDS; reverse?: boolean; speed?: number}) {
  const locale = useLocale();
  return <div className="overflow-hidden"><div className="flex gap-6 w-max marquee-track" style={{animation: `marquee-scroll ${speed}s linear infinite`, animationDirection: reverse ? "reverse" : "normal"}}>
    {[...items, ...items].map((brand, i) => {
      const href = brand.slug === "agibot" ? `/${locale}/robotics/` : brand.website;
      const Tag = href ? "a" : "div";
      return <Tag key={`${brand.slug}-${i}`} href={href} aria-label={href ? brand.name : undefined} aria-hidden={i >= items.length ? true : undefined} tabIndex={href && i >= items.length ? -1 : undefined} className={`flex-shrink-0 w-36 h-20 rounded-xl border border-gray-100 flex items-center justify-center p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B2A29] ${brand.logoTone === "dark" ? "bg-[#2B2A29]" : "bg-white"}`}>
        {brand.logo ? <img src={`/images/${brand.logo}`} alt={brand.name} loading="lazy" className="max-h-9 max-w-full w-auto object-contain"/> : <span className="text-sm font-semibold">{brand.name}</span>}
      </Tag>;
    })}
  </div></div>;
}

export default function BrandMarquee() {
  const middle = Math.ceil(HOME_BRANDS.length / 2);
  return <div className="relative">
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"/>
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"/>
    <div className="space-y-4"><MarqueeRow items={HOME_BRANDS.slice(0,middle)} speed={35}/><MarqueeRow items={HOME_BRANDS.slice(middle)} reverse speed={40}/></div>
  </div>;
}
