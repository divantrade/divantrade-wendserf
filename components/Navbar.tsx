"use client";
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import clsx from 'classnames';
import ServicesDropdown from './ServicesDropdown';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLink = (href: string, label: string) => (
    <Link
      href={`/${locale}${href}`}
      className="px-3 py-2 text-slate-700 hover:text-brand transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="container-page flex items-center justify-between py-3">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div
            className={clsx(
              'h-9 w-28 rounded bg-brand',
              'text-white flex items-center justify-center font-semibold tracking-wide'
            )}
            aria-label="Divan Trade"
          >
            DIVAN
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLink('/', t('home'))}
          {navLink('/about', t('about'))}
          <ServicesDropdown />
          {navLink('/contact', t('contact'))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
