import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    // نضمن تضمين ملف الكونفِج داخل باينري السيرفر
    outputFileTracingIncludes: {
      '/(.*)': ['./next-intl.config.mjs']
    }
  }
};

// لفّ إعدادات Next بالبلَجن
const withNextIntl = createNextIntlPlugin(); // لا نمرّر request.ts لأننا لا نستخدمه
export default withNextIntl(nextConfig);
