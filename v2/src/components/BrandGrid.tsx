"use client";
import { brandData } from "@/data/brands";

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {brandData.map((brand) => (
        <div
          key={brand.name}
          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex items-center justify-center h-40 hover:border-orange-500/30 transition-all duration-300 group"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-16 max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}
