import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/legacy",
        destination: "https://landing-red-chi.vercel.app/",
      },
    {
      source: "/FSD/:path",
      destination: "https://ryachavan.github.io/FSD/:path",
    },
    ];
  },
};

export default nextConfig;