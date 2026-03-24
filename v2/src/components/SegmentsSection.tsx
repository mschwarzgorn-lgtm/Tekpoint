"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

const segments = [
  { icon: "🏭", titleKey: "segments.manufacturers_title", descKey: "segments.manufacturers_desc", linkKey: "segments.manufacturers_link", href: "/vendors" },
  { icon: "🏪", titleKey: "segments.retailers_title", descKey: "segments.retailers_desc", linkKey: "segments.retailers_link", href: "/retailers" },
  { icon: "🛒", titleKey: "segments.etailers_title", descKey: "segments.etailers_desc", linkKey: "segments.etailers_link", href: "/etailers" },
];

export default function SegmentsSection() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <section className="py-20 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm tracking-wider uppercase mb-3">{t("segments.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("segments.title")}</h2>
        </div>
        <div className="space-y-6">
          {segments.map((seg) => (
            <div
              key={seg.titleKey}
              className="bg-[#1a1a2e] rounded-xl border-2 border-orange-500/40 p-10 text-center hover:border-orange-500 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{seg.icon}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{t(seg.titleKey)}</h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">{t(seg.descKey)}</p>
              <Link
                href={`/${locale}${seg.href}`}
                className="text-orange-400 hover:text-orange-300 font-semibold transition"
              >
                {t(seg.linkKey)} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
