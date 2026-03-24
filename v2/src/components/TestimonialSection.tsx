"use client";
import { useTranslations } from "next-intl";

export default function TestimonialSection() {
  const t = useTranslations();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-orange-500 text-6xl font-serif mb-8">❝</div>
        <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
          {t("testimonial.quote")}
        </blockquote>
        <p className="text-orange-500 font-semibold">— {t("testimonial.author")}</p>
      </div>
    </section>
  );
}
