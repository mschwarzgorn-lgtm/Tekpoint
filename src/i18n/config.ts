export const locales = [
  'en', 'de', 'nl', 'fr', 'es', 'it', 'sr', 'da', 'sv', 'no', 'fi', 'is',
  'pl', 'ro', 'cs', 'hu', 'hr', 'bg', 'sk', 'sl', 'pt', 'el', 'et', 'lv', 'lt', 'ga', 'mt',
  'zh', 'ja', 'ko', 'ru'
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
