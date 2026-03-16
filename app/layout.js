import { ThemeProvider } from "next-themes";
import ColorModeButton from "./components/ColorModeButton";
import "./globals.css";

export const metadata = {
	title: "abanoub bekhiet ",
	description:
		"hi, i am abanoub bekhiet, a software engineer and a web developer, this is my portfolio website, you can find all my projects and experience here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-white dark:bg-black">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ColorModeButton />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
