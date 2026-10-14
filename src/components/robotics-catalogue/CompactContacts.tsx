import {Link} from '@/i18n/navigation';
import {company,overview} from '@/lib/robotics-catalogue';
import s from './catalogue.module.css';
export default function CompactContacts({locale}:{locale:string}){
 const de=locale==='de';const c=overview[de?'de':'en'];
 return <section className={s.contactSection} id="contacts" aria-labelledby="contacts-title">
  <div className={s.sectionHeading}><div><span className={s.eyebrow}>Tekpoint / Robotics</span><h2 id="contacts-title">{c.contact_title}</h2></div></div>
  <div className={s.contactSplit}><div className={s.contactPanel}><h3>{de?'Ihr Projekt beginnt mit einem Gespräch.':'Your project starts with a conversation.'}</h3><p>{de?'Fragen zu Modellen, Konfigurationen oder Zusammenarbeit? Schreiben Sie unserem Robotics-Team.':'Questions about models, configurations or working together? Get in touch with our Robotics team.'}</p><a className={s.primary} href={`mailto:${company.robotics}`}>{company.robotics} ↗</a><p className={s.caption}>{de?'Öffnet Ihre E-Mail-App. Kein Formular, keine automatische Übermittlung.':'Opens your email app. No form and no automatic submission.'}</p><Link className={s.underlined} href="/robotics/enquiry/">{de?'Ausgewählte Produkte anfragen':'Enquire about selected products'} ↗</Link></div>
  <div className={s.contactRows}>{company.team.slice(0,2).map((person,i)=><article className={s.contactRow} key={person.name}><img src={person.image} alt={person.name} width={72} height={96} loading="lazy"/><div><h3>{person.name}</h3><a className={s.underlined} href={`mailto:${person.email}`}>{person.email}</a></div></article>)}</div></div>
 </section>;
}
