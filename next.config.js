/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: 'http://localhost:8010',
    NEXTAUTH_SECRET: '2342234234dfd'
  },
  images: {
    domains: ['utfs.io']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
