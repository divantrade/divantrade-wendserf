"use client";
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {useTransition} from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onToggle() {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const segments = pathname?.split('/') ?? [];
    if (segments.length > 1) {
      segments[1] = newLocale;
    }
    startTransition(() => router.push(segments.join('/') || `/${newLocale}`));
  }

  return (
    <button
      onClick={onToggle}
      className="rounded border px-3 py-1 text-sm hover:bg-slate-50"
      aria-label={t('language')}
      disabled={isPending}
    >
      {locale === 'ar' ? 'EN' : 'AR'}
    </button>
  );
}
