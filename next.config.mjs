import withSerwistInit from "@serwist/next";

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

const withSerwist = withSerwistInit({
  swDest: "public/sw.js", // where the service worker code will end up
  swSrc: "src/app/sw.ts", // where the service worker src is
});

export default withSerwist(nextConfig);
