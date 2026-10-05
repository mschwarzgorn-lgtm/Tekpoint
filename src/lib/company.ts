/**
 * Single source of truth for verifiable company facts.
 *
 * Used by JSON-LD structured data, llms.txt and the sitemap so that every
 * machine-readable surface states exactly the same thing. Human-facing copy
 * lives in messages/*.json — this file holds only facts that must never
 * contradict each other across surfaces.
 */

export const BASE_URL = "https://tekpoint.com";

export const COMPANY = {
  name: "Tekpoint",
  legalName: "Tekpoint GmbH",
  alternateName: "Tekpoint Group",
  description:
    "Tekpoint GmbH is a B2B technology distributor headquartered in Vienna, Austria. It distributes consumer electronics, smart home, mobility and wearable brands to retailers, e-tailers, marketplaces and telecom operators across Western, Central and Eastern Europe.",
  // "We started in 2009 with a small team and a clear idea" — about page (about_30).
  foundingDate: "2009",
  foundingLocation: "Vienna, Austria",
  // Site states "120+ employees" — emitted as a QuantitativeValue minimum.
  employees: 120,
  // Site states "23 countries"; the distribution page names 22 of them
  // (see MARKET_GROUPS, mirrored from seo3_cov1/2/3_text).
  marketCount: 23,
  vatID: "ATU65412145",
  commercialRegisterNumber: "335307z",
  taxID: "214/1799",
  jurisdiction: "Vienna, Austria",
  telephone: "+43 1 3616670",
  faxNumber: "+43 1 3616670 902",
  email: "info@tekpoint.com",
  emails: {
    general: "info@tekpoint.com",
    dach: "dach@tekpoint.com",
    jobs: "jobs@tekpoint.com",
    privacy: "dsgvo@tekpoint.com",
    whistleblowing: "whistleblower-channel@tekpoint.com",
  },
  headquarters: {
    streetAddress: "Leopold Ungar Platz 2/4.OG",
    postalCode: "1190",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  sameAs: [
    "https://www.linkedin.com/company/tekpoint",
    "https://www.xing.com/pages/tekpointgmbh",
    "https://www.youtube.com/@tekpointgmbh8118",
  ],
  founder: {
    name: "Mark Schwarzgorn",
    jobTitle: "Founder & CEO",
    description: "CEO Tekpoint Group, Owner",
    sameAs: [
      "https://www.linkedin.com/in/markschwarzgorn",
      "https://x.com/MarkSchwarzgorn",
      "https://www.markschwarzgorn.com",
    ],
  },
} as const;

/** Physical locations Tekpoint operates from. */
export const OFFICES = [
  {
    name: "Tekpoint GmbH — Headquarters",
    streetAddress: "Leopold Ungar Platz 2/4.OG",
    postalCode: "1190",
    addressLocality: "Vienna",
    addressCountry: "AT",
    telephone: "+43 1 3616670",
    email: "dach@tekpoint.com",
  },
  {
    name: "Tekpoint GmbH — Germany",
    streetAddress: "Am Seestern 8",
    postalCode: "40547",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
    telephone: "+49 211 36183789-0",
    email: "dach@tekpoint.com",
  },
  {
    name: "Tekpoint GmbH — Logistics Centre",
    streetAddress: "Airportstraße 3a, Unit 4",
    postalCode: "2401",
    addressLocality: "Fischamend",
    addressCountry: "AT",
    telephone: "+43 1 3616670",
    email: "info@tekpoint.com",
  },
  {
    name: "West Balkan Distribution Doo",
    streetAddress: "Augusta Cesarca 5",
    postalCode: "11050",
    addressLocality: "Belgrade",
    addressCountry: "RS",
    telephone: null,
    email: "info@tekpoint.com",
  },
] as const;

/**
 * European markets Tekpoint distributes into, grouped as the site itself
 * describes them. Every country here is named in the site's own copy.
 */
export const MARKET_GROUPS = [
  {
    region: "Western Europe",
    countries: [
      { name: "Germany", code: "DE" },
      { name: "Austria", code: "AT" },
      { name: "Switzerland", code: "CH" },
      { name: "Netherlands", code: "NL" },
      { name: "Belgium", code: "BE" },
      { name: "France", code: "FR" },
    ],
  },
  {
    region: "Central and Eastern Europe",
    countries: [
      { name: "Poland", code: "PL" },
      { name: "Czech Republic", code: "CZ" },
      { name: "Slovakia", code: "SK" },
      { name: "Hungary", code: "HU" },
      { name: "Slovenia", code: "SI" },
      { name: "Croatia", code: "HR" },
      { name: "Serbia", code: "RS" },
      { name: "Romania", code: "RO" },
      { name: "Bulgaria", code: "BG" },
    ],
  },
  {
    region: "Scandinavia and Baltics",
    countries: [
      { name: "Denmark", code: "DK" },
      { name: "Sweden", code: "SE" },
      { name: "Norway", code: "NO" },
      { name: "Finland", code: "FI" },
      { name: "Estonia", code: "EE" },
      { name: "Latvia", code: "LV" },
      { name: "Lithuania", code: "LT" },
    ],
  },
] as const;

export interface Market {
  name: string;
  code: string;
}

export const MARKETS: Market[] = MARKET_GROUPS.flatMap(
  (g) => g.countries as readonly Market[]
);

/** Product areas Tekpoint distributes — used for Organization.knowsAbout. */
export const EXPERTISE = [
  "B2B technology distribution",
  "Consumer electronics distribution",
  "Smartphone and tablet distribution",
  "Smart home and IoT device distribution",
  "Wearables and smartwatch distribution",
  "Robot vacuum and floor care distribution",
  "Robotic lawn mower distribution",
  "Micro-mobility and e-scooter distribution",
  "Charging and power accessory distribution",
  "Smart glasses and wearable audio distribution",
  "European market entry for technology brands",
  "EU product compliance (CE, WEEE, GPSR, REACH, battery and packaging regulations)",
  "Retail and e-commerce fulfillment",
  "EDI and partner connectivity integration",
  "Trade and retail marketing in Europe",
] as const;

/** Channel types Tekpoint sells through. */
export const CHANNELS = [
  "Consumer electronics retail chains",
  "E-commerce and pure online players",
  "Marketplaces and platform-based sellers",
  "Telecom operators and carriers",
  "Regional and specialty retail partners",
] as const;
