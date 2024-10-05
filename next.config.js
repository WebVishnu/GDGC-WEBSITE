/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'mms.businesswire.com',
        port: '',       
      },
    ],
  },
}

module.exports = nextConfig
