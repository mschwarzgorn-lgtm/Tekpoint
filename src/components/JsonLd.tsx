/**
 * Structured data (schema.org JSON-LD).
 *
 * Machines — search crawlers, AI assistants and agents — read these blocks to
 * establish what Tekpoint is, what it distributes, where it operates and who
 * runs it. Every fact here comes from src/lib/company.ts or src/lib/brands.ts
 * so that no two surfaces can contradict each other.
 */

import {
  BASE_URL,
  COMPANY,
  OFFICES,
  MARKETS,
  EXPERTISE,
  CHANNELS,
} from "@/lib/company";
import { BRANDS } from "@/lib/brands";
import { locales } from "@/i18n/config";

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
/** Stable, name-derived @id so the founder and the leadership page agree. */
export function personId(name: string) {
  return `${BASE_URL}/#person-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

const FOUNDER_ID = personId(COMPANY.founder.name);

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Canonical service catalogue — paths match the real routes. */
export const SERVICE_CATALOGUE = [
  {
    path: "/services/market-entry",
    name: "European market entry for technology brands",
    serviceType: "Market entry consulting and execution",
    summary:
      "Support for Asian technology brands entering the European market, covering compliance, logistics, retail access and brand building across Western and Central/Eastern Europe.",
  },
  {
    path: "/services/distribution",
    name: "European distribution",
    serviceType: "Wholesale distribution",
    summary:
      "Distribution of technology brands across Western Europe, Central/Eastern Europe and Scandinavia, including warehousing, retail access, fulfillment and reporting through a single partner.",
  },
  {
    path: "/services/logistics",
    name: "Logistics and warehousing",
    serviceType: "Logistics services",
    summary:
      "End-to-end logistics for technology brands: warehousing, order processing, shipping and returns management across 23 European countries.",
  },
  {
    path: "/services/fulfillment",
    name: "Retail and e-commerce fulfillment",
    serviceType: "Order fulfillment",
    summary:
      "Retail and e-commerce fulfillment in Europe: import, warehousing, order processing, marketplace shipping and returns handling for international technology brands.",
  },
  {
    path: "/services/eu-compliance",
    name: "EU compliance and regulatory guidance",
    serviceType: "Regulatory compliance consulting",
    summary:
      "Regulatory support for technology manufacturers across CE marking, WEEE, battery regulations, REACH, packaging rules and GPSR in all EU markets.",
  },
  {
    path: "/services/partner-connectivity",
    name: "Partner connectivity and EDI integration",
    serviceType: "System integration",
    summary:
      "Integration with Tekpoint's European retail partner network, connecting brands to retail systems and order flows.",
  },
  {
    path: "/services/marketing",
    name: "Trade and retail marketing",
    serviceType: "Marketing services",
    summary:
      "Marketing for technology brands in Europe: brand building, digital marketing, retail activation and market entry strategy.",
  },
] as const;

const areaServed = MARKETS.map((c) => ({
  "@type": "Country",
  name: c.name,
  identifier: c.code,
}));

/* ------------------------------------------------------------------ */
/* Organization — the anchor entity for the whole site                */
/* ------------------------------------------------------------------ */

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: COMPANY.alternateName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/tekpoint-logo.png`,
      caption: "Tekpoint",
    },
    image: `${BASE_URL}/images/tekpoint-og.jpg`,
    description: COMPANY.description,
    foundingDate: COMPANY.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: COMPANY.foundingLocation,
    },
    founder: { "@id": FOUNDER_ID },
    vatID: COMPANY.vatID,
    taxID: COMPANY.taxID,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Austrian commercial register (Firmenbuch)",
        value: COMPANY.commercialRegisterNumber,
      },
      {
        "@type": "PropertyValue",
        name: "VAT identification number",
        value: COMPANY.vatID,
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: COMPANY.employees,
    },
    telephone: COMPANY.telephone,
    faxNumber: COMPANY.faxNumber,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.headquarters.streetAddress,
      postalCode: COMPANY.headquarters.postalCode,
      addressLocality: COMPANY.headquarters.addressLocality,
      addressCountry: COMPANY.headquarters.addressCountry,
    },
    location: OFFICES.map((o) => ({
      "@type": "Place",
      name: o.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: o.streetAddress,
        postalCode: o.postalCode,
        addressLocality: o.addressLocality,
        addressCountry: o.addressCountry,
      },
      ...(o.telephone ? { telephone: o.telephone } : {}),
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: COMPANY.emails.general,
        telephone: COMPANY.telephone,
        availableLanguage: ["English", "German"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: COMPANY.emails.dach,
        availableLanguage: ["English", "German"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: COMPANY.emails.jobs,
        availableLanguage: ["English", "German"],
      },
      {
        "@type": "ContactPoint",
        contactType: "privacy",
        email: COMPANY.emails.privacy,
        availableLanguage: ["English", "German"],
      },
    ],
    sameAs: [...COMPANY.sameAs],
    areaServed,
    knowsAbout: [...EXPERTISE],
    brand: BRANDS.map((b) => ({
      "@type": "Brand",
      "@id": `${BASE_URL}/en/vendors/#brand-${b.slug}`,
      name: b.name,
    })),
    subOrganization: {
      "@type": "Organization",
      name: "West Balkan Distribution Doo",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Augusta Cesarca 5",
        postalCode: "11050",
        addressLocality: "Belgrade",
        addressCountry: "RS",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tekpoint services",
      itemListElement: SERVICE_CATALOGUE.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          serviceType: s.serviceType,
          url: `${BASE_URL}/en${s.path}/`,
        },
      })),
    },
  };

  return <Script data={jsonLd} />;
}

/** Founder entity, referenced by Organization.founder. */
export function FounderJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: COMPANY.founder.name,
    jobTitle: COMPANY.founder.jobTitle,
    description: COMPANY.founder.description,
    worksFor: { "@id": ORG_ID },
    sameAs: [...COMPANY.founder.sameAs],
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* WebSite                                                            */
/* ------------------------------------------------------------------ */

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Tekpoint",
    url: BASE_URL,
    description: COMPANY.description,
    inLanguage: [...locales],
    publisher: { "@id": ORG_ID },
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                        */
/* ------------------------------------------------------------------ */

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <Script data={jsonLd} />;
}

/**
 * Convenience wrapper: builds an absolute-URL breadcrumb trail for a locale.
 * Pass the trail without the Home entry — it is prepended automatically.
 */
export function LocaleBreadcrumbJsonLd({
  locale,
  homeLabel = "Home",
  trail,
}: {
  locale: string;
  homeLabel?: string;
  trail: { name: string; path: string }[];
}) {
  const items = [
    { name: homeLabel, url: `${BASE_URL}/${locale}/` },
    ...trail.map((t) => ({
      name: t.name,
      url: `${BASE_URL}/${locale}${t.path}/`,
    })),
  ];
  return <BreadcrumbJsonLd items={items} />;
}

/* ------------------------------------------------------------------ */
/* WebPage variants                                                   */
/* ------------------------------------------------------------------ */

export function WebPageJsonLd({
  type = "WebPage",
  locale,
  path,
  name,
  description,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  locale: string;
  path: string;
  name: string;
  description: string;
}) {
  const url = `${BASE_URL}/${locale}${path}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": url,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* Brand portfolio (Brands page)                                      */
/* ------------------------------------------------------------------ */

export function BrandPortfolioJsonLd({
  locale,
  name,
  description,
}: {
  locale: string;
  name: string;
  description: string;
}) {
  const pageUrl = `${BASE_URL}/${locale}/vendors/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#brand-portfolio`,
    name,
    description,
    numberOfItems: BRANDS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: BRANDS.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Brand",
        "@id": `${BASE_URL}/en/vendors/#brand-${b.slug}`,
        name: b.name,
        description: b.summary,
        category: b.category,
        url: `${pageUrl}#brand-${b.slug}`,
        logo: `${BASE_URL}/images/${b.logo}`,
      },
    })),
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* Service pages                                                      */
/* ------------------------------------------------------------------ */

export function ServiceJsonLd({
  locale,
  path,
  name,
  description,
  serviceType,
}: {
  locale: string;
  path: string;
  name: string;
  description: string;
  serviceType?: string;
}) {
  const url = `${BASE_URL}/${locale}${path}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    ...(serviceType ? { serviceType } : {}),
    url,
    provider: { "@id": ORG_ID },
    areaServed,
    audience: {
      "@type": "BusinessAudience",
      name: "Technology manufacturers, retailers, e-tailers, marketplaces and telecom operators",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      availableLanguage: ["English", "German"],
    },
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* Blog                                                               */
/* ------------------------------------------------------------------ */

export function BlogJsonLd({
  locale,
  posts,
}: {
  locale: string;
  posts: { slug: string; title: string; date: string; excerpt: string }[];
}) {
  const url = `${BASE_URL}/${locale}/blog/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: "Tekpoint Blog",
    description:
      "Industry insights, regulatory updates and brand news from Tekpoint's European technology distribution business.",
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${BASE_URL}/en/blog/${p.slug}/#post`,
      headline: p.title,
      url: `${BASE_URL}/en/blog/${p.slug}/`,
      datePublished: p.date,
      description: p.excerpt,
    })),
  };
  return <Script data={jsonLd} />;
}

export function BlogPostingJsonLd({
  slug,
  title,
  date,
  excerpt,
  author,
  category,
  image,
  wordCount,
}: {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  wordCount?: number;
}) {
  const url = `${BASE_URL}/en/blog/${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: title,
    description: excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: date,
    dateModified: date,
    inLanguage: "en",
    articleSection: category,
    ...(wordCount ? { wordCount } : {}),
    ...(image ? { image: `${BASE_URL}${image}` } : {}),
    author:
      author === "Tekpoint Team"
        ? { "@id": ORG_ID }
        : { "@type": "Person", name: author, worksFor: { "@id": ORG_ID } },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": `${BASE_URL}/en/blog/#blog` },
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* Job postings                                                       */
/* ------------------------------------------------------------------ */

export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  employmentType,
  hoursPerWeek,
  streetAddress,
  postalCode,
  addressLocality,
  addressCountry,
  applyEmail,
  url,
}: {
  title: string;
  description: string;
  datePosted: string;
  employmentType: string;
  hoursPerWeek?: number;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
  applyEmail: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${url}#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    title,
    description,
    datePosted,
    employmentType,
    ...(hoursPerWeek ? { workHours: `${hoursPerWeek} hours per week` } : {}),
    hiringOrganization: { "@id": ORG_ID },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress,
        postalCode,
        addressLocality,
        addressCountry,
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Austria",
    },
    directApply: false,
    url,
    industry: "Consumer electronics distribution",
    applicationContact: {
      "@type": "ContactPoint",
      email: applyEmail,
      contactType: "human resources",
    },
  };
  return <Script data={jsonLd} />;
}

/* ------------------------------------------------------------------ */
/* People (management board)                                          */
/* ------------------------------------------------------------------ */

export function PeopleJsonLd({
  people,
}: {
  people: { name: string; jobTitle: string; image?: string; linkedin?: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": people.map((p) => ({
      "@type": "Person",
      "@id": personId(p.name),
      name: p.name,
      jobTitle: p.jobTitle,
      worksFor: { "@id": ORG_ID },
      ...(p.image ? { image: `${BASE_URL}${p.image}` } : {}),
      ...(p.linkedin ? { sameAs: [p.linkedin] } : {}),
    })),
  };
  return <Script data={jsonLd} />;
}

export { CHANNELS };
