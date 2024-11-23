import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
			display: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
			button: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			button: "1.8rem",
			sm: "1.4rem",
			md: "1.6rem",
			lg: "1.8rem",
			xl: "2.4rem",
			"section-title": "3.6rem",
		},
		spacing: {
			0: "0px",
			4: "4px",
			8: "8px",
			12: "12px",
			16: "16px",
			24: "24px",
			32: "32px",
			48: "48px",
			56: "56px",
			64: "64px",
			96: "96px",
			128: "128px",
			256: "256px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1.6rem",
			},
		},
		borderRadius: {
			DEFAULT: "12px",
			full: "9999px",
		},
		borderWidth: {
			DEFAULT: "1px",
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "rgb(var(--color-primary-500))",
					300: "rgb(var(--color-primary-300))",
				},
				button: {
					DEFAULT: "rgb(var(--color-button))",
				},
				cta: {
					DEFAULT: "rgb(var(--color-cta))",
				},
				background: {
					DEFAULT: "rgb(var(--color-background-primary))",
					secondary: "rgb(var(--color-background-secondary))",
				},
				text: {
					DEFAULT: "rgb(var(--color-text-primary))",
					secondary: "rgb(var(--color-text-secondary))",
				},
				border: {
					DEFAULT: "rgb(var(--color-border))",
				},
				success: {
					DEFAULT: "rgb(var(--color-success))",
				},
				error: {
					DEFAULT: "rgb(var(--color-error))",
				},
				loading: {
					DEFAULT: "rgb(var(--color-background-loading))",
				},
			},
			fontWeight: {
				button: "500",
			},
			transitionDuration: {
				DEFAULT: "var(--transition-duration-default)",
			},
			transitionProperty: {
				accordion: "height, opacity",
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.4, 0.0, 0.2, 1)",
			},
			keyframes: {
				carouselAutoScrollVertical: {
					to: {
						transform: "translateY(calc(-50% - (var(--gap) / 2)))",
					},
				},
				carouselAutoScrollHorizontal: {
					to: {
						transform: "translateX(calc(-50% - (var(--gap) / 2)))",
					},
				},
				// clickAnimationPulse: {
				// 	from: {
				// 		width: "0",
				// 		height: "0",
				// 	},
				// 	to: {
				// 		width: "var(--click-animation-pulse-size)",
				// 		height: "var(--click-animation-pulse-size)",
				// 	},
				// },
			},
			animation: {
				carouselAutoScrollVertical:
					"carouselAutoScrollVertical var(--duration) var(--direction) linear infinite",
				carouselAutoScrollHorizontal:
					"carouselAutoScrollHorizontal var(--duration) var(--direction) linear infinite",
				// clickAnimationPulse: "clickAnimationPulse 0.3s forwards",
			},
		},
	},
	plugins: [],
} satisfies Config;
