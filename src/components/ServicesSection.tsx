"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-600 mb-4 block">
            {t("index_99")}
          </span>
          <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            {t("index_100")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("index_101")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured: Partner Connectivity — Orange gradient */}
          <Link
            href="/services/partner-connectivity/"
            className="group lg:row-span-2 p-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden flex flex-col justify-between min-h-[280px] lg:min-h-0"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-8">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{t("index_102")}</h3>
              <p className="text-white/85 text-lg leading-relaxed max-w-md">{t("index_103")}</p>
            </div>
            <div className="relative mt-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide group-hover:gap-3 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Logistics — Dark bg */}
          <Link
            href="/services/logistics/"
            className="group p-8 rounded-2xl bg-[#0a1628] text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-300 transition-colors">{t("index_104")}</h3>
                <p className="text-gray-400 leading-relaxed">{t("index_105")}</p>
              </div>
            </div>
          </Link>

          {/* Marketing — Light border */}
          <Link
            href="/services/marketing/"
            className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 bg-white relative overflow-hidden transition-colors"
          >
            <div className="relative flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("index_106")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("index_107")}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
