interface FormattedString {
	raw: string;
	plain: string;
	html: string;
	ansi: string;
}

interface BaseStatusAnswer {
	online: boolean;
	address: {
		host: string;
		port: number;
	};
	internal: {
		cached_at: number;
		cache_ends_at: number;
	};
}

interface VersionInfoOnlyName {
	name: FormattedString;
}
interface VersionInfo extends VersionInfoOnlyName {
	protocol: number;
}

interface BaseOnlineStatusAnswer extends BaseStatusAnswer {
	online: true;
	motd: FormattedString;
	version: VersionInfoOnlyName;
	players: { online: number; max: number };
}

export interface JavaStatusAnswer extends BaseOnlineStatusAnswer {
	version: VersionInfo;
	players: { list?: { name: FormattedString; uuid: string }[] } & BaseOnlineStatusAnswer["players"];
	icon?: string;
	additional?: object;
}

export interface BedrockStatusAnswer extends BaseOnlineStatusAnswer {
	version: { edition: "MCPE" | "MCEE" } & VersionInfo;
	map_name?: "World";
	gamemode?: "Survival";
}

export interface QueryAnswer extends BaseOnlineStatusAnswer {
	map_name: string;
	players: { names: string[] } & BaseOnlineStatusAnswer["players"];
	version: {
		brand: FormattedString;
		plugins: {
			name: string;
			version: string;
		}[];
	} & VersionInfoOnlyName;
}

export interface OfflineStatusAnswer extends BaseStatusAnswer {
	online: false;
	error: {
		short_name: string;
		traceback: string;
	};
}

export type OnlineStatusAnswer = JavaStatusAnswer | BedrockStatusAnswer | QueryAnswer;
export type AnyStatusAnswer = JavaStatusAnswer | BedrockStatusAnswer | QueryAnswer | OfflineStatusAnswer;
