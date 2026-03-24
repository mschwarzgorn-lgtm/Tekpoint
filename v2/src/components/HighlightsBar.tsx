"use client";
import { useTranslations } from "next-intl";

const highlights = [
  { icon: "🌍", key: "highlights.distribution" },
  { icon: "📦", key: "highlights.warehousing" },
  { icon: "🏪", key: "highlights.retailers" },
  { icon: "📢", key: "highlights.marketing" },
  { icon: "🏢", key: "highlights.office" },
];

export default function HighlightsBar() {
  const t = useTranslations();
  return (
    <section className="bg-orange-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {highlights.map((h) => (
            <div key={h.key} className="flex flex-col items-center text-center">
              <span className="text-4xl mb-3">{h.icon}</span>
              <span className="text-white font-bold text-sm tracking-wider uppercase">{t(h.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
