import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/legacy/:path*",
        destination: "https://landing-red-chi.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;