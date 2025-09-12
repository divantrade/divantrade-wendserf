"use client";
import {useTranslations} from 'next-intl';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  const t = useTranslations('about');
  return (
    <div className="space-y-8">
      <PageHero title={t('title')} subtitle={t('content')} />
      <article className="prose max-w-none">
        <p className="text-slate-700 leading-relaxed">{t('content')}</p>
      </article>
    </div>
  );
}
