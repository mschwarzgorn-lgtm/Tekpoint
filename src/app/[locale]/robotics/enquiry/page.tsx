import {roboticsMetadata} from '@/lib/robotics-seo';
import {CatalogueBreadcrumb} from '@/components/robotics-catalogue/CatalogueBreadcrumb';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){return roboticsMetadata((await params).locale,'enquiry');}
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import EnquiryList from '@/components/robotics-catalogue/EnquiryList';
import s from '@/components/robotics-catalogue/catalogue.module.css';
export default async function EnquiryPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','de'].includes(locale))notFound();setRequestLocale(locale);const de=locale==='de';return <div className={s.page}><CatalogueBreadcrumb locale={locale} kind="enquiry"/><section className={s.hero}><div className={s.wrap}><span className={s.eyebrow}>Robotics / AGIBOT</span><h1>{de?'Ihre Anfrageliste.':'Your enquiry list.'}</h1><p className={s.lead}>{de?'Vom passenden Produkt zum gemeinsamen Gespräch.':'From the right product to a conversation with our team.'}</p></div></section><section className={s.section}><div className={s.wrap}><EnquiryList locale={locale}/></div></section></div>;}
