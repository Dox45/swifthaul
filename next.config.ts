
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     serverActions: {}, // must be an object, not boolean
//   },
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true, // disables ESLint build blocking
//   },
//   typescript: {
//     ignoreBuildErrors: true, // disables TypeScript build blocking
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to fix framer-motion chunk corruption
  experimental: {
    turbopack: false,
    serverActions: {}, // required as object
  },

  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, // skip ESLint during build
  },

  typescript: {
    ignoreBuildErrors: true, // skip TypeScript errors during build
  },
};

export default nextConfig; 