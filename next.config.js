const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  //   i18n: {
  //     /**
  //      * Provide the locales you want to support in your application
  //      */
  //     locales: ['ru-RU', 'en-US'],
  //     /**
  //      * This is the default locale you want to be used when visiting
  //      * a non-locale prefixed path.
  //      */
  //     defaultLocale: 'ru-RU',
  //   },
  typescript: {
    ignoreBuildErrors: true,
  },
});

module.exports = nextConfig;
