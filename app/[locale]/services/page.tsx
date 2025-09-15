import {createTranslator} from 'next-intl';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

type Locale = 'en' | 'ar';

// يحوّل أي قيمة إلى Array آمنة للاستخدام مع map
function toArray<T = any>(v: unknown): T[] {
  if (Array.isArray(v)) return v as T[];
  if (v && typeof v === 'object') return Object.values(v as Record<string, T>);
  return [];
}

export default async function ServicesPage({
  params
}: {
  params: {locale: Locale};
}) {
  const locale: Locale = params?.locale === 'ar' ? 'ar' : 'en';
  const messages = locale === 'ar' ? (ar as any) : (en as any);

  const t = createTranslator({locale, messages, namespace: 'services'});

  const title = (() => {
    try {
      return t('title');
    } catch {
      return locale === 'ar' ? 'خدماتنا' : 'Our Services';
    }
  })();

  const rawList = (() => {
    try {
      return t.raw('list');
    } catch {
      return [];
    }
  })();

  const services = toArray(rawList);

  return (
    <div className="space-y-8">
      <PageHero
        title={t('title')}
        imageSrc="/images/services/logistics-concept-wooden-block-desk-with-logistics-icon-virtual-screen.jpg"
        overlay="brand"
        height="lg"
      />
      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc: any, idx: number) => (
            <ServiceCard
              key={idx}
              title={String(svc?.title ?? (locale === 'ar' ? 'خدمة' : 'Service'))}
              items={Array.isArray(svc?.items) ? svc.items : toArray(svc?.items)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
