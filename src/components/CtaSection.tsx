"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CtaSection() {
  const t = useTranslations();
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-balance text-3xl md:text-4xl font-bold mb-6">
          {t("index_139")}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          {t("index_140")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/become-a-partner"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white h-14 px-10 text-lg font-semibold rounded-lg transition-colors"
          >
            {t("index_155")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white h-14 px-10 text-lg font-semibold rounded-lg transition-colors"
          >
            {t("index_16")}
          </Link>
        </div>
      </div>
    </section>
  );
}
