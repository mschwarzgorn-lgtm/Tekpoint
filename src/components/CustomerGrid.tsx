"use client";

import { RETAILERS } from "@/lib/brands";

const customers = RETAILERS.map(retailer => ({...retailer, logo: `/images/${retailer.logo}`}));

export default function CustomerGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center" role="list" aria-label="Customer partners">
      {customers.map((c) => (
        <div
          key={c.name}
          role="listitem"
          className="group relative w-full flex items-center justify-center h-16 md:h-20"
        >
          <img
            src={c.logo}
            alt={`${c.name} logo`}
            loading="lazy"
            width={130}
            height={64}
            className="max-h-12 md:max-h-16 max-w-[100px] md:max-w-[130px] object-contain group-hover:scale-105 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
