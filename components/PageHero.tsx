"use client";
import clsx from 'classnames';

export default function PageHero({
  title,
  subtitle,
  align = 'start'
}: {
  title: string;
  subtitle?: string;
  align?: 'start' | 'center' | 'end';
}) {
  const alignment = {
    start: 'items-start text-left',
    center: 'items-center text-center',
    end: 'items-end text-right'
  }[align];

  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand via-brand-light to-brand-accent text-white">
      <div className="container-page py-10 md:py-14">
        <div className={clsx('flex flex-col gap-3', alignment)}>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-white/90 text-base md:text-lg max-w-3xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
