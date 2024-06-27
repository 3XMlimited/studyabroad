/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "scontent-hkg4-2.xx.fbcdn.net",
        port: "",
        // pathname: "/**/image/upload/**",
      },
    ],
  },

  reactStrictMode: true,
  disableStaticImages: true,
};

module.exports = nextConfig;
