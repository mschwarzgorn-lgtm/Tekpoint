import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { LocaleBreadcrumbJsonLd } from "@/components/JsonLd";
import EmailEnquiry from "@/components/EmailEnquiry";
import { getRoboticsCopy, roboticsLocales, roboticsLanguageTags } from "@/lib/robotics";
import styles from "./robotics.module.css";

const base = "https://tekpoint.com";
const imageRoot = "/images/robotics/";
const blogPath = "/blog/agibot-humanoid-robotics-ifa-2026/";
const productMedia = [
  { image: "a2-ultra-banner.webp", path: "A2_Ultra", width: 1000, height: 490 },
  { image: "x2-banner.webp", path: "X2", width: 1000, height: 541 },
  { image: "g2-banner.webp", path: "G2", width: 1000, height: 500 },
];
const applicationImages = ["application-customer-events.webp", "application-service-interaction.webp", "application-manufacturing-automation.webp", "application-research-development.webp"];
const serviceLinks = ["/services/distribution/", "/services/market-entry/", "/services/eu-compliance/", "/services/logistics/"];
const team = [
  { name: "Thomas Beimbauer", email: "T.Beimbauer@tekpoint.com", image: "portrait-thomas-beimbauer.webp", width: 600, height: 480 },
  { name: "Slava Rukin", email: "S.Rukin@tekpoint.com", image: "portrait-slava-rukin.webp", width: 450, height: 600 },
];
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = roboticsLanguageTags[locale] ?? locale;
  const c = getRoboticsCopy(locale);
  const url = `${base}/${locale}/robotics/`;
  const languages = Object.fromEntries(roboticsLocales.map(l => [roboticsLanguageTags[l] ?? l, `${base}/${l}/robotics/`]));
  languages["x-default"] = `${base}/en/robotics/`;
  return {
    title: c.metaTitle, description: c.metaDescription,
    alternates: { canonical: url, languages, ...(locale === "en" ? { types: { "text/markdown": `${base}/en/robotics.md` } } : {}) },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url, siteName: "Tekpoint", type: "website", locale: lang, images: [{ url: `${base}${imageRoot}hero-agibot-robots.webp`, width: 1600, height: 816, alt: c.heroAlt }] },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription, images: [`${base}${imageRoot}hero-agibot-robots.webp`] },
    robots: { index: true, follow: true },
  };
}
export default async function RoboticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = roboticsLanguageTags[locale] ?? locale;
  const c = getRoboticsCopy(locale);
  const url = `${base}/${locale}/robotics/`;
  const graph = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: c.metaTitle, description: c.metaDescription, inLanguage: lang, isPartOf: { "@id": `${base}/#website` }, mainEntity: { "@id": `${url}#service` } },
      { "@type": "Service", "@id": `${url}#service`, name: c.title, description: c.intro[1], serviceType: c.serviceType, provider: { "@id": `${base}/#organization` }, areaServed: { "@type": "Place", name: c.regionName }, url },
      ...c.products.map((p, i) => ({ "@type": "Product", "@id": `${url}#product-${i + 1}`, name: p.name, description: p.description, brand: { "@type": "Brand", name: "AGIBOT" }, manufacturer: { "@type": "Organization", name: "AGIBOT", url: "https://www.agibot.com/" }, image: `${base}${imageRoot}${productMedia[i].image}`, url: `${url}#robot-${i + 1}` })),
    ],
  };
  return <div className={styles.page} lang={lang}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    <LocaleBreadcrumbJsonLd locale={locale} trail={[{ name: c.navLabel, path: "/robotics" }]} />
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroTop}><span className={styles.eyebrow}>{c.eyebrow}</span><img src={`${imageRoot}agibot-logo-dark.png`} width={243} height={58} alt="AGIBOT" className={styles.logo} /></div>
        <div className={styles.heroGrid}>
          <div><h1>{c.title}</h1><p className={styles.lead}>{c.intro[1]}</p><div className={styles.actions}><a className={styles.primary} href="#robotics-contact">{c.heroAction} <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#robotics-range">{c.rangeAction} <span aria-hidden="true">↓</span></a></div></div>
          <Link href={blogPath} locale="en" className={styles.heroImageLink}><img src={`${imageRoot}hero-agibot-robots.webp`} alt={c.heroAlt} width={1600} height={816} fetchPriority="high" /><span><span>{c.newsLink}{locale !== "en" && <span className={styles.articleLanguage}> ({c.newsLanguage})</span>}</span> <span aria-hidden="true">↗</span></span></Link>
        </div>
        <div className={styles.heroBottom}><p>{c.intro[0]}</p><a href="https://www.agibot.com/" target="_blank" rel="noopener noreferrer">{c.manufacturerLink} <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
    <section className={styles.section} id="robotics-range"><div className={styles.wrap}>
      <div className={styles.sectionHeading}><span className={styles.eyebrow}>01 / AGIBOT</span><h2>{c.productsTitle}</h2><p>{c.productsIntro}</p></div>
      <div className={styles.products}>{c.products.map((p, i) => <article key={p.name} id={`robot-${i + 1}`} className={styles.product}>
        <div className={styles.productImage}><img src={`${imageRoot}${productMedia[i].image}`} alt={p.name} width={productMedia[i].width} height={productMedia[i].height} loading="lazy" /></div>
        <div className={styles.productBody}><h3>{p.name}</h3><p className={styles.tagline}>{p.tagline}</p><p>{p.description}</p><a href={`https://www.agibot.com/products/${productMedia[i].path}`} target="_blank" rel="noopener noreferrer">{c.learnMore} <span aria-hidden="true">↗</span></a></div>
      </article>)}</div><p className={styles.caption}>{c.manufacturerSpecs}</p>
    </div></section>
    <section className={`${styles.section} ${styles.muted}`}><div className={styles.wrap}>
      <div className={styles.sectionHeading}><span className={styles.eyebrow}>02 / {c.applicationsEyebrow}</span><h2>{c.applicationsTitle}</h2><p>{c.applicationsIntro}</p></div>
      <div className={styles.applications}>{c.applications.map((a, i) => <article key={a.title}><div className={styles.applicationImage}><img src={`${imageRoot}${applicationImages[i]}`} alt={a.title} width={600} height={420} loading="lazy" /></div><h3>{a.title}</h3><p>{a.description}</p></article>)}</div>
    </div></section>
    <section className={`${styles.section} ${styles.dark}`}><div className={styles.wrap}>
      <div className={styles.whyGrid}><div className={styles.sectionHeading}><span className={styles.eyebrow}>03 / Tekpoint</span><h2>{c.whyTitle}</h2><p>{c.whyIntro}</p></div><div className={styles.reasons}>{c.reasons.map((r, i) => <Link key={r.title} href={serviceLinks[i]}><span className={styles.stepNumber}>0{i + 1}</span><div><h3>{r.title} <span aria-hidden="true">↗</span></h3><p>{r.description}</p></div></Link>)}</div></div>
    </div></section>
    <section className={styles.section}><div className={styles.wrap}>
      <div className={styles.sectionHeading}><span className={styles.eyebrow}>04 / {c.stepsEyebrow}</span><h2>{c.stepsTitle}</h2><p>{c.stepsIntro}</p></div>
      <ol className={styles.steps}>{c.steps.map((step, i) => <li key={step.title}><span className={styles.stepNumber}>0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
    </div></section>
    <section className={`${styles.section} ${styles.muted}`} id="robotics-contact"><div className={styles.wrap}>
      <div className={styles.contactGrid}><div><span className={styles.eyebrow}>{c.contactEyebrow}</span><h2>{c.contactTitle}</h2><p className={styles.contactIntro}>{c.contactIntro}</p><ul className={styles.topics}>{c.contactTopics.map(x => <li key={x}><span aria-hidden="true">↗</span> {x}</li>)}</ul><a className={styles.email} href="mailto:robotics@tekpoint.com">robotics@tekpoint.com <span aria-hidden="true">↗</span></a><h3 className={styles.teamHeading}>{c.teamTitle}</h3><div className={styles.team}>{team.map(person => <div key={person.name}><img src={`${imageRoot}${person.image}`} alt={person.name} width={person.width} height={person.height} loading="lazy" /><div><h4>{person.name}</h4><a href={`mailto:${person.email}`}>{person.email}</a></div></div>)}</div></div>
      <div className={styles.formCard}><h3>{c.emailTitle}</h3><p>{c.emailIntro}</p><EmailEnquiry kind="robotics" locale={locale} buttonLabel={c.emailButton} /></div></div>
    </div></section>
  </div>;
}
