/** @type {import('next').NextConfig} */


  

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"]
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
}

module.exports = nextConfig
