import type { PrecacheEntry } from "@serwist/precaching";

import { defaultCache } from "@serwist/next/browser";
import { installSerwist } from "@serwist/sw";

declare const self: {
  // Change this attribute's name to your `injectionPoint`.
  // `injectionPoint` is an InjectManifest option.
  // See https://serwist.pages.dev/docs/build/inject-manifest/configuring
  __SW_MANIFEST: Array<PrecacheEntry | string> | undefined;
} & ServiceWorkerGlobalScope;

const revision = crypto.randomUUID();

installSerwist({
  fallbacks: {
    entries: [
      {
        matcher({ request }) {
          return request.destination === "document";
        },
        url: "/offline",
        revision,
      },
    ],
  },
  precacheEntries: self.__SW_MANIFEST,
  runtimeCaching: defaultCache,
  navigationPreload: true,
  clientsClaim: true,
  skipWaiting: true,
});
