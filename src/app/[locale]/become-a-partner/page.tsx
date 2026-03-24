
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BecomeAPartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-blue-300 mb-4 block">🤝 Partnership Application</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Become a<br /><span className="text-blue-300">Tekpoint Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Join one of Europe&apos;s leading technology distributors. Access 28+ premium brands across Western, Central &amp; Eastern European markets.
          </p>
          <a
            href="/downloads/trading-application-form.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white h-14 px-8 font-semibold rounded-lg transition-colors text-lg"
          >
            📥 Download Application Form (PDF)
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three Simple Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">①</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Download</h3>
              <p className="text-gray-600 mb-4">Download our Trading Application Form (PDF). The form is available in English and German.</p>
              <a
                href="/downloads/trading-application-form.pdf"
                download
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                📥 Download PDF
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">②</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete &amp; Sign</h3>
              <p className="text-gray-600">Fill in your company details, contacts, business description, and product interests. Have it signed and stamped by a company director.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">③</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit</h3>
              <p className="text-gray-600 mb-2">Send the completed form along with required documents to our distribution team.</p>
              <p className="text-sm text-gray-500">📧 <a href="mailto:distribution@tekpoint.com" className="text-blue-600 hover:underline">distribution@tekpoint.com</a></p>
              <p className="text-sm text-gray-500">📠 +43/1/3616670-902</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">Checklist</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Required Documents</h2>
            <p className="text-lg text-gray-600 mt-4">Please attach the following documents with your completed application:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Trading Application Form", desc: "Completed and signed by a company director" },
              { title: "Company Registration Document", desc: "Official registration certificate" },
              { title: "VAT Certificate", desc: "Valid VAT registration document" },
              { title: "Passport Copy of Director", desc: "ID document of the signing director" },
            ].map((doc) => (
              <div key={doc.title} className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{doc.title}</p>
                  <p className="text-sm text-gray-500">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">🔒 All information provided will be treated in the strictest confidence.</p>
        </div>
      </section>

      {/* What the Form Covers */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-blue-600 mb-3 block">Application Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What the Form Covers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🏢", title: "Company Details", desc: "Company name, address, VAT number, delivery address, and website." },
              { icon: "👤", title: "Key Contacts", desc: "Director, sales contact, purchase contact, and accounting department." },
              { icon: "💼", title: "Business Profile", desc: "Business type, product categories, brands of interest, and stock preferences." },
              { icon: "📜", title: "Terms & Conditions", desc: "General Conditions of Sale and Delivery in English and German." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Partnership Today</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Download our Trading Application Form, complete it, and send it to our distribution team. We look forward to partnering with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/trading-application-form.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 h-12 px-8 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              📥 Download Application Form
            </a>
            <a
              href="mailto:distribution@tekpoint.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white h-12 px-8 font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            📧 distribution@tekpoint.com &nbsp;|&nbsp; 📞 +43/1/3616670 &nbsp;|&nbsp; 📠 +43/1/3616670-902
          </p>
        </div>
      </section>
    </>
  );
}
