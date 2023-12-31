/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': `linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`
			},

			backgroundSize: {
			'20px': '20px 20px'
			},
			lineHeight:{
				'4rem': '4rem',
			}
		},
	},
	plugins: [],
}
