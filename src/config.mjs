import defaultImage from "./assets/images/default.png";

export const CONFIG = {
	name: "StatusMC",

	// origin: "https://statusmc.perchun.it",
	origin: "http://localhost:3000",  // todo get automatically
	basePathname: "/",
	trailingSlash: false,
	apiUrl: "https://api.statusmc.perchun.it",

	title: "AstroWind — Free template for create a website with Astro + Tailwind CSS",
	description:
		"🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
	defaultImage: defaultImage,
	announcement: {
		text: null,
		prefix: null,
		link: null,
	},
	contactEmail: "statusmc.web@perchun.it",

	defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: "en",

	dateFormatter: new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	}),
};
