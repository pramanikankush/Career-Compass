import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@google/generative-ai']
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  }
};

export default nextConfig;
