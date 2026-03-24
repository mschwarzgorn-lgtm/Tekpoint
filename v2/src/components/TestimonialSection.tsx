'use client';
import { useTranslations } from 'next-intl';

export default function TestimonialSection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-6xl text-orange-500 block mb-6">❝</span>
        <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8">
          {t('index_129')}
        </blockquote>
        <p className="text-orange-500 font-semibold">{t('index_130')}</p>
      </div>
    </section>
  );
}
