"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

const services = [
  { icon: "🚚", titleKey: "services.logistics_title", descKey: "services.logistics_desc", href: "/services/logistics" },
  { icon: "📢", titleKey: "services.marketing_title", descKey: "services.marketing_desc", href: "/services/marketing" },
  { icon: "🔗", titleKey: "services.connectivity_title", descKey: "services.connectivity_desc", href: "/services/partner-connectivity" },
  { icon: "📊", titleKey: "services.intelligence_title", descKey: "services.intelligence_desc", href: "/services/market-intelligence" },
  { icon: "🏢", titleKey: "services.warehousing_title", descKey: "services.warehousing_desc", href: "/services/warehousing" },
  { icon: "🛡️", titleKey: "services.aftersales_title", descKey: "services.aftersales_desc", href: "/services/after-sales" },
];

export default function ServicesSection() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">{t("services.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("services.title")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.titleKey}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{svc.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(svc.titleKey)}</h3>
              <p className="text-gray-500 leading-relaxed mb-4">{t(svc.descKey)}</p>
              <Link
                href={`/${locale}${svc.href}`}
                className="text-orange-500 hover:text-orange-600 font-semibold text-sm transition"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
