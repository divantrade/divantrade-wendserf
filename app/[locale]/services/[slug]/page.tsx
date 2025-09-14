import {SERVICES} from '@/lib/services';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import {SERVICE_IMAGES} from '@/lib/services';
import {getTranslations} from 'next-intl/server';

export default async function ServiceDetailPage({params}: {params: {locale: string; slug: string}}) {
  const t = await getTranslations({locale: params.locale});
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="space-y-4">
        <p className="text-slate-700">Service not found.</p>
        <Link href={`/${params.locale}/services`} className="text-brand underline">← {t('nav.services')}</Link>
      </div>
    );
  }

  const title = t(service.titleKey) as string;
  const items = t.raw(service.itemsKey) as string[];
  const images = SERVICE_IMAGES[service.id];

  return (
    <div className="space-y-8">
      <PageHero title={title} imageSrc={images?.hero} />
      <article className="prose max-w-none">
        <div className="mb-6">
          <Link href={`/${params.locale}/services`} className="text-brand">← {t('nav.services')}</Link>
        </div>
        {images?.detail && (
          <div className="mb-6 relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image src={images.detail} alt="" fill className="object-cover" sizes="100vw" />
          </div>
        )}
        <ul className="list-disc ps-6 text-slate-700 space-y-1">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
