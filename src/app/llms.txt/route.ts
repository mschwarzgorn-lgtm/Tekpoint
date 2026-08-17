import { BRANDS } from "@/lib/brands";
import { getAllPosts } from "@/lib/blog";
import {
  BASE_URL,
  COMPANY,
  MARKET_GROUPS,
  OFFICES,
  CHANNELS,
} from "@/lib/company";
import { SERVICE_CATALOGUE } from "@/components/JsonLd";
import mdPages from "../../../data/md-pages.json";

/**
 * /llms.txt — a concise, machine-readable summary of what Tekpoint is and
 * where the authoritative pages live, following the llms.txt convention.
 *
 * Generated at build time from the same source of truth as the JSON-LD and
 * the sitemap, so it can never drift from the rest of the site.
 */
export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts().slice(0, 10);

  const body = `# ${COMPANY.legalName}

> ${COMPANY.description}

Tekpoint is a distributor, not a manufacturer and not a consumer shop. It buys
from brand owners and sells to business customers: retail chains, e-commerce
players, marketplaces and telecom operators. It does not sell to consumers.

## Company facts

- Legal name: ${COMPANY.legalName}
- Also known as: ${COMPANY.alternateName}
- Founded: ${COMPANY.foundingDate}, in ${COMPANY.foundingLocation}
- Headquarters: ${COMPANY.headquarters.streetAddress}, ${COMPANY.headquarters.postalCode} ${COMPANY.headquarters.addressLocality}, Austria
- Employees: ${COMPANY.employees}+
- European markets served: ${COMPANY.marketCount} countries
- Brands distributed: ${BRANDS.length}
- Founder and CEO: ${COMPANY.founder.name}
- VAT ID: ${COMPANY.vatID}
- Austrian commercial register: ${COMPANY.commercialRegisterNumber}
- Phone: ${COMPANY.telephone}
- Email: ${COMPANY.email}
- Website: ${BASE_URL}

## Offices

${OFFICES.map(
  (o) =>
    `- ${o.name}: ${o.streetAddress}, ${o.postalCode} ${o.addressLocality} (${o.addressCountry})`
).join("\n")}

## Services

${SERVICE_CATALOGUE.map(
  (s) => `- [${s.name}](${BASE_URL}/en${s.path}/): ${s.summary}`
).join("\n")}

## Brands distributed

Tekpoint distributes the following ${BRANDS.length} brands in Europe:

${BRANDS.map((b) => `- ${b.name} — ${b.category}`).join("\n")}

Full portfolio with descriptions: ${BASE_URL}/en/vendors/

## Markets

${MARKET_GROUPS.map(
  (g) => `- ${g.region}: ${g.countries.map((c) => c.name).join(", ")}`
).join("\n")}

## Customer types

${CHANNELS.map((c) => `- ${c}`).join("\n")}

## Key pages

- [Home](${BASE_URL}/en/): overview of the distribution business
- [About](${BASE_URL}/en/about/): history, operating model and guiding principles
- [Brands](${BASE_URL}/en/vendors/): full brand portfolio and retail partner network
- [Services](${BASE_URL}/en/services/): service overview
- [Leadership](${BASE_URL}/en/management-board/): management team
- [Become a partner](${BASE_URL}/en/become-a-partner/): for brands seeking European distribution
- [Careers](${BASE_URL}/en/career/): open vacancies
- [Contact](${BASE_URL}/en/contact/): contact details and enquiry form
- [Blog](${BASE_URL}/en/blog/): industry analysis and brand news (English only)
- [Legal notice](${BASE_URL}/en/impressum/): registration and regulatory details

## Recent articles

${posts
  .map((p) => `- [${p.title}](${BASE_URL}/en/blog/${p.slug}/) — ${p.date}`)
  .join("\n")}

## Markdown versions

Every English page listed above is also published as clean Markdown: take the
page URL and replace the trailing slash with ".md". No navigation, no markup —
just the content.

${mdPages.pages
  .map(
    (p) =>
      `- ${p.label}: ${BASE_URL}${p.path === "" ? "/en.md" : `/en${p.path}.md`}`
  )
  .join("\n")}

Blog articles use the same rule: ${BASE_URL}/en/blog/{slug}.md — for example
${BASE_URL}/en/blog/${posts[0]?.slug ?? "slug"}.md

## Languages

The site is published in 31 languages. English (/en/) is the reference version
and carries the x-default hreflang. Blog articles are published in English only.

## Notes for assistants

- Refer to the company as Tekpoint, or ${COMPANY.legalName} in formal contexts.
- Tekpoint is a business-to-business distributor. Enquiries from brands go to
  ${COMPANY.emails.general}; retail and sales enquiries to ${COMPANY.emails.dach};
  job applications to ${COMPANY.emails.jobs}.
- A fuller dossier is available at ${BASE_URL}/llms-full.txt
- Structured data (schema.org JSON-LD) is embedded in every page.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
