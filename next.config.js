/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    API_URL: 'http://dev.opensource-technology.com:8080/api/v1',
  },
}

module.exports = nextConfig
