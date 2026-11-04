import {Link} from '@/i18n/navigation';
import {tr} from '@/lib/robotics-ui';
import {getBuyerGuidance} from '@/lib/robotics-buyer-guidance';
import s from './buyer-guidance.module.css';

/** Server-rendered buyer answers. No rich-result claims or invented commercial data. */
export default async function BuyerGuidance({locale}:{locale:string}) {
  const copy=await getBuyerGuidance(locale);
  return <section id="project-questions" className={s.section} aria-labelledby="project-questions-title">
    <div className={s.wrap}>
      <h2 id="project-questions-title">{copy.heading}</h2>
      <p className={s.intro}>{copy.intro}</p>
      <div className={s.grid}>{copy.items.map(item=><article key={item.q} className={s.answer}>
        <h3>{item.q}</h3><p>{item.a}</p>
      </article>)}</div>
      <Link className={s.link} href="/robotics/enquiry/">{tr(locale,'Enquire about selected products','Ausgewählte Produkte anfragen')} <span aria-hidden="true">↗</span></Link>
    </div>
  </section>;
}

export async function BuyerGuidanceLink({locale}:{locale:string}) {
  const copy=await getBuyerGuidance(locale);
  return <p className={s.quickLink}><Link className={s.link} href="/robotics/#project-questions">{copy.heading} <span aria-hidden="true">↗</span></Link></p>;
}
