/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
