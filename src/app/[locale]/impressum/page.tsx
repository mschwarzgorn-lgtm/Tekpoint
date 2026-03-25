import { routing } from "@/i18n/routing";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/impressum",
    fallbackTitle: "Impressum — Tekpoint",
    fallbackDescription: "Legal notice and company information for Tekpoint GmbH.",
  });
}


export default async function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Impressum
          </h1>
          <p className="text-gray-500 text-lg">Legal Information</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tekpoint GmbH
            </h2>

            <p className="text-gray-700 leading-relaxed mb-1">Leopold Ungar Platz 2</p>
            <p className="text-gray-700 leading-relaxed mb-6">1190 Vienna</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Chief executive officer: Mark Schwarzgorn
            </p>

            <p className="text-gray-700 leading-relaxed mb-1">T. + 43.1.3616670</p>
            <p className="text-gray-700 leading-relaxed mb-1">F. + 43.1.3616670.902</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              M.{" "}
              <a
                href="mailto:info@tekpoint.com"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                info@tekpoint.com
              </a>
            </p>

            <p className="text-gray-700 leading-relaxed mb-1">
              VAT number: ATU65412145
            </p>
            <p className="text-gray-700 leading-relaxed mb-1">
              Commercial register No.: 335307z
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">Tax ID: 214/1799</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Place of jurisdiction: Vienna Austria
            </p>

            <p className="text-gray-700 leading-relaxed mb-1">
              Chamber of Commerce, Technical
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Association of Telecommunications and Broadcasting Companies
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <a
                href="https://www.ris.bka.gv.at/bundesrecht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                www.ris.bka.gv.at/bundesrecht
              </a>
            </p>

            <div className="border-t border-gray-200 pt-6 mt-2">
              <p className="text-gray-700 leading-relaxed mb-1">
                <strong>Whistleblowing contact:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <a
                  href="mailto:whistleblower-channel@tekpoint.com"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  whistleblower-channel@tekpoint.com
                </a>
              </p>

              <p className="text-gray-700 leading-relaxed mb-1">
                <strong>GDPR contact:</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="mailto:dsgvo@tekpoint.com"
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  dsgvo@tekpoint.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
