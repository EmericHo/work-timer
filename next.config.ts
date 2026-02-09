import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Optimize images for better Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },

  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // HSTS for security and SEO trust
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Cache control for better performance
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
      // Cache static assets for 1 year
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache JavaScript and CSS for 1 year
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
