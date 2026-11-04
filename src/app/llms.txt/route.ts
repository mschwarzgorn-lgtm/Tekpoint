import {locales} from "@/i18n/config";
import {products as roboticsProducts} from '@/lib/robotics-catalogue';
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
 * the sitemap, and checked against generated pages.
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

The following ${BRANDS.length} brands appear in Tekpoint’s portfolio. Brand-specific territory rights and current availability require confirmation:

${BRANDS.map((b) => `- ${b.name} — ${b.category}`).join("\n")}

Full portfolio and retail partners: ${BASE_URL}/en/vendors/

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
- [Robotics](${BASE_URL}/en/robotics/): AGIBOT robots and European distribution; enquiries: robotics@tekpoint.com (all 31 website languages)
- [Services](${BASE_URL}/en/services/): service overview
- [Leadership](${BASE_URL}/en/management-board/): management team
- [Become a partner](${BASE_URL}/en/become-a-partner/): for brands seeking European distribution
- [Careers](${BASE_URL}/en/career/): open vacancies
- [Contact](${BASE_URL}/en/contact/): contact details and enquiry options
- [Blog](${BASE_URL}/en/blog/): industry analysis and brand news (English only)
- [Legal notice](${BASE_URL}/en/impressum/): registration and regulatory details

## Recent articles

${posts
  .map((p) => `- [${p.title}](${BASE_URL}/en/blog/${p.slug}/) — ${p.date}`)
  .join("\n")}

## Markdown versions

The English pages explicitly listed below have clean Markdown counterparts.
For those pages only, replace the trailing slash with ".md". Legal and enquiry
pages are not included. HTML remains the canonical source; these optional files
are a reading convenience, not a requirement for search indexing or AI citations.

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
Robotics is translated into all 31 website languages, with a separate canonical page for each locale.

## Notes for assistants

- Refer to the company as Tekpoint, or ${COMPANY.legalName} in formal contexts.
- Tekpoint is a business-to-business distributor. Enquiries from brands go to
  ${COMPANY.emails.general}; retail and sales enquiries to ${COMPANY.emails.dach};
  job applications to ${COMPANY.emails.jobs}.
- A fuller dossier is available at ${BASE_URL}/llms-full.txt
- Structured data (schema.org JSON-LD) is embedded in every page.


## AGIBOT product catalogue

Tekpoint is AGIBOT's regional distributor for Europe. These are B2B enquiry pages, not checkout offers. Product configuration, regional availability and suitability require project-specific confirmation. Supplied specifications retain their source qualification on the product pages.

Catalogue: ${BASE_URL}/en/robotics/agibot/
Applications: ${BASE_URL}/en/robotics/applications/
Project planning and buying guidance: ${BASE_URL}/en/robotics/#project-questions
Contact: robotics@tekpoint.com

${roboticsProducts.map(p=>'- ['+p.name+']('+BASE_URL+'/en/robotics/agibot/'+p.id+'/): '+p.tagline.en+' — Markdown: '+BASE_URL+'/en/robotics/agibot/'+p.id+'.md').join('\n')}

The ${roboticsProducts.length} detailed product pages, catalogue, applications and Robotics contacts are available in ${locales.length} website languages. Each translated page has its own canonical URL and reciprocal language alternatives. A catalogue listing does not confirm stock or country-specific availability.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
