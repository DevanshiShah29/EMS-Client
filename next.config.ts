import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // for image support with static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
