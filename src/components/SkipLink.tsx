"use client";
import { useLocale } from "next-intl";

export default function SkipLink() {
  const locale = useLocale();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#2B2A29] focus:text-[#FEFEFE] focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B2A29] focus:ring-offset-2 focus:text-sm focus:font-medium"
    >
      {locale === "de" ? "Zum Hauptinhalt springen" : "Skip to main content"}
    </a>
  );
}
