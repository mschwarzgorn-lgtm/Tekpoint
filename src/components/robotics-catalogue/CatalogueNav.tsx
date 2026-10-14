"use client";
import {Link} from '@/i18n/navigation';
import {useCatalogue} from './CatalogueProvider';
import s from './catalogue.module.css';
export default function CatalogueNav({locale}:{locale:string}){
 const {items}=useCatalogue();const de=locale==='de';const count=Object.values(items).reduce((a,b)=>a+b,0);
 return <>{process.env.NEXT_PUBLIC_ROBOTICS_PREVIEW==='1'&&<div className={s.reviewNotice}>{de?'REVIEW-ENTWURF · Nicht auf tekpoint.com veröffentlicht · Angaben noch zu bestätigen':'REVIEW DRAFT · Not published on tekpoint.com · Claims pending confirmation'}</div>}<nav className={s.subnav} aria-label={de?'Robotik-Katalog':'Robotics catalogue'}><div className={s.subnavInner}><div className={s.navLinks}><Link href="/robotics/">{de?'Übersicht':'Overview'}</Link><Link href="/robotics/#how-it-works" title={de?'Zusammenarbeit':'How we work'}><span className={s.navFullLabel}>{de?'Zusammenarbeit':'How we work'}</span><span className={s.navShortLabel}>{de?'Ablauf':'Process'}</span></Link><Link href="/robotics/agibot/">{de?'Produkte':'Products'}</Link><Link href="/robotics/applications/">{de?'Anwendungen':'Applications'}</Link><Link href="/robotics/contact/">{de?'Kontakt':'Contact'}</Link></div><Link href="/robotics/enquiry/" className={s.selectionLink}>{de?'Anfrageliste':'Enquiry list'} <span aria-live="polite">({count})</span><span aria-hidden="true">↗</span></Link></div></nav></>;
}
