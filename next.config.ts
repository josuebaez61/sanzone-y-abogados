import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/sanzone-y-abogados/" : "",
  basePath: isProd ? "/sanzone-y-abogados" : "",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
