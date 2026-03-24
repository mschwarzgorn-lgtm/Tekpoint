"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { locales } from "@/i18n/config";

const langNames: Record<string, string> = {
  en:"English",de:"Deutsch",nl:"Nederlands",fr:"Français",es:"Español",it:"Italiano",
  sr:"Srpski",da:"Dansk",sv:"Svenska",no:"Norsk",fi:"Suomi",is:"Íslenska",
  pl:"Polski",ro:"Română",cs:"Čeština",hu:"Magyar",hr:"Hrvatski",bg:"Български",
  sk:"Slovenčina",sl:"Slovenščina",pt:"Português",el:"Ελληνικά",et:"Eesti",
  lv:"Latviešu",lt:"Lietuvių",ga:"Gaeilge",mt:"Malti",zh:"中文",ja:"日本語",ko:"한국어"
};

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: "/about", label: t("index_11") },
    { href: "/vendors", label: t("index_12") },
    { href: "/services", label: t("index_13") },
    { href: "/career", label: t("index_153") },
    { href: "/contact", label: t("index_16") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/tekpoint-logo.svg" alt="Tekpoint" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      router.replace(pathname, { locale: l });
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      l === locale ? "font-semibold text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                  >
                    {langNames[l] || l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/become-a-partner"
            className="hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white h-10 px-6 text-sm font-medium rounded-lg transition-colors"
          >
            {t("index_155")}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/become-a-partner"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-blue-600 font-semibold"
            >
              {t("index_155")} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
