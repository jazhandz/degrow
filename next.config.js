/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
