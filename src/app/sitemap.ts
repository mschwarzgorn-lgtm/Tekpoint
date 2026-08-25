import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/company";

/**
 * Generated at build time, so the sitemap can never drift out of date again.
 * Previously public/sitemap.xml was maintained by hand and had gone stale:
 * it was missing the blog, every blog post and four service pages.
 *
 * hreflang alternates are emitted for the localised pages. Blog posts are
 * English-only and canonicalise to /en/, so they appear once.
 */

// Required for `output: "export"`.
export const dynamic = "force-static";

const hreflangMap: Record<string, string> = {
  pt: "pt-PT",
  no: "nb",
  sr: "sr-Latn",
  zh: "zh-Hans",
};

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const localisedRoutes: Route[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/vendors", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/market-entry", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/distribution", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/eu-compliance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/fulfillment", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/logistics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/marketing", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/services/partner-connectivity",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/become-a-partner", priority: 0.8, changeFrequency: "monthly" },
  { path: "/management-board", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/career", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of localisedRoutes) {
    const languages: Record<string, string> = {
      "x-default": `${BASE_URL}/en${route.path}/`,
    };
    for (const l of locales) {
      languages[hreflangMap[l] || l] = `${BASE_URL}/${l}${route.path}/`;
    }

    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}/`,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      });
    }
  }

  // Blog posts — English only, matching their canonical URLs.
  for (const post of getAllPosts()) {
    entries.push({
      url: `${BASE_URL}/en/blog/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
