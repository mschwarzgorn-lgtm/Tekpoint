'use client';

import { useTranslations } from 'next-intl';

export default function TestimonialSection() {
  const t = useTranslations();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large orange quote mark */}
        <div className="text-7xl text-[#e8581c] leading-none mb-4 font-serif">&ldquo;</div>
        <blockquote className="text-xl lg:text-2xl font-medium text-[#1a1a2e] leading-relaxed mb-6">
          {t('index_129')}
        </blockquote>
        <p className="text-[#e8581c] font-semibold text-sm">
          {t('index_130')}
        </p>
      </div>
    </section>
  );
}
