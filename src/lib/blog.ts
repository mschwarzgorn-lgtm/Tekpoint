import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
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
  const html = marked(content) as string;

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug,
    title: data.title,
    date: normaliseDate(data.date),
    excerpt: data.excerpt,
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
