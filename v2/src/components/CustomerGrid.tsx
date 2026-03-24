'use client';

import { useTranslations } from 'next-intl';
import { customers } from '@/data/customers';

export default function CustomerGrid() {
  const t = useTranslations();

  return (
    <section className="py-10 lg:py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-medium mb-8">{t('index_31')}</p>
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
      </div>
    </section>
  );
}
