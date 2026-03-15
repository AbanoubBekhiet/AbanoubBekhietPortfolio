import "./globals.css";

export const metadata = {
	title: "abanuob bekhiet portfolio",
	description:
		"hi, i am abanoub bekhiet, a software engineer and a web developer, this is my portfolio website, you can find all my projects and experience here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
