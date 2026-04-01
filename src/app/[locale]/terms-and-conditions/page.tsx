import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import TermsTabs from "./TermsTabs";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/terms-and-conditions",
    fallbackTitle: "Terms & Conditions | Tekpoint GmbH — General Business Terms",
    fallbackDescription: "General terms and conditions governing business relationships with Tekpoint GmbH, a smart technology distributor headquartered in Vienna, Austria.",
  });
}


export default async function TermsAndConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Terms and Conditions
          </h1>
          <p className="text-gray-500 text-lg">
            Legal terms governing our business relationships
          </p>
        </div>
      </section>

      {/* Notice for non-English */}
      {locale !== "en" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            ℹ️ {t("legal_notice_1")}
          </div>
        </div>
      )}

      {/* Tabs */}
      <TermsTabs />
    </main>
  );
}
