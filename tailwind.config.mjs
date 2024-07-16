/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				CormorantGaramond: ['Cormorant Garamond'],
				Cinzel: ['Cinzel'],
				Tangerine: ['Tangerine'],

			}
		},
	},
	plugins: [],
}
