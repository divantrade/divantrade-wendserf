"use client";
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand via-brand-light to-brand-accent text-white">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {t('title')}
          </h1>
          <p className="mt-5 text-white/90 text-lg md:text-xl leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="mt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center rounded-md bg-white/95 px-6 py-3 text-brand font-semibold shadow hover:bg-white transition"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
