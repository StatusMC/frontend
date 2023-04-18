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

interface BaseOnlineStatusAnswer extends BaseStatusAnswer {
	online: true;
	motd: {
		raw: string;
		plain: string;
		html: string;
		ansi: string;
	};
	version: {
		name: {
			raw: string;
			plain: string;
			html: string;
			ansi: string;
		};
		protocol: number;
	};
	players: { online: number; max: number };
}

export interface JavaStatusAnswer extends BaseOnlineStatusAnswer {
	players: { list?: { name: string; uuid: string }[]; } & BaseOnlineStatusAnswer["players"];
	icon?: string;
	additional?: object;
}

export interface BedrockStatusAnswer extends BaseOnlineStatusAnswer {
	version: { edition: "MCPE" | "MCEE" } & BaseOnlineStatusAnswer["version"];
	map_name?: "World";
	gamemode?: "Survival";
}

export interface OfflineStatusAnswer extends BaseStatusAnswer {
	online: false;
	error: {
		shortName: string;
		traceback: string;
	};
}

export interface Props {
	status: JavaStatusAnswer | BedrockStatusAnswer | OfflineStatusAnswer;
	isJava: boolean;
}
