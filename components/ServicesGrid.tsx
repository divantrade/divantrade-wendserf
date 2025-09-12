"use client";
import {useTranslations} from 'next-intl';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesGrid() {
  const t = useTranslations('services');
  const services = t.raw('list') as Array<{title: string; items: string[]}>;
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-brand mb-6">{t('title')}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((svc, idx) => (
          <ServiceCard key={idx} title={svc.title} items={svc.items} />
        ))}
      </div>
    </section>
  );
}
