"use client";
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const o = useTranslations('offices');
  return (
    <footer className="mt-16 border-t bg-slate-50">
      <div className="container-page py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="text-brand text-lg font-semibold">Divan Trade</div>
          <p className="text-sm text-slate-600 mt-2">Since 1991</p>
          <p className="text-xs text-slate-500 mt-1">export@divantrade.net</p>
        </div>
        <div>
          <div className="font-medium mb-2">{o('title')}</div>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>{o('istanbul')}</li>
            <li>{o('guangzhou')}</li>
            <li>{o('madinah')}</li>
          </ul>
        </div>
        <div className="sm:col-span-2 md:col-span-2 flex items-end justify-end">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Divan Trade. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
