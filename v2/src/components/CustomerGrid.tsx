'use client';
import { useState } from 'react';
import { customerData } from '@/data/brands';

export default function CustomerGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center">
      {customerData.map((customer, index) => (
        <div
          key={customer.name}
          className="w-28 h-16 flex items-center justify-center transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={hoveredIndex === index ? customer.logoHover : customer.logo}
            alt={customer.name}
            className="max-h-12 max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
