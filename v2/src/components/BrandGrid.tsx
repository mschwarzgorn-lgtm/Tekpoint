'use client';
import { brandData } from '@/data/brands';

export default function BrandGrid() {
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {brandData.map((brand) => (
            <div key={brand.name} className="w-24 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <img src={brand.logo} alt={brand.name} className="max-h-12 max-w-full object-contain filter brightness-0 invert" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
