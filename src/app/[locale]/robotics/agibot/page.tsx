import {roboticsMetadata} from '@/lib/robotics-seo';
import {CatalogueBreadcrumb} from '@/components/robotics-catalogue/CatalogueBreadcrumb';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){return roboticsMetadata((await params).locale,'catalogue');}
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import CatalogueGrid from '@/components/robotics-catalogue/CatalogueGrid';
import s from '@/components/robotics-catalogue/catalogue.module.css';
export default async function ProductsPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','de'].includes(locale))notFound();setRequestLocale(locale);const de=locale==='de';return <div className={s.page}><CatalogueBreadcrumb locale={locale} kind="catalogue"/><section className={s.hero}><div className={s.wrap}><span className={s.eyebrow}>AGIBOT / Portfolio</span><h1>{de?'AGIBOT Robotik-Produkte.':'AGIBOT robotics products.'}</h1><p className={s.lead}>{de?'18 Produkte mit Galerien, technischen Daten und Anwendungsbeispielen. Wählen Sie Modelle für eine gemeinsame Anfrage.':'18 products with galleries, specifications and application examples. Select models for a combined enquiry.'}</p></div></section><section className={s.section}><div className={s.wrap}><CatalogueGrid locale={locale}/><p className={s.draftFootnote}>{de?'Angaben aus dem Paket. Technische Daten und Verfügbarkeit sind noch zu bestätigen.':'Supplied package information. Technical data and availability remain to be confirmed.'}</p></div></section></div>;}
