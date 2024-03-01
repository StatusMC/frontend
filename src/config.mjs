export const CONFIG = {
	name: "StatusMC",

	basePathname: "/",
	trailingSlash: false,

	apiUrl: import.meta.env.BACKEND_URL || "http://127.0.0.1:8000",

	title: "StatusMC — The great way to get status from your Minecraft server!",
	description:
		"You can get Java status, Bedrock status and Query answer in parallel without even knowing what that word means!",
	announcement: {
		text: null,
		prefix: null,
		link: null,
	},
	contactEmail: "statusmc@perchun.it",

	defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

	language: "en",

	dateFormatter: new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC",
	}),
};
