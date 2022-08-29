/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.traction.one"],
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
};

module.exports = nextConfig;
