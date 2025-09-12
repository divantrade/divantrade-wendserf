"use client";
import {useTranslations} from 'next-intl';

export default function Offices() {
  const t = useTranslations('offices');
  return (
    <div className="rounded-lg border p-6">
      <h3 className="text-xl font-semibold text-brand mb-4">{t('title')}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-slate-50 rounded p-4">
          <div className="font-medium">{t('istanbul')}</div>
        </div>
        <div className="bg-slate-50 rounded p-4">
          <div className="font-medium">{t('guangzhou')}</div>
        </div>
        <div className="bg-slate-50 rounded p-4">
          <div className="font-medium">{t('madinah')}</div>
        </div>
      </div>
    </div>
  );
}
