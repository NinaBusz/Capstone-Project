/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "imgbox.com",
      "images2.imgbox.com",
      "thumbs2.imgbox.com",
    ],
  },
};

module.exports = nextConfig;
