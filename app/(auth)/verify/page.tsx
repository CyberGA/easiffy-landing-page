import {VerificationForm} from "@/components/auth/verify";
import React from "react";

export default async function Verify() {
	return (
		<div className="max-w-lg w-full space-y-7 px-4">
			<VerificationForm />
		</div>
	);
}
