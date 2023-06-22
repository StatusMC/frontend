export interface MetaSEO {
	title?: string;
	description?: string;
	favicon?: string;

	canonical?: string | URL;
	noindex?: boolean;
	nofollow?: boolean;

	ogTitle?: string;
	ogType?: string;
	ogImage?: string;
}

/* Header and footer */

interface HeaderOrFooterLink {
	text?: string;
	href?: string;
	ariaLabel?: string;
	icon?: string;
}

interface HeaderMenuLink extends HeaderOrFooterLink {
	links?: Array<HeaderOrFooterLink>;
}

interface HeaderActionLink extends HeaderOrFooterLink {
	type?: string;
}

export interface HeaderData {
	links?: Array<HeaderMenuLink>;
	actions?: Array<HeaderActionLink>;
}

export interface FooterData {
	socialLinks: Array<HeaderOrFooterLink>;
	footNote?: string;
	theme?: string;
}
