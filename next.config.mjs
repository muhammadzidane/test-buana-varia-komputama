import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "m.media-amazon.com",
        protocol: "https",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        destination: "/dashboard",
        source: "/",
      },
    ];
  },
};

const pwaConfig = {
  disable: process.env.NODE_ENV === "development",
  sw: "service-worker.js",
  dest: "public",
};

export default withPWA(pwaConfig)(nextConfig);
