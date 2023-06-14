import { CONFIG } from "~/config.mjs";
import { trim } from "~/utils/utils";

export function trimSlash(s: string) {
	return trim(trim(s, "/"));
}

function createPath(...params: string[]) {
	const paths = params
		.map((el) => trimSlash(el))
		.filter((el) => !!el)
		.join("/");
	return "/" + paths + (CONFIG.trailingSlash && paths ? "/" : "");
}

const BASE_PATHNAME = CONFIG.basePathname;

export function getPermalink(slug = ""): string {
	return definitivePermalink(createPath(slug));
}

export function getHomePermalink(): string {
	return getPermalink("/");
}

export function getAsset(path: string): string {
	return (
		"/" +
		[BASE_PATHNAME, path]
			.map((el) => trimSlash(el))
			.filter((el) => !!el)
			.join("/")
	);
}

function definitivePermalink(permalink: string): string {
	return createPath(BASE_PATHNAME, permalink);
}
