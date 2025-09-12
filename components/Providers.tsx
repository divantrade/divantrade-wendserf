"use client";
import {NextIntlClientProvider} from 'next-intl';
import type {AbstractIntlMessages} from 'next-intl';

export default function Providers({
  children,
  messages,
  locale
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
