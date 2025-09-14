"use client";
import clsx from 'classnames';
import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  align = 'start',
  imageSrc
}: {
  title: string;
  subtitle?: string;
  align?: 'start' | 'center' | 'end';
  imageSrc?: string;
}) {
  const alignment = {
    start: 'items-start text-left',
    center: 'items-center text-center',
    end: 'items-end text-right'
  }[align];

  return (
    <section className="relative overflow-hidden rounded-xl text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-brand-accent" />
      )}
      <div className="relative container-page py-10 md:py-14">
        <div className={clsx('flex flex-col gap-3', alignment)}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow">{title}</h1>
          {subtitle && (
            <p className="text-white/95 text-base md:text-lg max-w-3xl leading-relaxed drop-shadow">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
