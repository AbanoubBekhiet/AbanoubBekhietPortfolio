import { ThemeProvider } from "next-themes";
import ColorModeButton from "./components/ColorModeButton";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
	title: "abanoub bekhiet ",
	description:
		"hi, i am abanoub bekhiet, a software engineer and a web developer, this is my portfolio website, you can find all my projects and experience here",
	verification: {
		google: "tQMqyEQB3Q73XwZHx9spm4bfQiUcioaOaNnsJiuzKHA",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-white dark:bg-black">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ColorModeButton />
					{children}
				</ThemeProvider>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Bounce}
				/>
				<Analytics />
			</body>
		</html>
	);
}
