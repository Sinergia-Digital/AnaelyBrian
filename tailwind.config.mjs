/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-color': '#6c8778',
				'text-color': '#171717',
				'primary-color': '#9c7a32',
				'secondary-color': '#716e6c',
				'botton-color': 'white',
				'botton-color-hover': 'black',
				'botton-text-color': '#333'
			}
		},
	},
	plugins: [],
}
