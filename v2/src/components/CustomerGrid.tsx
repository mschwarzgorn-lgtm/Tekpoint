'use client';

import { customers } from '@/data/customers';

export default function CustomerGrid() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
      {customers.map((customer) => (
        <div key={customer.id} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
          <img
            src={customer.logo}
            alt={customer.name}
            className="h-8 lg:h-10 w-auto max-w-[120px] object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
