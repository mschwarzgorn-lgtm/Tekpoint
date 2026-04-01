"use client";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations();
  const stats = [
    { value: t("index_25"), label: t("index_26") },
    { value: t("index_27"), label: t("index_28") },
    { value: "25+", label: t("index_29") },
    { value: "23", label: t("index_30") },
  ];

  return (
    <section className="relative -mt-16 z-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
