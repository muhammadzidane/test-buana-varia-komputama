import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { defaultLoaders, isServer, buildId, webpack, dev }) => {
    // Important to use the default value
    config.resolve.fallback = { path: false, fs: false };

    return config;
  },
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
