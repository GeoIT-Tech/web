/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-purple": "#131126",
				"dark-purple-secondary": "#1F384F",
				purple: "#201C44",

				"dark-blue": "#000C2D",
				"dark-blue-secondary": "#1F284F",
				"primary-blue": "#2682FF",
				blue: "#0073C6",
				"blue-secondary": "#0070F0",
				"light-blue": "#1090CB",
				"light-blue-secondary": "#E8F4FA",

				"dark-gray": "#252525",
				gray: "#686868",
				"gray-text": "#575757",
				"gray-text-secondary": "#777777",
				"gray-label": "#515458",
				"gray-border": "#B7BFC7",
				"gray-secondary": "#F4F4F4",
				"gray-tertiary": "#D2D2D2",
				"gray-light": "#696969",
				"gray-light-secondary": "#797979",
				"very-light-gray": "#FAFBFC",
				"light-gray": "#868686",
				"light-gray-secondary": "#545454",
				"light-gray-tertiary": "#D0D0D0",
				"light-gray-four": "#787878",

				"light-yellow": "#FFF692",
			},
		},
	},
	plugins: [],
};
