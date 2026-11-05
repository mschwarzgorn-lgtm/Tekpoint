"use client";
import {useRoboticsTranslator} from '@/components/robotics-navigation/RoboticsTranslations';
import {Link} from '@/i18n/navigation';
import {useCatalogue} from './CatalogueProvider';
import s from './catalogue.module.css';
export default function CatalogueNav({locale}:{locale:string}){const tr=useRoboticsTranslator();
 const {items}=useCatalogue();const de=locale==='de';const count=Object.values(items).reduce((a,b)=>a+b,0);
 return <>{process.env.NEXT_PUBLIC_ROBOTICS_PREVIEW==='1'&&<div className={s.reviewNotice}>{tr(locale,"REVIEW DRAFT · Not published on tekpoint.com · Claims pending confirmation","REVIEW-ENTWURF · Nicht auf tekpoint.com veröffentlicht · Angaben noch zu bestätigen")}</div>}<nav className={s.subnav} aria-label={tr(locale,"Robotics catalogue","Robotik-Katalog")}><div className={s.subnavInner}><div className={s.navLinks}><Link href="/robotics/">{tr(locale,"Overview","Übersicht")}</Link><Link href="/robotics/#how-it-works" title={tr(locale,"How we work","Zusammenarbeit")}><span className={s.navFullLabel}>{tr(locale,"How we work","Zusammenarbeit")}</span><span className={s.navShortLabel}>{tr(locale,"Process","Ablauf")}</span></Link><Link href="/robotics/agibot/">{tr(locale,"Products","Produkte")}</Link><Link href="/robotics/applications/">{tr(locale,"Applications","Anwendungen")}</Link><Link href="/robotics/contact/">{tr(locale,"Contact","Kontakt")}</Link></div><Link href="/robotics/enquiry/" className={s.selectionLink}>{tr(locale,"Enquiry list","Anfrageliste")} <span aria-live="polite">({count})</span><span aria-hidden="true">↗</span></Link></div></nav></>;
}
