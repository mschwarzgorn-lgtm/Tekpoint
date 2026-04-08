"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesSection() {
  const t = useTranslations();
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: t("index_102"),
      desc: t("index_103"),
      href: "/services/partner-connectivity",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: t("index_104"),
      desc: t("index_105"),
      href: "/services/logistics",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: t("index_106"),
      desc: t("index_107"),
      href: "/services/marketing",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{svc.title}</h3>
              <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
