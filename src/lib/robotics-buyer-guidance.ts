import {locales} from '@/i18n/config';
export type BuyerGuidanceCopy={heading:string;intro:string;items:{q:string;a:string}[]};
export async function getBuyerGuidance(locale:string):Promise<BuyerGuidanceCopy>{
  if(!(locales as readonly string[]).includes(locale))throw new Error('Unsupported buyer guidance language');
  return (await import(`../../data/robotics-buyer-guidance/${locale}.json`)).default;
}
