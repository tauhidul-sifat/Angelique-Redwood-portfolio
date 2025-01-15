import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    loader: "custom",
    loaderFile: "./src/loader.js",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  // reactStrictMode: true,
};

export default nextConfig;
