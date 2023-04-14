import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import { CONFIG } from "./src/config.mjs";
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => CONFIG.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  site: CONFIG.origin,
  base: CONFIG.basePathname,
  trailingSlash: CONFIG.trailingSlash ? "always" : "never",
  output: "server",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  }), alpinejs()],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    }
  },
  adapter: vercel()
});