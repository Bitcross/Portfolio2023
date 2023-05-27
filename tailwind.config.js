/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				burtons: 'burtons',
				bombing: 'bombing',
				tagtype: 'tagtype',
				pressstart: 'pressstart'
			}
		}
	},
	plugins: []
}