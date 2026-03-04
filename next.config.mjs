/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2880, 3840],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
