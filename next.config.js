/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/shadowlabs-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig