import createMiddleware from 'next-intl/middleware';

const i18n = {
  locales: ['en','ar'],
  defaultLocale: 'en',
  localePrefix: 'always' as const
};

export default createMiddleware({ ...i18n, localeDetection: true });

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
