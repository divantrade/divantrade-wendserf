import createMiddleware from 'next-intl/middleware';
import i18n from './next-intl.config';

export default createMiddleware({
  ...i18n,
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
