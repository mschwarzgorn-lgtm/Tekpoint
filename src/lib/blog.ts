import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
  readingTime: number;
  /** Words of source markdown — used for BlogPosting.wordCount. */
  wordCount: number;
  /** Social/structured-data image, e.g. "/og/my-post.png". */
  ogImage?: string;
}

/**
 * Front matter dates may be parsed by gray-matter into Date objects when they
 * are written unquoted. Normalise everything to YYYY-MM-DD so that <time>
 * elements and schema.org datePublished always agree.
 */
function normaliseDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => getPostBySlug(f.replace(".md", "")))
    .filter(Boolean) as BlogPost[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  // The page template already renders the title. Preserve the prose without a second H1.
  const body = content.replace(/^\s*# [^\n]+\n+/, "");
  const html = (marked(body) as string).replace(/<h1([ >])/g, '<h2$1').replace(/<\/h1>/g, '</h2>');
  const fallbackExcerpt = body.split(/\n\s*\n/).map(p => p.trim()).find(p => p && !/^(#|!|<|[-*] )/.test(p))?.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_~\x60]/g, '').replace(/\s+/g, ' ') ?? data.title;
  const rawExcerpt = String(data.excerpt || data.description || fallbackExcerpt).trim();
  const excerpt = rawExcerpt.length <= 165 ? rawExcerpt : rawExcerpt.slice(0, 165).replace(/\s+\S*$/, '').trim();

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug,
    title: data.title,
    date: normaliseDate(data.date),
    excerpt: data.excerpt || data.description || excerpt,
    ...(data.updated ? {modifiedDate: normaliseDate(data.updated)} : {}),
    category: data.category || "Insights",
    author: data.author || "Tekpoint Team",
    content: html,
    readingTime,
    wordCount,
    ogImage: data.ogImage || undefined,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(".md", ""));
}
