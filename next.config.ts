import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site is fully portable (Vercel, Netlify, GH Pages, any CDN).
  output: "export",
  // Static export can't use the on-demand Image Optimization API; ship pre-sized assets.
  images: { unoptimized: true },
  // Cleaner static URLs across hosts.
  trailingSlash: true,
};

export default nextConfig;
