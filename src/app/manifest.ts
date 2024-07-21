import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    icons: [
      {
        src: "/icons/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/icon-256x256.png",
        type: "image/png",
        sizes: "256x256",
      },
      {
        src: "/icons/icon-384x384.png",
        type: "image/png",
        sizes: "384x384",
      },
      {
        src: "/icons/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    description: "This is my application",
    background_color: "#f69435",
    theme_color: "#f69435",
    display: "standalone",
    name: "Buana Varia",
    short_name: "Buana",
    start_url: "/",
    scope: "/",
  };
}
