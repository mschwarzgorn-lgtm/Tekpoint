"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { locales } from "@/i18n/config";

const localeNames: Record<string, string> = {
  en: "EN", de: "DE", nl: "NL", fr: "FR", it: "IT", es: "ES", pt: "PT",
  pl: "PL", cs: "CS", sk: "SK", hu: "HU", ro: "RO", bg: "BG", hr: "HR",
  sl: "SL", sr: "SR", bs: "BS", mk: "MK", sq: "SQ", el: "EL", tr: "TR",
  uk: "UK", da: "DA", sv: "SV", nb: "NB", fi: "FI", et: "ET", lv: "LV",
  lt: "LT", ga: "GA"
};

const localeFlags: Record<string, string> = {
  en: "🇬🇧", de: "🇩🇪", nl: "🇳🇱", fr: "🇫🇷", it: "🇮🇹", es: "🇪🇸", pt: "🇵🇹",
  pl: "🇵🇱", cs: "🇨🇿", sk: "🇸🇰", hu: "🇭🇺", ro: "🇷🇴", bg: "🇧🇬", hr: "🇭🇷",
  sl: "🇸🇮", sr: "🇷🇸", bs: "🇧🇦", mk: "🇲🇰", sq: "🇦🇱", el: "🇬🇷", tr: "🇹🇷",
  uk: "🇺🇦", da: "🇩🇰", sv: "🇸🇪", nb: "🇳🇴", fi: "🇫🇮", et: "🇪🇪", lv: "🇱🇻",
  lt: "🇱🇹", ga: "🇮🇪"
};

export default function Header() {
  const t = useTranslations();
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as string) || "en";
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  const navItems = [
    { label: t("nav.about"), href: `/${locale}/about` },
    { label: t("nav.vendors"), href: `/${locale}/vendors` },
    { label: t("nav.services"), href: `/${locale}/services` },
    { label: "Careers", href: `/${locale}/careers` },
    { label: t("nav.contact"), href: `/${locale}/contact` },
  ];

  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="bg-[#0f0f1a] text-gray-300 text-sm py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>📍 {t("topbar.hq")}</span>
            <span className="text-gray-600">|</span>
            <a href="mailto:info@tekpoint.com" className="hover:text-white transition">📧 info@tekpoint.com</a>
          </div>
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm hover:text-white transition px-3 py-1 rounded"
            >
              <span>{localeFlags[locale]}</span>
              <span>{localeNames[locale] || locale.toUpperCase()}</span>
              <span className="text-xs">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[#1a1a2e] border border-gray-700 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto w-48">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { switchLocale(loc); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2a2a4a] transition flex items-center gap-2 ${loc === locale ? "text-orange-400 bg-[#2a2a4a]" : "text-gray-300"}`}
                  >
                    <span>{localeFlags[loc]}</span>
                    <span>{localeNames[loc] || loc.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#1a1a2e] py-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex-shrink-0">
            <img src="/images/tekpoint-logo.png" alt="Tekpoint" className="h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:text-white font-medium transition text-[15px]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition text-sm"
          >
            {t("nav.become_partner")} →
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white text-2xl">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1a1a2e] border-t border-gray-700 px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-200 hover:text-white py-2 text-[15px]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="block bg-orange-500 text-white text-center font-semibold px-6 py-2.5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.become_partner")} →
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
