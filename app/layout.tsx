import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";

const fontGeistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const fontInter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	// weight: "100 900",
});

export const metadata: Metadata = {
	title: { default: "Example Title", template: "%s | Example.pl" },
	description: "Default description",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		siteName: "Example Example",
		url: "https://example.pl",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body
				className={`${fontGeistSans.variable} ${fontInter.variable} antialiased font-sans`}
			>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
