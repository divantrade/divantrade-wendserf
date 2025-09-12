import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Ensure only the supported locales are loaded
  if (!['en', 'ar'].includes(locale)) {
    locale = 'en';
  }
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {messages};
});
