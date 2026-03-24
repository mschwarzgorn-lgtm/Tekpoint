import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-gray max-w-none">
          <p>Legal content to be populated from the original website.</p>
        </div>
      </div>
    </section>
  );
}
