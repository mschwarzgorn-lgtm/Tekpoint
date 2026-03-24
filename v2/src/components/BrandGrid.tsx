'use client';

import { useTranslations } from 'next-intl';
import { brandData } from '@/data/brands';

export default function BrandGrid() {
  const t = useTranslations();

  return (
    <section id="brands" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#e8581c] font-semibold text-sm mb-2">{t('index_62')}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">{t('index_63')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('index_64')}</p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {brandData.map((brand, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-center hover:shadow-md hover:border-[#e8581c]/20 transition-all aspect-square"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
