import type { NextConfig } from "next";

/**
 * Static export — the site compiles to plain HTML/CSS/JS in `out/`,
 * which deploys directly to Cloudflare Pages with no adapter or runtime.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // next/image optimization requires a server; static export serves
    // originals. All images in this repo are small SVGs/PNGs.
    unoptimized: true,
  },
};

export default nextConfig;
