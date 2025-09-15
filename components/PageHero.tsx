"use client";
import clsx from 'classnames';
import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  align = 'start',
  imageSrc,
  height = 'md',
  overlay = 'black',
  unoptimized
}: {
  title: string;
  subtitle?: string;
  align?: 'start' | 'center' | 'end';
  imageSrc?: string;
  height?: 'sm' | 'md' | 'lg';
  overlay?: 'black' | 'brand';
  unoptimized?: boolean;
}) {
  const alignment = {
    start: 'items-start text-left',
    center: 'items-center text-center',
    end: 'items-end text-right'
  }[align];

  const minHeight = {
    sm: 'min-h-48',
    md: 'min-h-60 md:min-h-72',
    lg: 'min-h-72 md:min-h-96'
  }[height];

  const overlayClass =
    overlay === 'brand'
      ? 'absolute inset-0 bg-gradient-to-br from-brand/80 via-brand-light/60 to-brand-accent/80'
      : 'absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60';

  return (
    <section className={clsx('relative overflow-hidden rounded-xl text-white', minHeight)}>
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized={unoptimized ?? true}
          />
          <div className={overlayClass} />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-brand-accent" />
      )}
      <div className="relative container-page h-full py-10 md:py-14">
        <div className={clsx('flex h-full flex-col justify-center gap-3', alignment)}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow">{title}</h1>
          {subtitle && (
            <p className="text-white/95 text-base md:text-lg max-w-3xl leading-relaxed drop-shadow">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
