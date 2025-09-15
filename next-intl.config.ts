import type {LocalePrefix} from 'next-intl/routing';
export const locales = ['en','ar'] as const;
export const defaultLocale = 'en';
export const localePrefix: LocalePrefix = 'always';
export default { locales, defaultLocale, localePrefix };
