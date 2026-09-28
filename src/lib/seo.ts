import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import mdPages from "../../data/md-pages.json";

const MARKDOWN_PAGES: string[] = mdPages.pages.map((p) => p.path);

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

  // Pages with a clean Markdown counterpart advertise it, so a crawler that
  // wants text rather than markup can find it from the page itself. English
  // only — see data/md-pages.json.
  const markdownPath = MARKDOWN_PAGES.includes(pagePath)
    ? pagePath === ""
      ? "/en.md"
      : `/en${pagePath}.md`
    : null;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
      ...(locale === "en" && markdownPath
        ? { types: { "text/markdown": `${BASE_URL}${markdownPath}` } }
        : {}),
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
