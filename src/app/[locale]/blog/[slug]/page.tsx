import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import {
  BlogPostingJsonLd,
  BreadcrumbJsonLd,
} from "@/components/JsonLd";
import type { Metadata } from "next";

const BASE_URL = "https://tekpoint.com";

export function generateStaticParams() {
  const slugs = getAllSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — Tekpoint" };

  return {
    title: `${post.title} — Tekpoint Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/en/blog/${slug}/`,
      // The article's Markdown source, for readers that want text not markup.
      types: { "text/markdown": `${BASE_URL}/en/blog/${slug}.md` },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/en/blog/${slug}/`,
      siteName: "Tekpoint",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.ogImage
        ? {
            images: [
              {
                url: `${BASE_URL}${post.ogImage}`,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.ogImage ? { images: [`${BASE_URL}${post.ogImage}`] } : {}),
    },
  };
}

const categoryColors: Record<string, string> = {
  "Industry News": "bg-blue-100 text-blue-800",
  Insights: "bg-orange-100 text-orange-800",
  "Company Updates": "bg-green-100 text-green-800",
  "Brand Spotlight": "bg-purple-100 text-purple-800",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostingJsonLd
        slug={post.slug}
        title={post.title}
        date={post.date}
        excerpt={post.excerpt}
        author={post.author}
        category={post.category}
        image={post.ogImage}
        wordCount={post.wordCount}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_URL}/${locale}/` },
          { name: "Blog", url: `${BASE_URL}/en/blog/` },
          { name: post.title, url: `${BASE_URL}/en/blog/${post.slug}/` },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav
            className="text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <a
              href={`/${locale}`}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <span className="mx-2">/</span>
            <a
              href={`/en/blog`}
              className="hover:text-white transition-colors"
            >
              Blog
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-300 truncate">{post.title}</span>
          </nav>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              categoryColors[post.category] || "bg-gray-100 text-gray-700"
            } mb-4`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="hidden sm:inline">•</span>
            <span>{post.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {locale !== "en" && (
        <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            ℹ️ {t("legal_notice_1")}
          </div>
        </div>
      )}

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-semibold prose-headings:text-gray-900
              prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-img:rounded-xl
              prose-blockquote:border-l-orange-500 prose-blockquote:text-gray-600
              prose-li:marker:text-orange-500"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/en/blog/"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
