import {BuyerGuidanceLink} from "@/components/robotics-catalogue/BuyerGuidance";
import {tr} from '@/lib/robotics-ui';
import {getCatalogue} from '@/lib/robotics-localized';
import type {Metadata} from 'next';
import {productMetadata,productGraph} from '@/lib/robotics-seo';
import {CatalogueBreadcrumb} from '@/components/robotics-catalogue/CatalogueBreadcrumb';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {productIds} from '@/lib/robotics-catalogue';
import ProductGallery from '@/components/robotics-catalogue/ProductGallery';
import AddToEnquiry from '@/components/robotics-catalogue/AddToEnquiry';
import SectionJump from '@/components/robotics-catalogue/SectionJump';
import s from '@/components/robotics-catalogue/catalogue.module.css';
export function generateStaticParams(){return productIds.map(product=>({product}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{locale:string;product:string}>}):Promise<Metadata>{const {locale,product}=await params;const {products,categories,sourceNotes}=await getCatalogue(locale);const p=products.find(p=>p.id===product);if(!p)notFound();return productMetadata(locale,p,categories);}
export default async function ProductPage({params}:{params:Promise<{locale:string;product:string}>}){
 const {locale,product}=await params;const {products,categories,sourceNotes}=await getCatalogue(locale);const p=products.find(p=>p.id===product);if(!p||!productIds.includes(product))notFound();setRequestLocale(locale);const de=locale==='de';const lang=de?'de':'en';const related=products.filter(q=>q.id!==p.id&&q.cat===p.cat).slice(0,3);
 return <div className={s.page}><CatalogueBreadcrumb locale={locale} kind="product" product={p}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(productGraph(locale,p,categories)).replace(/</g,"\\u003c")}}/><div className={s.wrap}>
 <Link className={s.backLink} href="/robotics/agibot/">← {tr(locale,"All products","Alle Produkte")}</Link>
 <section className={s.productIntro}><div><span className={s.eyebrow}>{categories.find(c=>c.id===p.cat)?.label[lang]}</span><h1>{p.name}</h1><p className={s.tagline}>{p.tagline[lang]}</p></div><div className={s.productAction}><AddToEnquiry id={p.id} locale={locale}/><p className={s.caption}>{tr(locale,"Non-binding · no checkout","Unverbindlich · kein Checkout")}</p></div></section>
 <nav className={s.productJumps} aria-label={tr(locale,"On this product page","Auf dieser Produktseite")}><SectionJump target="gallery">{tr(locale,"Gallery","Galerie")}</SectionJump><SectionJump target="highlights">{tr(locale,"Highlights")}</SectionJump><SectionJump target="specifications">{tr(locale,"Specifications","Technische Daten")}</SectionJump><SectionJump target="applications">{tr(locale,"Applications","Anwendungen")}</SectionJump></nav>
 <p className={s.claimNotice}>{tr(locale,"Manufacturer/supplier reference data, not independently verified. Configuration, EU conformity, safe integration and regional availability require confirmation before quotation.","Hersteller-/Lieferantenreferenzen, nicht unabhängig verifiziert. Konfiguration, EU-Konformität, sichere Integration und regionale Verfügbarkeit werden vor Angebotserstellung geprüft.")}</p>
 <section className={s.productTop}><div id="gallery" className={s.anchorSection} tabIndex={-1}><ProductGallery id={p.id} name={p.name} count={p.gal} locale={locale}/></div><div className={s.productCopy}>
 <h2 className={s.quickTitle}>{tr(locale,"At a glance","Auf einen Blick")}</h2><dl className={s.keySpecs}>{p.specs.slice(0,3).map((row,i)=><div key={i}><dt>{row[de?1:0]}</dt><dd>{row[de?3:2]}</dd></div>)}</dl>
 <p>{p.desc[lang]}</p><dl className={s.priceDetails}><div><dt>{tr(locale,"Pricing","Preis")}</dt><dd>{tr(locale,"Individual quotation on request","Individuelles Angebot auf Anfrage")}</dd></div><div><dt>{tr(locale,"Availability","Verfügbarkeit")}</dt><dd>{tr(locale,"Subject to project-specific confirmation","Projektbezogene Bestätigung erforderlich")}</dd></div></dl>
 <a className={s.underlined} href={p.link} target="_blank" rel="noopener noreferrer">{tr(locale,"Manufacturer reference","Herstellerreferenz")} ↗</a></div></section>
 <section className={s.detailSection} id="highlights" tabIndex={-1}><h2>{tr(locale,"Highlights")}</h2><ul className={s.highlights}>{p.highlights[lang].map((text,i)=><li key={i}>{text}</li>)}</ul></section>
 <section className={s.specs} id="specifications" tabIndex={-1}><h2>{tr(locale,"Specifications","Technische Daten")}</h2>
 {sourceNotes[p.id as keyof typeof sourceNotes]&&<p className={s.specNotice}><strong>{tr(locale,"Configuration note: ","Konfigurationshinweis: ")}</strong>{sourceNotes[p.id as keyof typeof sourceNotes][lang]}</p>}
 <table><caption>{tr(locale,"Reference specifications — qualifications and pending values are identified","Referenzspezifikationen – Abweichungen und offene Werte sind gekennzeichnet")}</caption><tbody>{p.specs.map((row,i)=><tr key={i}><th scope="row">{row[de?1:0]}</th><td>{row[de?3:2]}</td></tr>)}</tbody></table>
 <p className={s.caption}>{tr(locale,"Cited source: ","Genannte Quelle: ")}{p.src[lang]}</p></section>
 <section className={s.detailSection} id="applications" tabIndex={-1}><h2>{tr(locale,"Applications","Anwendungen")}</h2><ul className={s.applicationTags}>{p.apps[lang].map((text,i)=><li key={i}>{text}</li>)}</ul><Link className={s.underlined} href="/robotics/applications/">{tr(locale,"Explore all application areas","Alle Anwendungsbereiche ansehen")} ↗</Link></section>
 {!!related.length&&<section className={s.detailSection}><h2>{tr(locale,"More products in this category","Weitere Produkte in dieser Kategorie")}</h2><div className={s.grid}>{related.map(q=><article className={s.card} key={q.id}><Link className={s.cardMedia} href={`/robotics/agibot/${q.id}/`} aria-label={q.name}><img src={`/images/robotics-catalogue/products/${q.id}.webp`} alt={q.name} width={600} height={480} loading="lazy"/></Link><div className={s.cardBody}><h3>{q.name}</h3><Link className={s.cardLink} href={`/robotics/agibot/${q.id}/`}>{tr(locale,"View details","Details ansehen")} ↗</Link></div></article>)}</div></section>}
 <BuyerGuidanceLink locale={locale}/>
 <div className={s.section}><Link className={s.underlined} href="/robotics/agibot/">← {tr(locale,"Back to the catalogue","Zurück zum Katalog")}</Link></div></div></div>;
}
