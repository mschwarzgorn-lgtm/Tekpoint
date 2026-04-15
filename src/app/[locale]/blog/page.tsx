import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    pagePath: "/blog",
    fallbackTitle: "Blog — Tekpoint | Industry Insights & European Distribution Updates",
    fallbackDescription:
      "Industry insights, regulatory updates, and practical knowledge from 17 years of European technology distribution.",
  });
}

const categoryColors: Record<string, string> = {
  "Industry News": "bg-blue-100 text-blue-800",
  Insights: "bg-orange-100 text-orange-800",
  "Company Updates": "bg-green-100 text-green-800",
  "Brand Spotlight": "bg-purple-100 text-purple-800",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1628] to-[#1a2d4a] text-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-medium tracking-wide uppercase text-orange-300 mb-4 block">
            INSIGHTS &amp; UPDATES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Industry insights, regulatory updates, and practical knowledge from
            17 years of European technology distribution.
          </p>
        </div>
      </section>

      {locale !== "en" && (
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            ℹ️ {t("legal_notice_1")}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <a href={`/en/blog/${post.slug}`} className="block">
                    {/* Visual header */}
                    <div className="h-48 rounded-t-2xl bg-gradient-to-br from-[#0a1628] to-[#1a2d4a] relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-orange-500 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            categoryColors[post.category] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="p-6 border border-t-0 border-gray-200 rounded-b-2xl group-hover:border-orange-200 transition-colors">
                      <time
                        className="text-sm text-gray-400"
                        dateTime={post.date}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          {post.readingTime} min read
                        </span>
                        <span className="text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
