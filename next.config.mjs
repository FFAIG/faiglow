/** @type {import('next').NextConfig} */
const FAI_PLATFORM = "https://fai-platform-alpha.vercel.app";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2880, 3840],
    minimumCacheTTL: 31536000,
  },
  async rewrites() {
    return [
      { source: "/api/auth/:path*", destination: `${FAI_PLATFORM}/api/auth/:path*` },
      { source: "/api/admin/:path*", destination: `${FAI_PLATFORM}/api/admin/:path*` },
      { source: "/api/public/:path*", destination: `${FAI_PLATFORM}/api/public/:path*` },
      { source: "/api/qr/:path*", destination: `${FAI_PLATFORM}/api/qr/:path*` },
      { source: "/api/qr-image/:path*", destination: `${FAI_PLATFORM}/api/qr-image/:path*` },
      { source: "/api/qr-download/:path*", destination: `${FAI_PLATFORM}/api/qr-download/:path*` },
      { source: "/api/tac.pan7l.01x/:path*", destination: `${FAI_PLATFORM}/api/tac.pan7l.01x/:path*` },
      { source: "/admin", destination: `${FAI_PLATFORM}/admin` },
      { source: "/admin/:path*", destination: `${FAI_PLATFORM}/admin/:path*` },
      { source: "/tac.pan7l.01x", destination: `${FAI_PLATFORM}/tac.pan7l.01x` },
      { source: "/tac.pan7l.01x/:path*", destination: `${FAI_PLATFORM}/tac.pan7l.01x/:path*` },
      { source: "/p/:path*", destination: `${FAI_PLATFORM}/p/:path*` },
      { source: "/sifre-yenile", destination: `${FAI_PLATFORM}/sifre-yenile` },
    ];
  },
};

export default nextConfig;
