"use client";
import {useTranslations} from 'next-intl';
import ServiceCard from '@/components/ServiceCard';
import PageHero from '@/components/PageHero';

export default function ServicesPage() {
  const t = useTranslations('services');
  const services = t.raw('list') as Array<{title: string; items: string[]}>;
  return (
    <div className="space-y-8">
      <PageHero
        title={t('title')}
        imageSrc="/images/services/business-logistic-import-export-transport-industry-transportation-logistic-network-distribution-growth-container-cargo-ship-trucks-industrial-cargo-freight-shipping.jpg"
      />
      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc, idx) => (
            <ServiceCard key={idx} title={svc.title} items={svc.items} />
          ))}
        </div>
      </section>
    </div>
  );
}
