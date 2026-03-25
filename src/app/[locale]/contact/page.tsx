
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

import { generatePageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/contact",
    titleKey: "contact_1",
    descriptionKey: "contact_2",
    fallbackTitle: "Contact — Tekpoint",
    fallbackDescription: "Get in touch with Tekpoint.",
  });
}


const departments = [
  { icon: "📩", key: "contact_48", email: "info@tekpoint.com" },
  { icon: "🤝", key: "contact_49", email: "distribution@tekpoint.com" },
  { icon: "🚚", label: "Logistics", email: "logistik-kontaktformular@tekpoint.com" },
  { icon: "📢", key: "contact_50", email: "marketing@tekpoint.com" },
  { icon: "🔗", label: "Partner Connectivity", email: "partnerconnectivity@tekpoint.com" },
  { icon: "🛒", key: "contact_51", email: "d2c@tekpoint.com" },
  { icon: "💼", key: "contact_52", email: "jobs@tekpoint.com" },
];

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">{t("contact_23")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("contact_24")} <span className="text-blue-300">{t("contact_25")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">{t("contact_26")}</p>
        </div>
      </section>

      {/* Offices Section with Map */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("contact_27")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("contact_28")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("contact_29")}</p>
          </div>

          {/* Market Map */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/market-map.png" alt="Tekpoint office locations across Europe" className="w-full h-auto" />
          </div>

          {/* Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Austria HQ */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{t("contact_30")}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{t("contact_31")}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{t("contact_32")}</p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span>{t("contact_33")}<br />{t("contact_34")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+4313616670" className="hover:text-blue-600 transition-colors">+43 136 16670</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t("contact_35")}</span>
                  <a href="mailto:dach@tekpoint.com" className="hover:text-blue-600 transition-colors">dach@tekpoint.com</a>
                </div>
              </div>
            </div>

            {/* Germany */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{t("contact_36")}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{t("contact_31")}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{t("contact_37")}</p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span>{t("contact_38")}<br />{t("contact_39")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+4921136183789" className="hover:text-blue-600 transition-colors">+49 211 36183789-0</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t("contact_35")}</span>
                  <a href="mailto:dach@tekpoint.com" className="hover:text-blue-600 transition-colors">dach@tekpoint.com</a>
                </div>
              </div>
            </div>

            {/* Balkans */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{t("contact_40")}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{t("contact_41")}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{t("contact_42")}</p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <span>{t("contact_43")}<br />{t("contact_44")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{t("contact_35")}</span>
                  <a href="mailto:info@tekpoint.com" className="hover:text-blue-600 transition-colors">info@tekpoint.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("contact_45")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("contact_46")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("contact_47")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div key={dept.email} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{dept.icon}</div>
                <p className="font-semibold text-gray-900 mb-2">{dept.key ? t(dept.key) : dept.label}</p>
                <a href={`mailto:${dept.email}`} className="text-sm text-blue-600 hover:underline break-all">{dept.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("contact_53")}</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact_54")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("contact_55")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/become-a-partner" className="flex items-center gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow group">
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{t("contact_56")}</p>
                <p className="text-sm text-gray-500">{t("contact_57")}</p>
              </div>
            </Link>
            <a href="mailto:logistik-kontaktformular@tekpoint.com" className="flex items-center gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow group">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{t("contact_58")}</p>
                <p className="text-sm text-gray-500">{t("contact_59")}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">{t("contact_60")}</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact_61")}</h2>
              <p className="text-gray-600">{t("contact_62")}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact_63")}</label>
                    <input type="text" placeholder={t("contact_64")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact_65")}</label>
                    <input type="email" placeholder={t("contact_66")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact_67")}</label>
                  <input type="text" placeholder={t("contact_68")} className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact_71")}</label>
                  <textarea rows={5} placeholder={t("contact_72")} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white resize-none" />
                </div>
                <button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  {t("contact_73")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact_75")}</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t("contact_76")}</p>
          <a href="mailto:info@tekpoint.com" className="inline-flex items-center justify-center bg-white text-blue-600 h-12 px-8 font-medium rounded-lg hover:bg-blue-50 transition-colors">
            {t("contact_77")}
          </a>
        </div>
      </section>
    </>
  );
}
