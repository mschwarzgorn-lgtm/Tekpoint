/** Shared canonical/language policy. Do not advertise untranslated bodies as translations. */
export const BASE_URL = 'https://tekpoint.com';
export const LANGUAGE_TAGS: Record<string,string> = {pt:'pt-PT',no:'nb',sr:'sr-Latn',zh:'zh-Hans'};
export const ENGLISH_ONLY_PATHS = ['/blog','/impressum','/privacy-policy','/cookie-policy','/terms-and-conditions'];
export const isEnglishOnly = (pagePath:string) => ENGLISH_ONLY_PATHS.includes(pagePath.replace(/\/$/,''));
export const searchRobots = (index=true) => ({index:index && process.env.NEXT_PUBLIC_ROBOTICS_PREVIEW !== '1',follow:true,googleBot:{index:index && process.env.NEXT_PUBLIC_ROBOTICS_PREVIEW !== '1',follow:true,'max-image-preview':'large' as const,'max-snippet':-1,'max-video-preview':-1}});
