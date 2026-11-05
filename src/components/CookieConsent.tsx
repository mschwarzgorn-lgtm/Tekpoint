"use client";

import Script from "next/script";

export default function CookieConsent() {
  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="2550b74b-3abd-442c-b06e-7208f6d5e2dc"
      data-blockingmode="auto"
      strategy="afterInteractive"
    />
  );
}
