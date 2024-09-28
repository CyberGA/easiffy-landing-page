import React from "react";
import Footer from "@/components/auth/footer";
import Header from "@/components/auth/header";
import Link from "next/link";
import Image from "next/image";
import NavigatingLoading from "@/components/layout/loading";

export default function AuthLayout({
	children,
}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body className="bg-white font-inter min-h-screen relative">
				<NavigatingLoading />
				<Header />
				<div className="h-screen w-screen fixed flex items-center">
					<div className="h-[70%] w-full">
						<img
							src="/Frame2609569.png"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<main className="relative z-[50] flex flex-col gap-8 items-center w-full py-20 md:pb-28 pb-40">
					<div>
						<Link href="/">
							<Image
								src="/logo.png"
								alt="Brand logo"
								width={140.77}
								height={32}
							/>
						</Link>
					</div>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
