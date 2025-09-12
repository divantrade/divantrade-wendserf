import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const TO_EMAIL = 'export@divantrade.net';

export async function POST(request: Request) {
  try {
    const { name, email, message, locale } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const subject = `[Divan Trade] New inquiry from ${name}`;
    const content = `Locale: ${locale || 'en'}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Divan Trade <noreply@divantrade.net>',
        to: [TO_EMAIL],
        subject,
        text: content
      });
    } else {
      // Fallback: log only
      console.log('Contact message (no RESEND_API_KEY set):', { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
