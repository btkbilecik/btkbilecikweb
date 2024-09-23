import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import PrelineScript from "@/components/utils/prelineScript";
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Bilgisayar ve Teknoloji Kulübü",
	description:
		"Bilgisayar ve Teknoloji Kulübü - Bilecik Şeyh Edebali Üniversitesi",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr-TR">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-primary`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<PrelineScript />
				</ThemeProvider>
			</body>
		</html>
	);
}
