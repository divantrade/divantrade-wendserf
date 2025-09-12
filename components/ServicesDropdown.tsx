"use client";
import { useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const locale = useLocale();
  const list = tServices.raw('list') as Array<{title: string; items: string[]}>;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
        setOpen(true);
      }}
      onMouseLeave={() => {
        // Small delay to allow moving cursor into the menu without flicker
        closeTimer.current = setTimeout(() => setOpen(false), 150);
      }}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        // Close only if focus moved completely outside the wrapper
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      tabIndex={0}
    >
      <button
        type="button"
        className="px-3 py-2 text-slate-700 hover:text-brand transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {tNav('services')}
      </button>
      {open && (
        <div className="absolute mt-2 min-w-[240px] rounded-lg border bg-white shadow-lg p-2 z-50" role="menu">
          <ul className="text-sm text-slate-700">
            <li className="mb-1 border-b pb-1">
              <Link
                href={`/${locale}/services` as any}
                className="block rounded px-3 py-2 font-medium hover:bg-slate-50 hover:text-brand"
                role="menuitem"
              >
                {tServices('all')}
              </Link>
            </li>
            {SERVICES.map((s, idx) => (
              <li key={s.slug}>
                <Link
                  href={`/${locale}/services/${s.slug}` as any}
                  className="block rounded px-3 py-2 hover:bg-slate-50 hover:text-brand"
                  role="menuitem"
                >
                  {list[idx]?.title ?? s.slug.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
