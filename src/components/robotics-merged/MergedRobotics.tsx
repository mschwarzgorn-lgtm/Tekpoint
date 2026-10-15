import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {LocaleBreadcrumbJsonLd} from '@/components/JsonLd';
import EmailEnquiry from '@/components/EmailEnquiry';
import {getRoboticsCopy} from '@/lib/robotics';
import {products,categories,applications,company} from '@/lib/robotics-catalogue';
import {legacyMedia,applicationIds} from './merged-media';
import s from './merged.module.css';

export default async function MergedRobotics({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;setRequestLocale(locale);const lang=locale==='de'?'de':'en';const de=lang==='de';const c=getRoboticsCopy(locale);
 const featured=c.products.map(p=>products.find(q=>q.name===p.name)!);
 const additionalApps=applications.filter(a=>!applicationIds.includes(a.id));
 return <div className={s.page} lang={locale}>
  <LocaleBreadcrumbJsonLd locale={locale} trail={[{name:c.navLabel,path:'/robotics'}]}/>
  <section className={s.hero} aria-labelledby="robotics-title">
   <div className={`${s.wrap} ${s.heroGrid}`}>
    <div className={s.heroCopy}>
     <span className={s.eyebrow}>Tekpoint / Robotics</span>
     <h1 id="robotics-title">{de?'AGIBOT Robotik in Europa.':'AGIBOT robotics in Europe.'}</h1>
     <p className={s.heroLead}>{c.intro[1]}</p>
     <div className={s.actions}><Link className={s.primary} href="/robotics/agibot/">{de?'Alle 18 Produkte entdecken':'Explore all 18 products'} <span aria-hidden="true">↗</span></Link><a className={s.secondary} href="#contacts">{c.heroAction} <span aria-hidden="true">↗</span></a></div>
     <div className={s.heroBrand}><img src="/images/robotics/agibot-logo-dark.png" alt="AGIBOT" width={243} height={58}/><span>{de?'18 Produkte · 6 Produktfamilien':'18 products · 6 product families'}</span></div>
    </div>
    <figure className={s.heroFilm}><video controls playsInline preload="none" poster="/images/robotics-catalogue/site/application-customer-events.webp" aria-label={de?'AGIBOT in Aktion – Showreel abspielen':'AGIBOT in action — play showreel'}><source src="/images/robotics-catalogue/showreel-small.mp4" type="video/mp4"/></video><figcaption>{de?'AGIBOT in Aktion · Video auf Wunsch abspielen':'AGIBOT in action · Play the video when you’re ready'}</figcaption></figure>
   </div>
  </section>
  

  <section className={`${s.section} ${s.processSection}`} id="how-it-works" aria-labelledby="process-title">
   <div className={s.wrap}>
    <div className={s.sectionHeading}><div><span className={s.eyebrow}>{c.stepsEyebrow}</span><h2 id="process-title">{c.stepsTitle}</h2></div><p>{c.stepsIntro}</p></div>
    <ol className={s.steps}>{c.steps.map((step,i)=><li key={step.title}><span className={s.stepNumber}>0{i+1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
   </div>
  </section>

  <section className={`${s.section} ${s.muted}`} id="products" aria-labelledby="products-title">
   <div className={s.wrap}>
    <div className={s.sectionHeading}><div><span className={s.eyebrow}>AGIBOT / Portfolio</span><h2 id="products-title">{de?'Das AGIBOT Sortiment':'Explore the AGIBOT range'}</h2><p>{de?'Sechs Produktfamilien mit technischen Daten, Galerien und Anwendungsbeispielen.':'Six product families with specifications, galleries and application examples.'}</p></div><Link className={s.secondary} href="/robotics/agibot/">{de?'Vollständiger Katalog · 18 Produkte':'Full catalogue · 18 products'} <span aria-hidden="true">↗</span></Link></div>
    <div className={s.familyGrid}>{categories.map(cat=>{const models=products.filter(p=>p.cat===cat.id);return <Link key={cat.id} className={s.familyCard} href={'/robotics/agibot/?category='+cat.id}><img src={'/images/robotics-catalogue/products/'+models[0].id+'.webp'} alt={models[0].name} width={600} height={480} loading="lazy"/><div><h3>{cat.label[lang]}</h3><span>{models.length} {de?(models.length===1?'Modell':'Modelle'):(models.length===1?'model':'models')} <span aria-hidden="true">↗</span></span></div></Link>;})}</div>
    <div className={s.featuredHeading}><h3>{de?'Ausgewählte AGIBOT Plattformen':'Selected AGIBOT platforms'}</h3><p>{c.productsIntro}</p></div>
    <div className={s.featuredGrid}>{c.products.map((p,i)=><article className={s.modelCard} key={p.name} id={'robot-'+(i+1)}><Link href={'/robotics/agibot/'+featured[i].id+'/'} className={s.modelImage} aria-label={de?p.name+' ansehen':'Explore '+p.name}><img src={'/images/robotics/'+legacyMedia.products[i].image} alt={p.name} width={legacyMedia.products[i].width} height={legacyMedia.products[i].height} loading="lazy"/></Link><div className={s.modelBody}><h4>{p.name}</h4><p className={s.tagline}>{p.tagline}</p><p>{p.description}</p><div className={s.modelLinks}><Link href={'/robotics/agibot/'+featured[i].id+'/'}>{de?'Produktdetails & Anfrage':'Product details & enquiry'} <span aria-hidden="true">↗</span></Link><a href={featured[i].link} target="_blank" rel="noopener noreferrer">{c.learnMore} <span aria-hidden="true">↗</span></a></div></div></article>)}</div>
    <p className={s.caption}>{c.manufacturerSpecs}</p>
   </div>
  </section>

  <section className={s.section} id="applications" aria-labelledby="applications-title">
   <div className={s.wrap}>
    <div className={s.sectionHeading}><div><span className={s.eyebrow}>{c.applicationsEyebrow}</span><h2 id="applications-title">{c.applicationsTitle}</h2><p>{c.applicationsIntro}</p></div><Link className={s.textLink} href="/robotics/applications/">{de?'Alle Anwendungsbereiche':'Explore all applications'} <span aria-hidden="true">↗</span></Link></div>
    <div className={s.applicationGrid}>{c.applications.map((a,i)=>{const current=applications.find(x=>x.id===applicationIds[i])!;return <article key={a.title} className={s.applicationCard}><Link href={'/robotics/applications/#'+current.id}><img src={'/images/robotics/'+legacyMedia.applications[i]} alt={a.title} width={600} height={420} loading="lazy"/></Link><h3>{a.title}</h3><p>{a.description}</p><Link className={s.textLink} href={'/robotics/applications/#'+current.id}>{current.title[lang]} <span aria-hidden="true">↗</span></Link></article>;})}</div>
    <div className={s.additionalApps}><h3>{de?'Weitere Anwendungsbereiche':'Additional application areas'}</h3><div>{additionalApps.map(a=><Link key={a.id} href={'/robotics/applications/#'+a.id}><img src={a.image} alt="" width={80} height={60} loading="lazy"/><span>{a.title[lang]}</span><span aria-hidden="true">↗</span></Link>)}</div></div>
    <p className={s.caption}>{de?'Anwendungsbeispiele: Eignung, Konfiguration und Integrationsanforderungen werden für jedes Projekt geprüft.':'Application examples: suitability, configuration and integration requirements are assessed for each project.'}</p>
   </div>
  </section>

  <section className={`${s.section} ${s.dark}`} id="why-tekpoint" aria-labelledby="why-title"><div className={`${s.wrap} ${s.whyGrid}`}><div><span className={s.eyebrow}>Tekpoint / Europe</span><h2 id="why-title">{c.whyTitle}</h2><p className={s.whyLead}>{c.whyIntro}</p><p className={s.companyContext}>{c.intro[0]}</p><a className={s.textLink} href="https://www.agibot.com/" target="_blank" rel="noopener noreferrer">{c.manufacturerLink} <span aria-hidden="true">↗</span></a></div><div className={s.reasons}>{c.reasons.map((r,i)=><Link href={legacyMedia.services[i]} key={r.title}><span className={s.stepNumber}>0{i+1}</span><h3>{r.title} <span aria-hidden="true">↗</span></h3><p>{r.description}</p></Link>)}</div></div></section>

  <section className={s.section} id="news" aria-labelledby="news-title"><div className={s.wrap}><div className={s.sectionHeading}><div><span className={s.eyebrow}>{de?'Einblicke & Neuigkeiten':'Insights & news'}</span><h2 id="news-title">{de?'Robotik bei Tekpoint':'Robotics at Tekpoint'}</h2></div><Link className={s.textLink} href="/blog/" locale="en">{de?'Zum Blog (Englisch)':'More from the blog'} <span aria-hidden="true">↗</span></Link></div><Link href="/blog/agibot-humanoid-robotics-ifa-2026/" locale="en" className={s.newsCard}><img src="/images/robotics/hero-agibot-robots.webp" alt={c.heroAlt} width={1600} height={816} loading="lazy"/><div><span className={s.newsDate}>{de?'Aus dem Archiv · 25. August 2026 · Artikel auf Englisch':'From the archive · 25 August 2026'}</span><h3>{c.newsLink}</h3><p>{de?'Humanoid Robotics: First Steps on European Floors — Hintergründe zu AGIBOT und Tekpoints Robotik-Aktivitäten.':'Humanoid Robotics: First Steps on European Floors — the background to AGIBOT and Tekpoint’s robotics activities.'}</p><span className={s.textLink}>{de?'Artikel lesen':'Read the article'} <span aria-hidden="true">↗</span></span></div></Link></div></section>

  <section className={`${s.section} ${s.muted}`} id="contacts" aria-labelledby="contacts-title"><div className={s.wrap}><div className={s.contactIntro}><span className={s.eyebrow}>{c.contactEyebrow}</span><h2 id="contacts-title">{c.emailTitle}</h2><p>{c.contactIntro}</p><ul className={s.topics}>{c.contactTopics.map(topic=><li key={topic}>{topic}</li>)}</ul></div><div className={s.contactGrid}><div className={s.contactPanel}><h3>{c.contactTitle}</h3><p>{c.emailIntro}</p><EmailEnquiry kind="robotics" locale={locale} buttonLabel={c.emailButton}/><Link className={s.textLink} href="/robotics/enquiry/">{de?'Ausgewählte Produkte anfragen':'Enquire about selected products'} <span aria-hidden="true">↗</span></Link></div><div className={s.teamPanel}><h3>{c.teamTitle}</h3>{company.team.map(person=><article key={person.name} className={s.person}><img src={person.image} alt={person.name} width={84} height={110} loading="lazy"/><div><h4>{person.name}</h4><a className={s.textLink} href={'mailto:'+person.email}>{person.email}</a></div></article>)}</div></div></div></section>
 </div>;
}
