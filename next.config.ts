// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     serverActions: {}, // must be an object, not boolean
//   },
//   reactStrictMode: true,
  
// };

// export default nextConfig;


// @ts-nocheck
/* eslint-disable */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // must be an object, not boolean
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint build blocking
  },
  typescript: {
    ignoreBuildErrors: true, // disables TypeScript build blocking
  },
};

export default nextConfig;
