import {BuyerGuidanceLink} from "@/components/robotics-catalogue/BuyerGuidance";
import {getCatalogue} from '@/lib/robotics-localized';
import {tr} from '@/lib/robotics-ui';
import {roboticsMetadata} from '@/lib/robotics-seo';
import {CatalogueBreadcrumb} from '@/components/robotics-catalogue/CatalogueBreadcrumb';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){return roboticsMetadata((await params).locale,'catalogue');}
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import CatalogueGrid from '@/components/robotics-catalogue/CatalogueGrid';
import s from '@/components/robotics-catalogue/catalogue.module.css';
export default async function ProductsPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;const {products,categories}=await getCatalogue(locale);setRequestLocale(locale);const de=locale==='de';return <div className={s.page}><CatalogueBreadcrumb locale={locale} kind="catalogue"/><section className={s.hero}><div className={s.wrap}><span className={s.eyebrow}>{tr(locale,"AGIBOT / Portfolio")}</span><h1>{tr(locale,"AGIBOT robotics products.","AGIBOT Robotik-Produkte.")}</h1><p className={s.lead}>{tr(locale,"18 products with galleries, specifications and application examples. Select models for a combined enquiry.","18 Produkte mit Galerien, technischen Daten und Anwendungsbeispielen. Wählen Sie Modelle für eine gemeinsame Anfrage.")}</p></div></section><section className={s.section}><div className={s.wrap}><CatalogueGrid locale={locale} products={products.map(({id,cat,name,tagline})=>({id,cat,name,tagline}))} categories={categories}/><p className={s.draftFootnote}>{tr(locale,"Supplied package information. Technical data and availability remain to be confirmed.","Angaben aus dem Paket. Technische Daten und Verfügbarkeit sind noch zu bestätigen.")}</p><BuyerGuidanceLink locale={locale}/></div></section></div>;}
