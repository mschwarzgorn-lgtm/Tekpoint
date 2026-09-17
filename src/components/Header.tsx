"use client";

import roboticsNavigation from "../../messages/robotics/navigation.json";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect, useCallback, type KeyboardEvent as ReactKeyEvent } from "react";
import styles from "./Header.module.css";
import { locales } from "@/i18n/config";

const langNames: Record<string, string> = {
  en:"English",de:"Deutsch",nl:"Nederlands",fr:"Français",es:"Español",it:"Italiano",
  sr:"Srpski",da:"Dansk",sv:"Svenska",no:"Norsk",fi:"Suomi",is:"Íslenska",
  pl:"Polski",ro:"Română",cs:"Čeština",hu:"Magyar",hr:"Hrvatski",bg:"Български",
  sk:"Slovenčina",sl:"Slovenščina",pt:"Português",el:"Ελληνικά",et:"Eesti",
  lv:"Latviešu",lt:"Lietuvių",ga:"Gaeilge",mt:"Malti",zh:"中文",ja:"日本語",ko:"한국어",
  ru:"Русский"
};

interface DropdownItem { href: string; label: string; }
interface NavItem { href: string; label: string; children?: DropdownItem[]; }

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const langToggleRef = useRef<HTMLButtonElement>(null);
  const langPanelRef = useRef<HTMLDivElement>(null);
  const dropdownTriggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const pendingLangFocus = useRef<"first" | "last" | null>(null);
  const pendingNavFocus = useRef<"first" | "last" | null>(null);
  const labels = locale === "de"
    ? { home: "Tekpoint — Startseite", nav: "Hauptnavigation", language: "Sprache auswählen", languages: "Sprachen", open: "Navigationsmenü öffnen", close: "Navigationsmenü schließen", mobile: "Mobile Navigation" }
    : { home: "Tekpoint — Home", nav: "Main navigation", language: "Select language", languages: "Languages", open: "Open navigation menu", close: "Close navigation menu", mobile: "Mobile navigation" };

  const focusLink = (panel: HTMLElement | null, position: "first" | "last") => {
    const links = panel?.querySelectorAll<HTMLAnchorElement>("a[href]");
    if (links?.length) links[position === "first" ? 0 : links.length - 1].focus();
  };
  const navigateLinks = (e: ReactKeyEvent<HTMLElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    const links = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>("a[href]"));
    if (!links.length) return;
    e.preventDefault();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next = e.key === "Home" ? 0 : e.key === "End" ? links.length - 1 : (current + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
    links[next].focus();
  };
  useEffect(() => {
    if (langOpen && pendingLangFocus.current) focusLink(langPanelRef.current, pendingLangFocus.current);
    pendingLangFocus.current = null;
  }, [langOpen]);
  useEffect(() => {
    if (activeDropdown && pendingNavFocus.current) focusLink(document.getElementById("nav-" + activeDropdown), pendingNavFocus.current);
    pendingNavFocus.current = null;
  }, [activeDropdown]);
  useEffect(() => () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); }, []);
  useEffect(() => { setMobileOpen(false); setLangOpen(false); setActiveDropdown(null); }, [pathname, locale]);

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
    { href: "/robotics", label: roboticsNavigation[locale as keyof typeof roboticsNavigation] ?? roboticsNavigation.en },
    {
      href: "/services",
      label: t("index_13"),
      children: [
        { href: "/services", label: t("services_24") },
        { href: "/services/partner-connectivity", label: t("index_113") },
        { href: "/services/logistics", label: t("index_154") },
        { href: "/services/marketing", label: t("index_126") },
        { href: "/services/market-entry", label: t("seo_nav_1") },
        { href: "/services/eu-compliance", label: t("seo_nav_2") },
        { href: "/services/distribution", label: t("seo_nav_3") },
        { href: "/services/fulfillment", label: t("seo_nav_4") },
      ],
    },
    { href: "/career", label: t("index_153") },
    { href: "/blog", label: "Blog" },
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
    if (e.key !== "Escape") return;
    if (langOpen) {
      e.preventDefault(); setLangOpen(false); langToggleRef.current?.focus();
    } else if (activeDropdown) {
      e.preventDefault(); dropdownTriggers.current[activeDropdown]?.focus(); setActiveDropdown(null);
    } else if (mobileOpen) {
      e.preventDefault(); setMobileOpen(false); mobileToggleRef.current?.focus();
    }
  }, [langOpen, activeDropdown, mobileOpen]);

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
    if (langPanelRef.current?.contains(document.activeElement)) return;
    setLangOpen(false);
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(current => {
      const panel = current ? document.getElementById("nav-" + current) : null;
      return panel?.parentElement?.contains(document.activeElement) ? current : null;
    }), 150);
  };

  return (
    <header className={`${styles.header} fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg`} role="banner">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={labels.home}>
          <img src="/images/tekpoint-logo.png" alt="Tekpoint — Smart Technology Distribution" className="h-7 md:h-8 w-auto" width={180} height={32} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1" aria-label={labels.nav}>
          {navItems.map((item) => (
            <div
              key={item.href + item.label}
              className="relative"
              onMouseEnter={() => item.children ? handleMouseEnter(item.href.slice(1)) : undefined}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setActiveDropdown(null); }}
              onMouseLeave={item.children ? handleMouseLeave : undefined}
            >
              {item.children ? (
                <button
                  ref={(node) => { dropdownTriggers.current[item.href.slice(1)] = node; }}
                  onClick={(e) => { e.stopPropagation(); setLangOpen(false); setActiveDropdown(activeDropdown === item.href.slice(1) ? null : item.href.slice(1)); }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                      e.preventDefault();
                      const position = e.key === "ArrowDown" ? "first" : "last";
                      if (activeDropdown === item.href.slice(1)) focusLink(document.getElementById("nav-" + item.href.slice(1)), position);
                      else { setLangOpen(false); pendingNavFocus.current = position; setActiveDropdown(item.href.slice(1)); }
                    }
                  }}
                  aria-expanded={activeDropdown === item.href.slice(1)}
                  aria-controls={"nav-" + item.href.slice(1)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {item.label}
                  <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${activeDropdown === item.href.slice(1) ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

              {item.children && activeDropdown === item.href.slice(1) && (
                <div
                  id={"nav-" + item.href.slice(1)}
                  onKeyDown={navigateLinks}
                  className="absolute left-0 top-full mt-0.5 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1.5 z-50"
                  onMouseEnter={() => handleMouseEnter(item.href.slice(1))}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
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
          <div className="relative" onClick={(e) => e.stopPropagation()} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setLangOpen(false); }}>
            <button
              ref={langToggleRef}
              onClick={() => { setActiveDropdown(null); setLangOpen(!langOpen); }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                  e.preventDefault();
                  const position = e.key === "ArrowDown" ? "first" : "last";
                  if (langOpen) focusLink(langPanelRef.current, position);
                  else { setActiveDropdown(null); pendingLangFocus.current = position; setLangOpen(true); }
                }
              }}
              aria-expanded={langOpen}
              aria-controls="language-options"
              aria-label={labels.language}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {langOpen && (
              <div id="language-options" ref={langPanelRef} role="group" aria-label={labels.languages} onKeyDown={navigateLinks} className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    hrefLang={l}
                    aria-current={l === locale ? "true" : undefined}
                    lang={l}
                    onClick={() => { setLangOpen(false); langToggleRef.current?.focus(); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                      l === locale ? "font-semibold text-[#2B2A29] bg-gray-100" : "text-gray-700"
                    }`}
                  >
                    {langNames[l] || l}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/become-a-partner/"
            className={`${styles.partner} hidden md:inline-flex items-center h-10 px-6 text-sm font-medium rounded-lg transition-colors`}
          >
            {t("index_17")}
          </Link>

          <button
            ref={mobileToggleRef}
            onClick={() => { setLangOpen(false); setActiveDropdown(null); setMobileOpen(!mobileOpen); }}
            className="xl:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label={mobileOpen ? labels.close : labels.open}
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
          aria-label={labels.mobile}
          className="xl:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href + item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      aria-expanded={mobileExpanded === item.label}
                      aria-controls={"mobile-" + item.href.slice(1)}
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
                      <div id={"mobile-" + item.href.slice(1)} className="ml-4 border-l-2 border-gray-200 pl-2 space-y-0.5">
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            href={child.href}
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
              href="/become-a-partner/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-[#2B2A29] underline decoration-[#DE6123] underline-offset-4 font-semibold min-h-[44px]"
            >
              {t("index_17")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
