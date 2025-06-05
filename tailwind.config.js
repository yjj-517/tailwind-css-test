/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector", '[data-theme="dark"]'],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			// 颜色
			colors: {
				primary: "var(--sm-color-fg-1)", //主色
				regular: "#000000", //常规色
				secondary: "", //次要色
				disabled: "", //禁用色
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			const themes = ["light", "dark", "warm"];
			themes.forEach(theme => {
				addVariant(theme, [`&[data-theme="${theme}"]`, `[data-theme="${theme}"] &`]);
			});
		},
	],
};
