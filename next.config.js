/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com'],
  },
  async redirects() {
    return [
      {
        source: '/checkout',
        destination: '/checkout/endereco',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
