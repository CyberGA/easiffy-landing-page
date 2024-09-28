import React from "react";
import {FaRegCopyright} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="absolute bottom-0 bg-white w-full z-[100]">
			<div className="flex md:flex-row flex-col gap-4 md:items-center justify-between w-full max-w-7xl md:px-10 px-4 py-6 mx-auto">
				<div>
					<p className="flex items-center gap-2 font-semibold text-sm">
						<FaRegCopyright /> Easiffy
					</p>
				</div>
				<div className="text-sm space-x-5">
					<Link href="#">Download Easiffy app</Link>
					<Link href="#">Terms & Conditions</Link>
					<Link href="#">Privacy Policy</Link>
					<Link href="#">Help Center</Link>
				</div>
			</div>
		</footer>
	);
}
