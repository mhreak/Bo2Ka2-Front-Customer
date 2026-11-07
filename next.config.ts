import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "94.184.46.18",
        port: "30000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "bo2ka2.erisagift.com",
        pathname: "/uploads/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
