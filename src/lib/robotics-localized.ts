import 'server-only';
import * as catalogue from './robotics-catalogue';
import sourceNotes from './robotics-source-notes.json';
import {locales} from '@/i18n/config';
import {notFound} from 'next/navigation';

export async function getCatalogue(locale:string){
 if(!(locales as readonly string[]).includes(locale))notFound();
 const source={...catalogue,sourceNotes};
 if(locale==='en'||locale==='de')return source;
 const dictionary:Record<string,string>=(await import(`../../messages/robotics-catalogue/${locale}.json`)).default;
 const translate=(value:unknown):any=>typeof value==='string'?(dictionary[value]??value):Array.isArray(value)?value.map(translate):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([key,item])=>[key,translate(item)])):value;
 return translate(source) as typeof source;
}
