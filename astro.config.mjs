// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://mauricefh.com",
  integrations: [icon(), sitemap()],

  vite: {
    build: {
      cssCodeSplit: true,
      inlineStylesheets: "always", // inline small css file
    },
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
