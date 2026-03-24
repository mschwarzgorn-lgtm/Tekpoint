'use client';
import Image from 'next/image';
import { brandData } from '@/data/brands';

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {brandData.map((brand) => (
        <div key={brand.name} className="bg-white rounded-xl p-8 flex items-center justify-center h-32 shadow-sm border border-gray-100">
          <Image src={brand.logo} alt={brand.name} width={160} height={60} className="object-contain max-h-16" />
        </div>
      ))}
    </div>
  );
}
