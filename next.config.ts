import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Export a fully static site for GitHub Pages
  output: 'export',
  images: {
    // Disable Next.js Image Optimization on static export
    unoptimized: true,
  },
  // Keep linting out of production builds (lint runs separately via `make lint`)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Headers don't work with static export (output: 'export')
  // Commenting out to avoid warnings. These would only work with a server.
  // async headers() {
  //   return [
  //     {
  //       source: '/install.sh',
  //       headers: [
  //         { key: 'Cache-Control', value: 'no-cache' },
  //         { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
  //       ],
  //     },
  //     // Generic Markdown files - works for any folder
  //     {
  //       source: '/:path*.md',
  //       headers: [
  //         { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
  //         { key: 'Content-Disposition', value: 'inline' },
  //         { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
  //       ],
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Disable Webpack pack file caching to avoid noisy cache warnings in CI builds
    // This trades a small amount of rebuild performance for a clean build output.
    config.cache = false;

    return config;
  },
  // experimental: {
  //   turbo: {
  //     rules: {
  //       "*.svg": {
  //         as: "*.js",
  //         loaders: ["@svgr/webpack"],
  //       },
  //     },
  //   },
  // },
};

export default nextConfig;
