import type { NextConfig } from 'next';

/**
 * Configuration for Next.js App Router
 * Clean, type-safe, and ready for image uploads.
 */
const nextConfig: NextConfig = {
  /* Config options here */
  reactStrictMode: true,

  images: {
    // Mengizinkan penggunaan image dari domain luar (Unsplash)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;