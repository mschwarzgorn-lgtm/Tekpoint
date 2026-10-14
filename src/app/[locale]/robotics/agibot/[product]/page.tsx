import sourceNotes from '@/lib/robotics-source-notes.json';
import type {Metadata} from 'next';
import {productMetadata,productGraph} from '@/lib/robotics-seo';
import {CatalogueBreadcrumb} from '@/components/robotics-catalogue/CatalogueBreadcrumb';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {products,productIds,categories} from '@/lib/robotics-catalogue';
import CatalogueNav from '@/components/robotics-catalogue/CatalogueNav';
import ProductGallery from '@/components/robotics-catalogue/ProductGallery';
import AddToEnquiry from '@/components/robotics-catalogue/AddToEnquiry';
import SectionJump from '@/components/robotics-catalogue/SectionJump';
import s from '@/components/robotics-catalogue/catalogue.module.css';
export function generateStaticParams(){return productIds.map(product=>({product}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{locale:string;product:string}>}):Promise<Metadata>{const {locale,product}=await params;const p=products.find(p=>p.id===product);if(!p||!['en','de'].includes(locale))notFound();return productMetadata(locale,p);}
export default async function ProductPage({params}:{params:Promise<{locale:string;product:string}>}){
 const {locale,product}=await params;const p=products.find(p=>p.id===product);if(!p||!productIds.includes(product)||!['en','de'].includes(locale))notFound();setRequestLocale(locale);const de=locale==='de';const lang=de?'de':'en';const related=products.filter(q=>q.id!==p.id&&q.cat===p.cat).slice(0,3);
 return <div className={s.page}><CatalogueNav locale={locale}/><CatalogueBreadcrumb locale={locale} kind="product" product={p}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(productGraph(locale,p)).replace(/</g,"\\u003c")}}/><div className={s.wrap}>
 <Link className={s.backLink} href="/robotics/agibot/">← {de?'Alle Produkte':'All products'}</Link>
 <section className={s.productIntro}><div><span className={s.eyebrow}>{categories.find(c=>c.id===p.cat)?.label[lang]}</span><h1>{p.name}</h1><p className={s.tagline}>{p.tagline[lang]}</p></div><div className={s.productAction}><AddToEnquiry id={p.id} locale={locale}/><p className={s.caption}>{de?'Unverbindlich · kein Checkout':'Non-binding · no checkout'}</p></div></section>
 <nav className={s.productJumps} aria-label={de?'Auf dieser Produktseite':'On this product page'}><SectionJump target="gallery">{de?'Galerie':'Gallery'}</SectionJump><SectionJump target="highlights">Highlights</SectionJump><SectionJump target="specifications">{de?'Technische Daten':'Specifications'}</SectionJump><SectionJump target="applications">{de?'Anwendungen':'Applications'}</SectionJump></nav>
 <p className={s.claimNotice}>{de?'Hersteller-/Lieferantenreferenzen, nicht unabhängig verifiziert. Konfiguration, EU-Konformität, sichere Integration und regionale Verfügbarkeit werden vor Angebotserstellung geprüft.':'Manufacturer/supplier reference data, not independently verified. Configuration, EU conformity, safe integration and regional availability require confirmation before quotation.'}</p>
 <section className={s.productTop}><div id="gallery" className={s.anchorSection} tabIndex={-1}><ProductGallery id={p.id} name={p.name} count={p.gal} locale={locale}/></div><div className={s.productCopy}>
 <h2 className={s.quickTitle}>{de?'Auf einen Blick':'At a glance'}</h2><dl className={s.keySpecs}>{p.specs.slice(0,3).map((row,i)=><div key={i}><dt>{row[de?1:0]}</dt><dd>{row[de?3:2]}</dd></div>)}</dl>
 <p>{p.desc[lang]}</p><dl className={s.priceDetails}><div><dt>{de?'Preis':'Pricing'}</dt><dd>{de?'Individuelles Angebot auf Anfrage':'Individual quotation on request'}</dd></div><div><dt>{de?'Verfügbarkeit':'Availability'}</dt><dd>{de?'Projektbezogene Bestätigung erforderlich':'Subject to project-specific confirmation'}</dd></div></dl>
 <a className={s.underlined} href={p.link} target="_blank" rel="noopener noreferrer">{de?'Herstellerreferenz':'Manufacturer reference'} ↗</a></div></section>
 <section className={s.detailSection} id="highlights" tabIndex={-1}><h2>Highlights</h2><ul className={s.highlights}>{p.highlights[lang].map((text,i)=><li key={i}>{text}</li>)}</ul></section>
 <section className={s.specs} id="specifications" tabIndex={-1}><h2>{de?'Technische Daten':'Specifications'}</h2>
 {sourceNotes[p.id as keyof typeof sourceNotes]&&<p className={s.specNotice}><strong>{de?'Konfigurationshinweis: ':'Configuration note: '}</strong>{sourceNotes[p.id as keyof typeof sourceNotes][lang]}</p>}
 <table><caption>{de?'Referenzspezifikationen – Abweichungen und offene Werte sind gekennzeichnet':'Reference specifications — qualifications and pending values are identified'}</caption><tbody>{p.specs.map((row,i)=><tr key={i}><th scope="row">{row[de?1:0]}</th><td>{row[de?3:2]}</td></tr>)}</tbody></table>
 <p className={s.caption}>{de?'Genannte Quelle: ':'Cited source: '}{p.src[lang]}</p></section>
 <section className={s.detailSection} id="applications" tabIndex={-1}><h2>{de?'Anwendungen':'Applications'}</h2><ul className={s.applicationTags}>{p.apps[lang].map((text,i)=><li key={i}>{text}</li>)}</ul><Link className={s.underlined} href="/robotics/applications/">{de?'Alle Anwendungsbereiche ansehen':'Explore all application areas'} ↗</Link></section>
 {!!related.length&&<section className={s.detailSection}><h2>{de?'Weitere Produkte in dieser Kategorie':'More products in this category'}</h2><div className={s.grid}>{related.map(q=><article className={s.card} key={q.id}><Link className={s.cardMedia} href={`/robotics/agibot/${q.id}/`} aria-label={q.name}><img src={`/images/robotics-catalogue/products/${q.id}.webp`} alt={q.name} width={600} height={480} loading="lazy"/></Link><div className={s.cardBody}><h3>{q.name}</h3><Link className={s.cardLink} href={`/robotics/agibot/${q.id}/`}>{de?'Details ansehen':'View details'} ↗</Link></div></article>)}</div></section>}
 <div className={s.section}><Link className={s.underlined} href="/robotics/agibot/">← {de?'Zurück zum Katalog':'Back to the catalogue'}</Link></div></div></div>;
}
