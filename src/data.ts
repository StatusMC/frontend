import { getPermalink } from "./utils/permalinks";
import type { HeaderData, FooterData } from "~/types";

const linkStyles = "text-blue-600 hover:underline dark:text-gray-200";

export const headerData: HeaderData = {
	links: [
		{
			text: "How to test?",
			href: getPermalink("/how-to-test"),
		},
		{
			text: "About",
			href: getPermalink("/about"),
		},
		{
			text: "API Documentation",
			href: getPermalink("/api"),
		},
		{
			text: "Sources",
			href: "https://github.com/StatusMC/frontend",
		},
		{
			text: "Privacy Policy",
			href: getPermalink("/privacy"),
		},
	],
};

export const footerData: FooterData = {
	socialLinks: [
		{ ariaLabel: "Github", icon: "tabler:brand-github", href: "https://github.com/StatusMC" },
		{ ariaLabel: "Discord", icon: "tabler:brand-discord", href: "https://s.perchun.it/discord" },
	],
	footNote: `
    Made by <a class="${linkStyles}" href="https://perchun.it">Perchun Pak</a>.
    Thanks to
    <a class="${linkStyles}" href="https://onwidget.com/">onWidget</a>
    for
    <a class="${linkStyles}" href="https://github.com/onwidget/astrowind">the template</a>.
  `,
};
