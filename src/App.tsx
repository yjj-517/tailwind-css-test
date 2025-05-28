import React, { useState, useEffect } from "react";

const App: React.FC = () => {
	const [themeArr] = useState([
		{
			name: "light",
			type: "light",
		},
		{
			name: "dark",
			type: "dark",
		},
		{
			name: "warm",
			type: "warm",
		},
	]);
	const [theme, setTheme] = useState(() => {
		const storedTheme = sessionStorage.getItem("theme");
		if (storedTheme) return storedTheme;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefersDark ? "dark" : "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		sessionStorage.setItem("theme", theme);
	}, [theme]);
	const toggleTheme = (theme: string) => {
		setTheme(theme);
		sessionStorage.setItem("theme", theme);
	};
	return (
		<div className=" h-screen bg-canvas">
			<div className="text-black dark:text-rose-400 warm:text-sky-500">tailwind-css-test</div>
			{themeArr.map((item, index) => (
				<button
					key={index}
					onClick={() => {
						toggleTheme(item.type);
					}}
					className="w-16 m-4 bg-cyan-600 h-10 rounded-lg"
				>
					{item.name}
				</button>
			))}
		</div>
	);
};

export default React.memo(App);
