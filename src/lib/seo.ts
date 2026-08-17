import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://tekpoint.com";

const hreflangMap: Record<string, string> = {
  pt: "pt-PT",
  no: "nb",
  sr: "sr-Latn",
  zh: "zh-Hans",
};

export async function generatePageMetadata({
  locale,
  pagePath,
  titleKey,
  descriptionKey,
  fallbackTitle,
  fallbackDescription,
}: {
  locale: string;
  pagePath: string; // e.g. "" for homepage, "/about", "/services"
  titleKey?: string;
  descriptionKey?: string;
  fallbackTitle: string;
  fallbackDescription: string;
}): Promise<Metadata> {
  setRequestLocale(locale);

  let title = fallbackTitle;
  let description = fallbackDescription;

  if (titleKey || descriptionKey) {
    const t = await getTranslations();
    if (titleKey) title = t(titleKey);
    if (descriptionKey) description = t(descriptionKey);
  }

  const canonicalUrl = `${BASE_URL}/${locale}${pagePath}`;

  // Build alternates with hreflang
  const languages: Record<string, string> = {
    "x-default": `${BASE_URL}/en${pagePath}`,
  };
  for (const l of routing.locales) {
    const hreflang = hreflangMap[l] || l;
    languages[hreflang] = `${BASE_URL}/${l}${pagePath}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Tekpoint",
      locale: locale,
      type: pagePath === "" ? "website" : "article",
      images: [
        {
          url: `${BASE_URL}/images/tekpoint-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Tekpoint — Smart Technology Distribution",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/images/tekpoint-og.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
