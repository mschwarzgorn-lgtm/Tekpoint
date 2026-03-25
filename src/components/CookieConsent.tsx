"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";

const COOKIE_CONSENT_KEY = "tekpoint_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!saved) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (consent: string) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-2xl animate-in slide-in-from-bottom"
    >
      <div className="container mx-auto px-4 py-4 md:py-5">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                <Link
                  href="/cookie-policy"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={() => save("necessary")}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={() => save("all")}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900 text-sm">Necessary</span>
                  <p className="text-xs text-gray-500 mt-0.5">Required for the website to function.</p>
                </div>
                <input type="checkbox" checked disabled className="h-5 w-5 rounded" aria-label="Necessary cookies (always enabled)" />
              </label>
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <span className="font-medium text-gray-900 text-sm">Analytics</span>
                  <p className="text-xs text-gray-500 mt-0.5">Help us understand how visitors use our website.</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  className="h-5 w-5 rounded"
                  aria-label="Analytics cookies"
                />
              </label>
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <span className="font-medium text-gray-900 text-sm">Marketing</span>
                  <p className="text-xs text-gray-500 mt-0.5">Used for advertising purposes.</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  className="h-5 w-5 rounded"
                  aria-label="Marketing cookies"
                />
              </label>
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => save(JSON.stringify(prefs))}
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
