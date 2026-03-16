"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ColorModeButton() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<button
			className="fixed top-10 right-10 p-2 rounded-2xl bg-blue text-extra-white cursor-pointer hover:opacity-90 transition-all"
			onClick={toggleTheme}
			aria-label="Toggle Dark Mode"
		>
			{theme === "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
		</button>
	);
}

export default ColorModeButton;
