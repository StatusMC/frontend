import opengraphImage from "./assets/images/opengraph-image.png";

export const CONFIG = {
	name: "StatusMC",

	basePathname: "/",
	trailingSlash: false,
	
	// This is the API URL for the backend.
	// In production, frontend and backend are in one `podman pod`,
	// so we can use `localhost` here to speed up the data transferring process.
	apiUrl: "http://localhost:3000",

	title: "StatusMC — The great way to get status from your Minecraft server!",
	description:
		"You can get Java status, Bedrock status and Query answer in parallel without even knowing what that word means!",
	defaultImage: opengraphImage,
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
