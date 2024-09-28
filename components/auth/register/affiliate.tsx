'use client'
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Affiliate() {
    const show = useAuthStore((state) => state.showAffiliateModal)
    
	return (
		<div
			className={cn(
				"w-full p-16 hidden border-[1.5px] rounded-2xl bg-gray-50 space-y-4", {"block": show}
			)}
		>
			<h1 className="text-2xl font-semibold">Become an affiliate</h1>
			<p className="text-base">
				You need to down our Mobile App and register as an affiliate
			</p>
			<div className="flex gap-2">
				<Link href="#">
					<Image
						src="/app-store.png"
						width={150}
						height={50}
						alt="app_store"
					/>
				</Link>
				<Link href="#">
					<Image
						src="/google-play.png"
						width={150}
						height={50}
						alt="google-play"
					/>
				</Link>
			</div>
		</div>
	);
}
