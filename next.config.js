/** @type {import('next').NextConfig} */
const { env } = require('./.env')
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okolokalyana.ru',
      },
      {
        protocol: 'https',
        hostname: 'staging2.okolokalyana.ru',
      },
    ],
  },
  env,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    })
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            memo: true,
            dimensions: false,
            svgProps: { role: 'img' },
          },
        },
      ],
      test: /\.svg$/i,
    })
    return config
  },
}

module.exports = nextConfig
