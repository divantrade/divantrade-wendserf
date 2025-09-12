"use client";
import {SERVICES} from '@/lib/services';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export default function ServiceDetailPage({params}: {params: {locale: string; slug: string}}) {
  const locale = useLocale();
  const t = useTranslations();
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="space-y-4">
        <p className="text-slate-700">Service not found.</p>
        <Link href={`/${locale}/services`} className="text-brand underline">← {t('nav.services')}</Link>
      </div>
    );
  }

  const title = t(service.titleKey) as string;
  const items = t.raw(service.itemsKey) as string[];

  return (
    <article className="prose max-w-none">
      <div className="mb-6">
        <Link href={`/${locale}/services`} className="text-brand">← {t('nav.services')}</Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-brand mb-4">{title}</h1>
      <ul className="list-disc ps-6 text-slate-700 space-y-1">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </article>
  );
}
