/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    // 👇 إجبار تضمين ملف next-intl.config.ts داخل باينري السيرفر على Vercel
    outputFileTracingIncludes: {
      '/(.*)': ['./next-intl.config.ts']
    }
  }
};

export default nextConfig;
