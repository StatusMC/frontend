import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import { CONFIG } from "./src/config.mjs";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";
import prefetch from "@astrojs/prefetch";
import icon from "astro-icon";
import sentry from "@sentry/astro";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) =>
	CONFIG.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// https://astro.build/config
export default defineConfig({
	site: "https://statusmc.perchun.it",
	base: CONFIG.basePathname,
	trailingSlash: CONFIG.trailingSlash ? "always" : "never",
	output: "hybrid",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		...whenExternalScripts(() =>
			partytown({
				config: {
					forward: ["dataLayer.push"],
				},
			})
		),
		compress({
			css: true,
			html: {
				removeAttributeQuotes: false,
			},
			img: false,
			js: true,
			svg: false,
			logger: 1,
		}),
		alpinejs(),
		prefetch(),
		icon(),
		sentry({
			dsn: "https://8c5f0b4919644ef69904e9901bf3154e@o4504254006689792.ingest.us.sentry.io/4505353780133888",
			sourceMapsUploadOptions: {
				org: "perchunpak",
				project: "statusmc-frontend",
				authToken: process.env.SENTRY_AUTH_TOKEN,
			},
			replaysOnErrorSampleRate: 0.0,
			replaysSessionSampleRate: 0.0,
		}),
	],
	vite: {
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
	},
	adapter: node({
		mode: "standalone",
	}),
});
