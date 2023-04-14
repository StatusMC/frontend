const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--aw-color-primary)",
				secondary: "var(--aw-color-secondary)",
				accent: "var(--aw-color-accent)",
				muted: "var(--aw-color-muted)",
				light: "var(--aw-color-light)",
				dark: "var(--aw-color-dark)",
			},
			fontFamily: {
				sans: ["var(--aw-font-sans)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--aw-font-serif)", ...defaultTheme.fontFamily.serif],
				heading: ["var(--aw-font-heading)", ...defaultTheme.fontFamily.sans],
			},
			typography (theme) {
				return {
					DEFAULT: {
						css: {
							'code::before': {
								content: 'none',
							},
							'code::after': {
								content: 'none'
							},
							code: {
								color: theme('colors.red.400'),
								backgroundColor: theme('colors.stone.100'),
								borderRadius: theme('borderRadius.DEFAULT'),
								paddingLeft: theme('spacing[1.5]'),
								paddingRight: theme('spacing[1.5]'),
								paddingTop: theme('spacing[0.5]'),
								paddingBottom: theme('spacing[0.5]'),
							},
						},
					},
					invert: {
						css: {
							code: {
								color: theme('colors.red.400'),
								backgroundColor: theme('colors.zinc.800'),
							}
						}
					}
				}
			}
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
	darkMode: "class",
};
