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
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

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
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* hreflang tags for all 30 languages */}
        <link rel="alternate" hrefLang="x-default" href="https://tekpoint.com/en/" />
        {routing.locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`https://tekpoint.com/${l}/`} />
        ))}
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <PasswordGate>
            <SkipLink />
            <OrganizationJsonLd />
            <WebsiteJsonLd />
            <Header />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </PasswordGate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
