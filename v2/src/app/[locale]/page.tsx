'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import CustomerGrid from '@/components/CustomerGrid';
import BrandGrid from '@/components/BrandGrid';
import SegmentsSection from '@/components/SegmentsSection';
import ServicesSection from '@/components/ServicesSection';
import HighlightsBar from '@/components/HighlightsBar';
import TestimonialSection from '@/components/TestimonialSection';
import NewsSection from '@/components/NewsSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#2d1810]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/10 max-w-full text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {t('index_18')}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {t('index_19')}{' '}
                <span className="text-orange-500">{t('index_20')}</span>{' '}
                {t('index_21')}<br />
                {t('index_22')}
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                {t('index_23')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  {t('index_17')}
                </a>
                <a href="#about" className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  {t('index_24')}
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { value: t('index_25'), label: t('index_26') },
              { value: t('index_27'), label: t('index_28') },
              { value: '28+', label: t('index_29') },
              { value: '5+', label: t('index_30') },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-[#0a0a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8">
            {t('index_31')}
          </p>
          <CustomerGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 font-semibold mb-2">{t('index_39')}</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('index_40')}{' '}
            <span className="text-orange-500">{t('index_41')}</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12">{t('index_42')}</p>

          {/* Features - Vertical list matching v1 */}
          <div className="space-y-6 mb-16">
            {[
              { icon: '📦', title: t('index_43'), desc: t('index_44') },
              { icon: '🌍', title: t('index_45'), desc: t('index_46') },
              { icon: '⭐', title: t('index_47'), desc: t('index_48') },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">{t('index_49')}</h3>
            <p className="text-gray-400 mb-6">{t('index_50')}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-orange-500 font-semibold mb-3">{t('index_51')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{t('index_52')}</li>
                  <li>{t('index_53')}</li>
                  <li>{t('index_54')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-orange-500 font-semibold mb-3">{t('index_55')}</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{t('index_56')}</li>
                  <li>{t('index_57')}</li>
                  <li>{t('index_58')}</li>
                  <li>{t('index_59')}</li>
                  <li>{t('index_60')}</li>
                  <li>{t('index_61')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section className="py-20 bg-[#0a0a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 font-semibold mb-2">{t('index_62')}</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('index_63')}</h2>
          <p className="text-gray-300 max-w-3xl mb-12">{t('index_64')}</p>
          <BrandGrid />
        </div>
      </section>

      {/* Segments */}
      <SegmentsSection />

      {/* Services */}
      <ServicesSection />

      {/* Highlights Bar */}
      <HighlightsBar />

      {/* Testimonial */}
      <TestimonialSection />

      {/* News */}
      <NewsSection />

      {/* CTA */}
      <CtaSection />

    </div>
  );
}
