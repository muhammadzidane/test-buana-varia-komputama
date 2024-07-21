import type { SerwistGlobalConfig, PrecacheEntry } from "serwist";

import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: Array<PrecacheEntry | string> | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

// const revision = crypto.randomUUID();

const serwist = new Serwist({
  // fallbacks: {
  //   entries: [
  //     {
  //       matcher({ request }) {
  //         return request.destination === "document";
  //       },
  //       url: "/offline",
  //       revision,
  //     },
  //   ],
  // },
  precacheEntries: self.__SW_MANIFEST,
  runtimeCaching: defaultCache,
  navigationPreload: true,
  clientsClaim: true,
  skipWaiting: true,
});

serwist.addEventListeners();
