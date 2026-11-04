"use client";
import {useRoboticsTranslator} from '@/components/robotics-navigation/RoboticsTranslations';
import {useEffect,useRef,useState,type KeyboardEvent} from 'react';
import {Link,usePathname} from '@/i18n/navigation';
import {useCatalogue} from '@/components/robotics-catalogue/CatalogueProvider';
import s from './navigation.module.css';

export default function RoboticsNav({locale}:{locale:string}){const tr=useRoboticsTranslator();
 const de=locale==='de';const pathname=usePathname().replace(/\/$/,'');const {items}=useCatalogue();
 const count=Object.values(items).reduce((a,b)=>a+b,0);const [open,setOpen]=useState(false);const [hash,setHash]=useState('');
 const trigger=useRef<HTMLButtonElement>(null);const container=useRef<HTMLDivElement>(null);const panel=useRef<HTMLDivElement>(null);const focusFirst=useRef(false);
 const extra=[
  {id:'applications',href:'/robotics/#applications',label:tr(locale,"Applications","Anwendungen")},
  {id:'how-it-works',href:'/robotics/#how-it-works',label:tr(locale,"How we work","Zusammenarbeit")},
  {id:'why-tekpoint',href:'/robotics/#why-tekpoint',label:tr(locale,"Why Tekpoint","Warum Tekpoint")},
  {id:'news',href:'/robotics/#news',label:tr(locale,"News","Aktuelles")},
  {id:'contacts',href:'/robotics/#contacts',label:tr(locale,"Contacts","Kontakt")},
 ];
 const isRoot=pathname==='/robotics';
 const active=pathname.startsWith('/robotics/agibot')?'products':pathname.startsWith('/robotics/enquiry')?'enquiry':pathname.startsWith('/robotics/applications')?'applications':pathname.startsWith('/robotics/contact')?'contacts':isRoot&&hash?hash.replace('#',''):'overview';
 useEffect(()=>{setOpen(false);setHash(window.location.hash);},[pathname]);
 useEffect(()=>{
  const change=()=>{setHash(window.location.hash);setOpen(false);};
  // Next.js can change a same-page anchor without a native hashchange event.
  // Keep the local highlight in sync when the shared website menu is used too.
  const followLink=(event:MouseEvent)=>{if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;const link=(event.target as Element)?.closest<HTMLAnchorElement>('a[href]');if(!link||link.target==='_blank')return;const url=new URL(link.href,window.location.href);if(url.origin===window.location.origin&&url.pathname.replace(/\/$/,'').endsWith('/robotics')){setHash(url.hash);setOpen(false);}};
  window.addEventListener('hashchange',change);window.addEventListener('popstate',change);document.addEventListener('click',followLink);
  return()=>{window.removeEventListener('hashchange',change);window.removeEventListener('popstate',change);document.removeEventListener('click',followLink);};
 },[]);
 useEffect(()=>{if(open&&focusFirst.current){panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();focusFirst.current=false;}},[open]);
 useEffect(()=>{if(!open)return;const close=(e:PointerEvent)=>{if(!container.current?.contains(e.target as Node))setOpen(false);};const escape=(e:globalThis.KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus();}};document.addEventListener('pointerdown',close);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape);};},[open]);
 function menuKey(e:KeyboardEvent<HTMLDivElement>){if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;const links=Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a')||[]);if(!links.length)return;e.preventDefault();const i=links.indexOf(document.activeElement as HTMLAnchorElement);const next=e.key==='Home'?0:e.key==='End'?links.length-1:(i+(e.key==='ArrowUp'?-1:1)+links.length)%links.length;links[next].focus();}
 function closeFor(href:string){setOpen(false);setHash(href.includes('#')?'#'+href.split('#')[1]:'');}
 
 return <nav className={s.nav} aria-label={tr(locale,"Robotics navigation","Robotik-Navigation")} data-robotics-nav>
  <div className={s.inner}>
   <Link className={s.link} href="/robotics/" aria-current={active==='overview'?'page':undefined} onClick={()=>closeFor('/robotics/')}>{tr(locale,"Overview","Übersicht")}</Link>
   <Link className={s.link} href="/robotics/agibot/" aria-current={active==='products'?'location':undefined} onClick={()=>closeFor('/robotics/agibot/')}>{tr(locale,"Products","Produkte")}</Link>
   <div className={s.desktopLinks}>{extra.map(item=><Link className={s.link} key={item.id} href={item.href} aria-current={active===item.id?'location':undefined} onClick={()=>closeFor(item.href)}>{item.label}</Link>)}</div>
   <div className={s.more} ref={container} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}}>
    <button type="button" ref={trigger} className={`${s.moreButton} ${extra.some(x=>x.id===active)?s.activeMore:''}`} aria-expanded={open} aria-controls="robotics-more-links" onClick={()=>setOpen(x=>!x)} onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();focusFirst.current=true;if(open){panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();focusFirst.current=false;}else setOpen(true);}}}><span>{tr(locale,"More","Mehr")}</span><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></button>
    {open&&<div id="robotics-more-links" className={s.panel} ref={panel} onKeyDown={menuKey}><p>{tr(locale,"Explore Robotics","Robotik entdecken")}</p>{extra.map(item=><Link key={item.id} href={item.href} aria-current={active===item.id?'location':undefined} onClick={()=>closeFor(item.href)}>{item.label}<span aria-hidden="true">↗</span></Link>)}</div>}
   </div>
   <Link className={s.enquiry} href="/robotics/enquiry/" aria-label={`${tr(locale,"Enquiry list","Anfrageliste")} (${count})`} aria-current={active==='enquiry'?'page':undefined} onClick={()=>closeFor('/robotics/enquiry/')}><span className={s.full}>{tr(locale,"Enquiry list","Anfrageliste")}</span><span className={s.short}>{tr(locale,"Enquiry","Anfrage")}</span><span aria-live="polite">({count})</span><span className={s.arrow} aria-hidden="true">↗</span></Link>
  </div>
 </nav>;
}
