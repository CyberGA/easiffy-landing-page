import {CgSpinner} from "react-icons/cg";

import React from "react";
import {cn} from "@/lib/utils";

export default function Loader({className}: {className?: string}) {
	return (
		<CgSpinner
			className={cn("text-white text-2xl animate-spin", className)}
		/>
	);
}
