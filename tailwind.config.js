/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				128: "32rem",

				144: "36rem",

				160: "40rem",

				176: "44rem",

				192: "48rem",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#151ff9",

					secondary: "#b3ff3e",

					accent: "#d03df1",

					neutral: "#14151F",

					"base-100": "#ECF0F3",

					info: "#8DBCDD",

					success: "#7fff3e",

					warning: "#f0ff3e",

					error: "#ff3e3e",
				},
			},
		],
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
