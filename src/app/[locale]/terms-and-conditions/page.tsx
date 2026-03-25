import { routing } from "@/i18n/routing";
import TermsTabs from "./TermsTabs";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function TermsAndConditionsPage() {
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

      {/* Tabs */}
      <TermsTabs />
    </main>
  );
}
