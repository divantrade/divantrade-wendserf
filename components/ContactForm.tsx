"use client";
import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setStatus('loading');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, locale })
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm mb-1">{t('name')}</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">{t('email')}</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">{t('message')}</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded border px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded bg-brand text-white px-5 py-2 hover:bg-brand-light disabled:opacity-50"
      >
        {t('send')}
      </button>
      {status === 'success' && (
        <p className="text-green-600 text-sm">{t('success')}</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">{t('error')}</p>
      )}
    </form>
  );
}
