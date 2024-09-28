import React from "react";
import Link from "next/link";
export default function Navigation() {
	return (
		<div>
			<Link href="/register">Register</Link>
			<Link href="/register">Login</Link>
		</div>
	);
}
