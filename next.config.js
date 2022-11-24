/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.redwhite.ru", "nvlupin.blob.core.windows.net"
    ],
  },
  compiler: {
    styledComponents: true,
  },


  experimental: {
    images: {
      layoutRaw: true
    }
  },
  // Rest of the config


}

module.exports = nextConfig
