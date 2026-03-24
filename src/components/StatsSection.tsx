"use client";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations();
  const stats = [
    { value: "3.5M+", label: t("index_27"), subLabel: t("index_28") },
    { value: "120+", label: t("index_30"), subLabel: t("index_31") },
    { value: "30+", label: t("index_33"), subLabel: t("index_34") },
    { value: "2009", label: t("index_36"), subLabel: t("index_37") },
  ];

  return (
    <section className="relative -mt-16 z-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-900">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.subLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
