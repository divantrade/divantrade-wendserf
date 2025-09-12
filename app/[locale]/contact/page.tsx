"use client";
import {useTranslations} from 'next-intl';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const t = useTranslations('contact');
  return (
    <div className="space-y-8">
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <section className="space-y-6">
        <ContactForm />
      </section>
    </div>
  );
}
