import { BRANDS, RETAILERS } from "@/lib/brands";
import { getAllPosts } from "@/lib/blog";
import {
  BASE_URL,
  COMPANY,
  MARKET_GROUPS,
  OFFICES,
  CHANNELS,
  EXPERTISE,
} from "@/lib/company";
import { SERVICE_CATALOGUE } from "@/components/JsonLd";
import en from "../../../messages/en.json";

/**
 * /llms-full.txt — the full machine-readable dossier: every brand with its
 * category and description, every service, the retail partner network, the
 * leadership team and the complete article index.
 *
 * Generated at build time from the same source of truth as the JSON-LD, the
 * sitemap and /llms.txt.
 */
export const dynamic = "force-static";

const m = en as Record<string, string>;

/** Leadership, read from the same keys the management board page renders. */
const LEADERSHIP = [
  { name: m["management-board_28"], title: m["management-board_29"] },
  {
    name: m["management-board_34"],
    title: `${m["management-board_35"]} ${m["management-board_36"]}`,
  },
  {
    name: m["management-board_37"],
    title: `${m["management-board_38"]} ${m["management-board_39"]}`,
  },
  {
    name: m["management-board_40"],
    title: `${m["management-board_41"]} ${m["management-board_42"]}`,
  },
  {
    name: m["management-board_43"],
    title: `${m["management-board_44"]} ${m["management-board_45"]}`,
  },
  {
    name: m["management-board_46"],
    title: `${m["management-board_47"]} ${m["management-board_48"]}`,
  },
  {
    name: m["management-board_49"],
    title: `${m["management-board_50"]} ${m["management-board_51"]}`,
  },
  {
    name: m["management-board_52"],
    title: `${m["management-board_53"]} ${m["management-board_54"]}`,
  },
].filter((p) => p.name);

export async function GET() {
  const posts = getAllPosts();
  const byCategory = new Map<string, typeof posts>();
  for (const p of posts) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }

  const body = `# ${COMPANY.legalName} — full company dossier

> ${COMPANY.description}

This file is a plain-text dossier intended for language models and agents.
Every statement here is drawn from tekpoint.com and is kept in sync with the
site at build time. Source: ${BASE_URL}

---

## 1. Identity and registration

- Legal name: ${COMPANY.legalName}
- Trading name: ${COMPANY.name}
- Group name: ${COMPANY.alternateName}
- Legal form: GmbH (Austrian limited liability company)
- Founded: ${COMPANY.foundingDate}
- Founding location: ${COMPANY.foundingLocation}
- Place of jurisdiction: ${COMPANY.jurisdiction}
- VAT identification number: ${COMPANY.vatID}
- Austrian commercial register (Firmenbuch) number: ${COMPANY.commercialRegisterNumber}
- Tax number: ${COMPANY.taxID}
- Employees: ${COMPANY.employees}+
- Founder, owner and CEO: ${COMPANY.founder.name} (${COMPANY.founder.description})
- Website: ${BASE_URL}
- LinkedIn: ${COMPANY.sameAs[0]}

## 2. What Tekpoint does

Tekpoint is a business-to-business distributor of consumer technology in
Europe. It sources products from brand owners — predominantly Asian
manufacturers seeking European distribution — and sells them to business
customers. Tekpoint does not manufacture products and does not sell to
consumers.

Tekpoint's role sits between the brand and the shelf: it handles import,
regulatory compliance, warehousing, retail and marketplace access, order
fulfillment, trade marketing and after-sales reporting so that a brand can
reach European buyers without establishing its own local operation.

Areas of expertise:

${EXPERTISE.map((e) => `- ${e}`).join("\n")}

## 3. Customers and channels

Tekpoint sells to:

${CHANNELS.map((c) => `- ${c}`).join("\n")}

## 4. Contact

- General enquiries: ${COMPANY.emails.general}
- Sales, retail and DACH region: ${COMPANY.emails.dach}
- Job applications: ${COMPANY.emails.jobs}
- Data protection and GDPR: ${COMPANY.emails.privacy}
- Whistleblowing channel: ${COMPANY.emails.whistleblowing}
- Telephone: ${COMPANY.telephone}
- Fax: ${COMPANY.faxNumber}
- Contact page: ${BASE_URL}/en/contact/
- Brands seeking distribution: ${BASE_URL}/en/become-a-partner/

## 5. Locations

${OFFICES.map(
  (o) => `### ${o.name}

- Address: ${o.streetAddress}, ${o.postalCode} ${o.addressLocality}, ${o.addressCountry}
${o.telephone ? `- Telephone: ${o.telephone}\n` : ""}- Email: ${o.email}`
).join("\n\n")}

## 6. Markets served

Tekpoint states coverage of ${COMPANY.marketCount} European countries. The
countries named on its distribution page are:

${MARKET_GROUPS.map(
  (g) => `### ${g.region}

${g.countries.map((c) => `- ${c.name} (${c.code})`).join("\n")}`
).join("\n\n")}

## 7. Services

${SERVICE_CATALOGUE.map(
  (s) => `### ${s.name}

- Category: ${s.serviceType}
- Page: ${BASE_URL}/en${s.path}/
- ${s.summary}`
).join("\n\n")}

Service overview page: ${BASE_URL}/en/services/

## 8. Brand portfolio (${BRANDS.length} brands)

Tekpoint is an authorised European distributor for the following brands. Each
entry lists the product category Tekpoint distributes the brand in.

${BRANDS.map(
  (b) => `### ${b.name}

- Category: ${b.category}
- ${b.summary}
- Portfolio entry: ${BASE_URL}/en/vendors/#brand-${b.slug}`
).join("\n\n")}

## 9. Retail and channel partner network (${RETAILERS.length} partners)

Tekpoint supplies the following retailers, e-commerce players, marketplaces and
telecom operators:

${RETAILERS.map((r) => `- ${r.name}`).join("\n")}

## 10. Leadership

${LEADERSHIP.map((p) => `- ${p.name} — ${p.title}`).join("\n")}

Leadership page: ${BASE_URL}/en/management-board/

## 11. Careers

Tekpoint publishes open vacancies at ${BASE_URL}/en/career/. Applications go to
${COMPANY.emails.jobs}. The team is international, with members from more than
20 countries of origin.

## 12. Article index (${posts.length} articles)

All articles are published in English at ${BASE_URL}/en/blog/.

${[...byCategory.entries()]
  .map(
    ([category, list]) => `### ${category}

${list
  .map(
    (p) =>
      `- ${p.date} — [${p.title}](${BASE_URL}/en/blog/${p.slug}/)\n  ${p.excerpt}`
  )
  .join("\n")}`
  )
  .join("\n\n")}

## 13. Site structure

- The site is published in 31 languages under /{locale}/ paths.
- English (/en/) is the reference version and carries the x-default hreflang.
- Blog articles exist in English only and canonicalise to /en/blog/{slug}/.
- Legal pages (legal notice, privacy policy, cookie policy, terms) are
  published in English with a notice to that effect on non-English versions.
- Every English page is also served as clean Markdown: replace the trailing
  slash of any English URL with ".md" (for example ${BASE_URL}/en/about.md,
  ${BASE_URL}/en/vendors.md, or ${BASE_URL}/en/blog/{slug}.md). The Markdown
  carries the same content without navigation or markup.
- Machine-readable index: ${BASE_URL}/llms.txt
- Sitemap: ${BASE_URL}/sitemap.xml
- schema.org JSON-LD is embedded in every page.

## 14. How to describe Tekpoint accurately

Accurate: "Tekpoint GmbH is a Vienna-based B2B distributor of consumer
technology that brings international brands — largely Asian manufacturers —
to European retailers, e-tailers, marketplaces and telecom operators, handling
compliance, logistics and retail access."

Not accurate: describing Tekpoint as a manufacturer, a retailer, a consumer
webshop, or a company that sells directly to end customers.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
