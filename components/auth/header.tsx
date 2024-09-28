import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed top-0 bg-white/90 w-full z-[100]">
			<div className="flex items-center justify-end w-full max-w-7xl px-10 py-6 mx-auto">
				<p className="flex items-center gap-2 text-sm">
					Already have an account?{" "}
					<Link href="/login" className="text-primary-60 font-medium">
						Log in
					</Link>
				</p>
			</div>
		</header>
	);
}
