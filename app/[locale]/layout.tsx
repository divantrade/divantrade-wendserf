import type { Metadata } from 'next';
import '../globals.css';
import Providers from '@/components/Providers';
import { Cairo, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'], weight: ['300', '400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Divan Trade | International Trade & Sourcing',
  description:
    'Divan Trade – Product sourcing, international supply, customs clearance, inspection, consulting, B2B solutions, and after-sales support.',
  metadataBase: new URL('https://divantrade.net'),
  openGraph: {
    title: 'Divan Trade',
    description:
      'Product sourcing and international trade from Turkey, China, and KSA. Since 1991.',
    url: 'https://divantrade.net',
    siteName: 'Divan Trade',
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://divantrade.net'
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}) {
  const locale = params.locale || 'en';
  const DICTS: Record<string, any> = { en, ar };
  const messages = DICTS[locale] ?? en;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? cairo.className : inter.className;

  return (
    <html lang={locale} dir={dir} className={fontClass}>
      <body>
        <Providers messages={messages as any} locale={locale}>
          <Navbar />
          <main className="container-page py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
