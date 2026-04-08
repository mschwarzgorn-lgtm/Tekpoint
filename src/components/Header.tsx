"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useRouter } from "@/i18n/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { locales } from "@/i18n/config";

const langNames: Record<string, string> = {
  en:"English",de:"Deutsch",nl:"Nederlands",fr:"Français",es:"Español",it:"Italiano",
  sr:"Srpski",da:"Dansk",sv:"Svenska",no:"Norsk",fi:"Suomi",is:"Íslenska",
  pl:"Polski",ro:"Română",cs:"Čeština",hu:"Magyar",hr:"Hrvatski",bg:"Български",
  sk:"Slovenčina",sl:"Slovenščina",pt:"Português",el:"Ελληνικά",et:"Eesti",
  lv:"Latviešu",lt:"Lietuvių",ga:"Gaeilge",mt:"Malti",zh:"中文",ja:"日本語",ko:"한국어"
};

interface DropdownItem { href: string; label: string; }
interface NavItem { href: string; label: string; children?: DropdownItem[]; }

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      href: "/about",
      label: t("index_11"),
      children: [
        { href: "/about", label: t("index_39") },
        { href: "/management-board", label: t("index_151") },
        { href: "/contact", label: t("index_152") },
      ],
    },
    { href: "/vendors", label: t("index_12") },
    {
      href: "/services",
      label: t("index_13"),
      children: [
        { href: "/services", label: t("services_24") },
        { href: "/services/partner-connectivity", label: t("index_113") },
        { href: "/services/logistics", label: t("index_154") },
        { href: "/services/marketing", label: t("index_126") },
      ],
    },
    { href: "/career", label: t("index_153") },
    { href: "/contact", label: t("index_16") },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileOpen(false);
      setLangOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const handleClick = () => { setActiveDropdown(null); setLangOpen(false); };
    if (activeDropdown || langOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [activeDropdown, langOpen]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg" role="banner">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Tekpoint — Home">
          <img src="/images/tekpoint-logo.png" alt="Tekpoint — Smart Technology Distribution" className="h-7 md:h-8 w-auto" width={180} height={32} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.href + item.label}
              className="relative"
              onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
              onMouseLeave={item.children ? handleMouseLeave : undefined}
            >
              {item.children ? (
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === item.label ? null : item.label); }}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {item.label}
                  <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              )}

              {item.children && activeDropdown === item.label && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-0.5 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1.5 z-50"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {langOpen && (
              <div role="listbox" aria-label="Languages" className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {locales.map((l) => (
                  <button
                    key={l}
                    role="option"
                    aria-selected={l === locale}
                    lang={l}
                    onClick={() => {
                      router.replace(pathname, { locale: l });
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      l === locale ? "font-semibold text-orange-600 bg-orange-50" : "text-gray-700"
                    }`}
                  >
                    {langNames[l] || l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/become-a-partner"
            className="hidden md:inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white h-10 px-6 text-sm font-medium rounded-lg transition-colors"
          >
            {t("index_17")}
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={mobileMenuRef}
          role="navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href + item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      aria-expanded={mobileExpanded === item.label}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px]"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 border-l-2 border-gray-200 pl-2 space-y-0.5" role="menu">
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            href={child.href}
                            role="menuitem"
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg min-h-[44px] flex items-center"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium min-h-[44px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/become-a-partner"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-orange-600 font-semibold min-h-[44px]"
            >
              {t("index_17")} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
