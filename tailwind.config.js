module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			gray: {
				darkest: '#16161d',
				dark: '#25252c',
				lightent: '#45454b',
				light: '#d7d7db',
			},
			white: {
				darkest: '#e7e7e8',
			},
			blue: {
				neo: '#1affd6',
				dark: '#2234ce',
				light: '#0070f3',
			},
		},
		fontFamily: {
			'jetbrain-mono': ['JetBrains Mono', 'monospace'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
