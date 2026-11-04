import {LANGUAGE_TAGS} from "@/lib/search-policy";
import MainContent from "@/components/MainContent";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
import SkipLink from "@/components/SkipLink";
import CookieConsent from "@/components/CookieConsent";
import {
  FounderJsonLd,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "greek"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const allMessages = await getMessages();
  // Only these namespaces are used by client components. Server page copy stays on the server.
  const messages = Object.fromEntries(Object.entries(allMessages).filter(([key]) => key.startsWith("index_") || key.startsWith("seo_nav_") || key === "services_24"));

  return (
    <html lang={LANGUAGE_TAGS[locale] ?? locale} className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <PasswordGate>
            <SkipLink />
            <OrganizationJsonLd />
            <FounderJsonLd />
            <WebsiteJsonLd />
            <Header />
            <div className="h-16" aria-hidden="true" />
            <MainContent>{children}</MainContent>
            <Footer />
            <CookieConsent />
            {process.env.NEXT_PUBLIC_ROBOTICS_PREVIEW === "1" && <aside lang="en" aria-label="Preview status" style={{position:'fixed',right:12,bottom:12,zIndex:60,background:'#2B2A29',color:'#FEFEFE',padding:'7px 12px',borderRadius:6,fontSize:12,boxShadow:'0 2px 10px #0003',pointerEvents:'none'}}>SEO + LANGUAGE PREVIEW · Not live</aside>}
          </PasswordGate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
