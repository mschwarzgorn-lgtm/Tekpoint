import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/privacy-policy",
    fallbackTitle: "Privacy Policy & Data Protection | Tekpoint GmbH — GDPR Compliant",
    fallbackDescription: "Learn how Tekpoint GmbH protects your personal data under GDPR and Austrian data protection law. Contact our GDPR team at dsgvo@tekpoint.com for inquiries.",
  });
}


export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-lg">
            Information about how we handle your data
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {locale !== "en" && (
            <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              ℹ️ {t("legal_notice_1")}
            </div>
          )}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Data Protection at Tekpoint GmbH
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tekpoint GmbH is committed to protecting your personal data in
              accordance with the General Data Protection Regulation (GDPR) and
              applicable Austrian data protection laws.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Cookie Policy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For detailed information about how we use cookies and similar
              technologies, please refer to our{" "}
              <Link
                href={`/${locale}/cookie-policy`}
                className="text-orange-600 hover:text-orange-700 underline"
              >
                Cookie &amp; Similar Technologies Policy
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              Contact
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about data protection at Tekpoint, please
              contact our data protection team:
            </p>
            <p className="text-gray-700 leading-relaxed mb-1">
              <strong>GDPR contact:</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <a
                href="mailto:dsgvo@tekpoint.com"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                dsgvo@tekpoint.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-1">
              <strong>General inquiries:</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <a
                href="mailto:info@tekpoint.com"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                info@tekpoint.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
