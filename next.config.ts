import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/legacy/:path*",
        destination: "https://your-landing-vercel-url.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;