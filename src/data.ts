import { getPermalink } from "./utils/permalinks";
import { HeaderData, FooterData } from "~/types";

const linkStyles = "text-blue-600 hover:underline dark:text-gray-200";

export const headerData: HeaderData = {
	links: [
		{
			text: "API",
			href: getPermalink("/api"),
		},
		{
			text: "Sources",
			href: "https://github.com/MCStatusWeb/frontend",
		},
		{
			text: "About",
			href: getPermalink("/about"),
		},
	],
};

export const footerData: FooterData = {
	socialLinks: [
		{ ariaLabel: "Github", icon: "tabler:brand-github", href: "https://github.com/MCStatusWeb" },
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
