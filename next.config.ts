import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/legacy/:path*",
        destination: "https://landing-red-chi.vercel.app/:path*",
      },
    {
      source: "/FSD/:path*",
      destination: "https://ryachavan.github.io/FSD/:path*",
    },
    ];
  },
};

export default nextConfig;