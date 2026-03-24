export const locales = [
  'en', 'de', 'nl', 'fr', 'es', 'it', 'sr', 'da', 'sv', 'no', 'fi', 'is',
  'pl', 'ro', 'cs', 'hu', 'hr', 'bg', 'sk', 'sl', 'pt', 'el', 'et', 'lv', 'lt', 'ga', 'mt',
  'zh', 'ja', 'ko'
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<string, string> = {
  en: 'English', de: 'Deutsch', nl: 'Nederlands', fr: 'Français',
  es: 'Español', it: 'Italiano', sr: 'Srpski', da: 'Dansk',
  sv: 'Svenska', no: 'Norsk', fi: 'Suomi', is: 'Íslenska',
  pl: 'Polski', ro: 'Română', cs: 'Čeština', hu: 'Magyar',
  hr: 'Hrvatski', bg: 'Български', sk: 'Slovenčina', sl: 'Slovenščina',
  pt: 'Português', el: 'Ελληνικά', et: 'Eesti', lv: 'Latviešu',
  lt: 'Lietuvių', ga: 'Gaeilge', mt: 'Malti',
  zh: '中文', ja: '日本語', ko: '한국어'
};
