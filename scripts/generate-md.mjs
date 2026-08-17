/**
 * generate-md.mjs — writes clean Markdown counterparts of the English pages
 * into the exported site, so AI assistants that fetch a single page get the
 * content without the navigation, cookie banner, footer and Tailwind markup.
 *
 * Runs after `next build` (see package.json) and writes straight into `out/`,
 * which means the Markdown is never committed and can never go stale: it is
 * derived from the very HTML that was just built.
 *
 *   /en/about/  ->  out/en/about.md          (https://tekpoint.com/en/about.md)
 *   /en/        ->  out/en.md and out/en/index.md
 *   blog posts  ->  out/en/blog/<slug>.md    (from content/blog/<slug>.md source)
 *
 * English only, by design: 31 localised copies would be near-duplicate noise.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const BASE_URL = "https://tekpoint.com";
const SITE = "Tekpoint GmbH";

const { pages: PAGES } = JSON.parse(
  fs.readFileSync(path.join(ROOT, "data/md-pages.json"), "utf8")
);

/* ------------------------------------------------------------------ helpers */

const ENTITIES = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&mdash;": "\u2014",
  "&ndash;": "\u2013",
  "&hellip;": "\u2026",
  "&rsquo;": "\u2019",
  "&lsquo;": "\u2018",
  "&ldquo;": "\u201c",
  "&rdquo;": "\u201d",
  "&euro;": "\u20ac",
  "&copy;": "\u00a9",
  "&reg;": "\u00ae",
  "&trade;": "\u2122",
  "&middot;": "\u00b7",
  "&bull;": "\u2022",
};

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
      String.fromCodePoint(parseInt(h, 16))
    )
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&[a-zA-Z]+;/g, (m) => ENTITIES[m] ?? m);
}

/** Absolute URL for a site-relative href. */
function absolute(href) {
  if (!href) return "";
  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return href;
}

/** Inline text of a fragment: tags dropped, whitespace collapsed. */
function inlineText(html) {
  return decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, "")
      // A <br> inside a heading is a word boundary, not nothing.
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\s+/g, " ")
    .trim();
}

/** Convert a fragment of rendered page HTML into readable Markdown. */
function htmlToMarkdown(html) {
  let s = html;

  // Strip everything that carries no reading value.
  s = s
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    // Two spans side by side are two separate phrases; keep them apart.
    .replace(/<\/span>\s*<span/gi, "</span> <span");

  // Images become their alt text, which is the only part a reader can use.
  s = s.replace(/<img\b[^>]*>/gi, (tag) => {
    const alt = (tag.match(/\balt="([^"]*)"/i) || [])[1] || "";
    const src = (tag.match(/\bsrc="([^"]*)"/i) || [])[1] || "";
    if (!alt.trim()) return "";
    return `\n![${decodeEntities(alt)}](${absolute(decodeEntities(src))})\n`;
  });

  // Headings, before links: a link inside a heading keeps its text.
  s = s.replace(
    /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,
    (_, level, inner) => `\n\n${"#".repeat(Number(level))} ${inlineText(inner)}\n\n`
  );

  // Links. Card layouts wrap a whole block — heading, excerpt, metadata — in a
  // single <a>; flattening those into one link makes an unreadable wall of
  // text, so block-level links keep their structure and carry the URL after it.
  s = s.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, inner) => {
    const href = decodeEntities((attrs.match(/\bhref="([^"]*)"/i) || [])[1] || "");
    const url = !href || href.startsWith("#") ? "" : absolute(href);
    const wrapsBlocks =
      /<(p|div|section|ul|ol|li|article|table)\b/i.test(inner) ||
      /^\s*#{1,6} /m.test(inner);

    if (wrapsBlocks) {
      return `\n\n${inner}\n\n${url ? `Read more: ${url}\n\n` : ""}`;
    }

    const text = inlineText(inner);
    if (!text) return "";
    return url ? `[${text}](${url})` : text;
  });

  // Block structure.
  s = s
    .replace(/<li\b[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    // A closing </div> is one line break, not a paragraph break: card layouts
    // split a single sentence across nested divs, and joining those lines is
    // what turns "Major" + "brands" back into one readable statement.
    .replace(/<\/div>/gi, "\n")
    .replace(/<\/(p|section|ul|ol|li|tr|table|article|header|footer|aside|figure|figcaption|blockquote|dl|dd|dt)>/gi, "\n\n")
    .replace(/<(p|section|ul|ol|table|article|figure|blockquote|dl)\b[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    // Two buttons side by side render as touching links; give them a line each.
    .replace(/\)\[/g, ")\n[");

  s = decodeEntities(s);

  // Whitespace: one blank line between blocks, no repeated lines. Repeated
  // lines are an artefact of decorative markup, not of the copy.
  const lines = s.split("\n").map((l) => l.replace(/[ \t]+/g, " ").trim());
  const kept = [];
  for (const line of lines) {
    const prev = kept[kept.length - 1];
    if (line === "" && prev === "") continue;
    if (line !== "" && line === prev) continue;
    kept.push(line);
  }
  return kept.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function frontMatter(fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}: ${JSON.stringify(String(v))}`)
    .join("\n");
  return `---\n${body}\n---\n\n`;
}

function write(relPath, contents) {
  const target = path.join(OUT, relPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents, "utf8");
  return contents.length;
}

/* ---------------------------------------------------------------- dossier */

/**
 * Sections of the already-generated /llms-full.txt, used to supplement pages
 * whose content is carried by images rather than text.
 */
const dossier = (() => {
  const file = path.join(OUT, "llms-full.txt");
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
})();

function dossierSection(number) {
  const match = dossier.match(
    new RegExp(`^## ${number}\\. [\\s\\S]*?(?=^## |\\Z)`, "m")
  );
  return match ? match[0].trim() : null;
}

/* -------------------------------------------------------------- page export */

const errors = [];
let files = 0;
let bytes = 0;

for (const { path: pagePath, label, dossierSections = [] } of PAGES) {
  const source = path.join(OUT, "en", pagePath, "index.html");
  if (!fs.existsSync(source)) {
    errors.push(`missing built page: /en${pagePath}/ (looked for ${source})`);
    continue;
  }

  const html = fs.readFileSync(source, "utf8");
  const title = inlineText((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || label);
  const description = decodeEntities(
    (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || ""
  );
  const canonical =
    (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] ||
    `${BASE_URL}/en${pagePath}/`;

  const start = html.indexOf("<main");
  const end = html.indexOf("</main>");
  if (start === -1 || end === -1) {
    errors.push(`no <main> element in /en${pagePath}/`);
    continue;
  }

  const markdownPath = pagePath === "" ? "/en.md" : `/en${pagePath}.md`;
  const body = htmlToMarkdown(html.slice(start, end));

  if (body.length < 200) {
    errors.push(`suspiciously short Markdown for /en${pagePath}/ (${body.length} chars)`);
    continue;
  }

  // Supplementary text for content the page renders only as images.
  const supplements = [];
  for (const number of dossierSections) {
    const section = dossierSection(number);
    if (!section) {
      errors.push(`dossier section ${number} not found for /en${pagePath}/`);
      continue;
    }
    // Drop the dossier's section numbering: it means nothing inside a page.
    supplements.push(section.replace(/^## \d+\. /, "## "));
  }

  const doc =
    frontMatter({
      title,
      description,
      url: canonical,
      markdown_url: BASE_URL + markdownPath,
      site: SITE,
      language: "en",
    }) +
    `${body}\n` +
    (supplements.length
      ? `\n---\n\n${supplements.join("\n\n")}\n`
      : "") +
    `\n---\n\nCanonical HTML page: ${canonical}\nCompany dossier for assistants: ${BASE_URL}/llms-full.txt\n`;

  const targets =
    pagePath === "" ? ["en.md", "en/index.md"] : [`en${pagePath}.md`];
  for (const t of targets) {
    bytes += write(t, doc);
    files += 1;
  }
}

/* -------------------------------------------------------------- blog export */

const postsDir = path.join(ROOT, "content/blog");
const slugs = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
  : [];

if (slugs.length === 0) errors.push("no blog posts found in content/blog");

for (const slug of slugs) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "").slice(0, 10);
  const url = `${BASE_URL}/en/blog/${slug}/`;

  const doc =
    frontMatter({
      title: data.title,
      description: data.excerpt,
      date,
      category: data.category || "Insights",
      author: data.author || "Tekpoint Team",
      url,
      markdown_url: `${BASE_URL}/en/blog/${slug}.md`,
      site: SITE,
      language: "en",
    }) +
    `${content.trim()}\n\n---\n\nPublished by ${SITE} — ${url}\nCompany dossier for assistants: ${BASE_URL}/llms-full.txt\n`;

  bytes += write(`en/blog/${slug}.md`, doc);
  files += 1;
}

/* ------------------------------------------------------------------ summary */

console.log(
  `generate-md: wrote ${files} Markdown file(s), ${(bytes / 1024).toFixed(1)} KB ` +
    `(${PAGES.length} pages, ${slugs.length} blog posts)`
);

if (errors.length) {
  console.error("generate-md: FAILED\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
