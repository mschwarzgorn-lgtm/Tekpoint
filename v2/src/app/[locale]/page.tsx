'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import BrandGrid from '@/components/BrandGrid';
import CustomerGrid from '@/components/CustomerGrid';
import SegmentsSection from '@/components/SegmentsSection';
import ServicesSection from '@/components/ServicesSection';
import HighlightsBar from '@/components/HighlightsBar';
import TestimonialSection from '@/components/TestimonialSection';
import NewsSection from '@/components/NewsSection';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();

  const stats = [
    { value: t('index_25'), label: t('index_26') },
    { value: t('index_27'), label: t('index_28') },
    { value: '28+', label: t('index_29') },
    { value: '5+', label: t('index_30') },
  ];

  const features = [
    { icon: '📦', title: t('index_43'), desc: t('index_44') },
    { icon: '🌍', title: t('index_45'), desc: t('index_46') },
    { icon: '⚡', title: t('index_47'), desc: t('index_48') },
  ];

  const offices = [
    t('index_52'), t('index_53'), t('index_54'),
  ];

  const markets = [
    t('index_56'), t('index_57'), t('index_58'),
    t('index_59'), t('index_60'), t('index_61'),
  ];

  return (
    <>
      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#2d1810] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#e8581c] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e8581c]/10 border border-[#e8581c]/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-[#e8581c]">{t('index_18')}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t('index_19')}{' '}
                <span className="text-[#e8581c]">{t('index_20')}</span>
                <br />
                <span className="text-lg sm:text-xl lg:text-2xl font-normal text-white/60 mt-2 block">
                  {t('index_21')} {t('index_22')}
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                {t('index_23')}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#partners"
                  className="inline-flex items-center justify-center bg-[#e8581c] hover:bg-[#d14e18] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
                >
                  {t('index_17')}
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                >
                  {t('index_24')}
                </a>
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-3xl lg:text-4xl font-bold text-[#e8581c] mb-1">{stat.value}</div>
                  <div className="text-white/60 text-xs lg:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: TRUST BAR (Customer Logos) ========== */}
      <CustomerGrid />

      {/* ========== SECTION 3: ABOUT ========== */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Header */}
          <div className="text-center mb-12">
            <p className="text-[#e8581c] font-semibold text-sm mb-2">{t('index_39')}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
              {t('index_40')}<br />{t('index_41')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('index_42')}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {features.map((feat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="text-3xl mb-3">{feat.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Map / Europe Coverage */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#22224a] rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{t('index_49')}</h3>
              <p className="text-white/60">{t('index_50')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e8581c] mb-4">{t('index_51')}</h4>
                <ul className="space-y-2">
                  {offices.map((office, i) => (
                    <li key={i} className="text-white/80 text-sm">{office}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e8581c] mb-4">{t('index_55')}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {markets.map((market, i) => (
                    <div key={i} className="text-white/80 text-sm">{market}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: BRANDS ========== */}
      <BrandGrid />

      {/* ========== SECTION 5: SEGMENTS (For Manufacturers/Retailers/E-Tailers) ========== */}
      <SegmentsSection />

      {/* ========== SECTION 6: SERVICES (6 cards) ========== */}
      <ServicesSection />

      {/* ========== SECTION 7: HIGHLIGHTS BAR ========== */}
      <HighlightsBar />

      {/* ========== SECTION 8: TESTIMONIAL ========== */}
      <TestimonialSection />

      {/* ========== SECTION 9: NEWS ========== */}
      <NewsSection />

      {/* ========== SECTION 10: CTA ========== */}
      <CtaSection />
    </>
  );
}
