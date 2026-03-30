"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/tekpoint-logo.png" alt="Tekpoint" className="h-7 md:h-8 w-auto mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t("index_148")}
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/tekpoint" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.xing.com/pages/tekpointgmbh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors" aria-label="Xing">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L3.169 13.89c-.09.182-.09.38 0 .53.085.14.253.22.473.22h3.454c.515 0 .715-.332.912-.66 0 0 2.421-4.356 2.509-4.512-.011-.018-2.37-4.112-2.37-4.112-.181-.32-.39-.66-.9-.66H3.648v.044z"/></svg>
              </a>
              <a href="https://www.youtube.com/@tekpointgmbh8118" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("index_150")}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_11")}</Link></li>
              <li><Link href="/management-board" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_151")}</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_152")}</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_153")}</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_16")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("index_13")}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_13")}</Link></li>
              <li><Link href="/services/logistics" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_154")}</Link></li>
              <li><Link href="/services/marketing" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_126")}</Link></li>
              <li><Link href="/vendors" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_12")}</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("index_14")}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/become-a-partner" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_155")}</Link></li>
              <li><Link href="/vendors" className="text-gray-600 hover:text-gray-900 transition-colors">{t("index_12")}</Link></li>
              <li><a href="mailto:info@tekpoint.com" className="text-gray-600 hover:text-gray-900 transition-colors">info@tekpoint.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">{t("index_156")}</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 transition-colors">{t("index_157")}</Link>
            <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gray-700 transition-colors">{t("index_158")}</Link>
            <Link href="/impressum" className="text-gray-500 hover:text-gray-700 transition-colors">{t("index_159")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
