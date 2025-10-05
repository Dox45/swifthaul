import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // must be an object, not boolean
  },
  reactStrictMode: true,
  
};

export default nextConfig;