import {getTranslations} from 'next-intl/server';
import PageHero from '@/components/PageHero';

type Service = {
  slug?: string;
  title: string;
  items?: string[];
  description?: string;
};

export default async function ServiceDetailPage({
  params
}: {
  params: {locale: 'en' | 'ar'; slug: string};
}) {
  // مرّر الـ locale صراحة + namespace
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });

  // نتوقع رسائل بالشكل: { "services": { "list": [{ "slug": "...", "title": "...", "items": [...] }] } }
  const list = (t.raw('list') as Service[]) ?? [];

  // ابحث عن الخدمة بالـ slug، أو اعرض Fallback بسيط
  const svc =
    list.find(s => (s.slug || '') === params.slug) ||
    ({
      title: params.slug,
      description: '',
      items: []
    } as Service);

  return (
    <div className="space-y-8">
      <PageHero
        title={svc.title}
        imageSrc="/images/services/b2b-symbol.jpg"
      />

      {svc.description ? (
        <p className="text-muted-foreground">{svc.description}</p>
      ) : null}

      {Array.isArray(svc.items) && svc.items.length > 0 ? (
        <ul className="space-y-2 list-disc ps-6">
          {svc.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">—</p>
      )}
    </div>
  );
}
