export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tekpoint GmbH",
    url: "https://tekpoint.com",
    logo: "https://tekpoint.com/images/tekpoint-logo-new-web.png",
    description: "Leading B2B technology distributor covering Western, Central & Eastern Europe.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Leopold Ungar Platz 2/4.OG",
      addressLocality: "Vienna",
      postalCode: "1190",
      addressCountry: "AT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@tekpoint.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/tekpoint",
      "https://www.xing.com/pages/tekpointgmbh",
      "https://www.youtube.com/@tekpointgmbh8118",
    ],
    foundingDate: "2017",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 120 },
    areaServed: {
      "@type": "Place",
      name: "Western, Central & Eastern Europe",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tekpoint",
    url: "https://tekpoint.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
