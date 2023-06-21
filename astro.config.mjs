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
import alpinejs from "@astrojs/alpinejs";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import node from "@astrojs/node";

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
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
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
	],
	vite: {
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
		plugins: [
			sentryVitePlugin({
				org: "perchunpak",
				project: "statusmc-frontend",

				// Specify the directory containing build artifacts
				include: "./dist",

				// Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
				// and needs the `project:releases` and `org:read` scopes
				authToken: process.env.SENTRY_AUTH_TOKEN,
				telemetry: false,
			}),
		],
	},
	adapter: node({
		mode: "standalone",
	}),
});
