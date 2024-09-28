import type {Metadata} from "next";
import "./globals.css";
import {Toaster} from "sonner";

export const metadata: Metadata = {
	title: "Easiffy",
	description: "Easiffy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
