"use client";

import {useAuthStore} from "@/store/auth-store";
import {cn} from "@/lib/utils";
import {FaUserLarge} from "react-icons/fa6";
import {FaUsers} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import {IoArrowForwardSharp} from "react-icons/io5";

export default function SelectType() {
	const type = useAuthStore((state) => state.type);
	const setType = useAuthStore((state) => state.setType);
	const step = useAuthStore((state) => state.step);
	const setStep = useAuthStore((state) => state.setStep);
	const setShow = useAuthStore((state) => state.setShowAffiliateModal);

	const handleNext = () => {
		if (type == "affiliate") {
			setShow(true);
			setStep(0);
			window.scrollTo(0, 0);
		} else {
			setStep(step + 1);
			window.scrollTo(0, 0);
		}
	};
	return (
		<div className={cn("space-y-7", {hidden: step != 1})}>
			<h1 className="font-semibold text-3xl text-center">
				How do you want to sign up?
			</h1>
			<div
				className={cn(
					"bg-gray-50 border-[1.5px] p-6 rounded-2xl w-full space-y-2 relative cursor-pointer",
					{
						"border-primary-500 transition-all duration-200 ease-in-out":
							type === "user",
					}
				)}
				onClick={() => setType("user")}
			>
				<div className="size-10 bg-[#23A94A1A] rounded-full flex justify-center items-center">
					<FaUserLarge className="text-primary-60 text-base" />
				</div>
				<div className="space-y-1">
					<h2 className="font-medium text-xl">Sign up as a user</h2>
					<p className="text-sm">
						Save time and spend less by integrating Easiffy to your business. Easiffy is a remote extension of your business.
					</p>
				</div>
				<div
					className={cn(
						"bg-white size-5 rounded-full border-[1.5px] absolute top-4 right-6",
						{"bg-primary-500": type === "user"}
					)}
				></div>
			</div>
			<div
				className={cn(
					"bg-gray-50 border-[1.5px] p-6 rounded-2xl w-full space-y-2 relative cursor-pointer",
					{
						"border-primary-500 transition-all duration-200 ease-in-out":
							type === "affiliate",
					}
				)}
				onClick={() => setType("affiliate")}
			>
				<div className="size-10 bg-[#23A94A1A] rounded-full flex justify-center items-center">
					<FaUsers className="text-primary-60 text-xl" />
				</div>
				<div className="space-y-1">
					<h2 className="font-medium text-xl">
						Sign up as an affiliate
					</h2>
					<p className="text-sm">
						Join our affiliate program today and start earning by
						refering your friends to use our services
					</p>
				</div>
				<div
					className={cn(
						"bg-white size-5 rounded-full border-[1.5px] absolute top-4 right-6",
						{"bg-primary-500": type === "affiliate"}
					)}
				></div>
			</div>
			<div className="flex gap-1 justify-end *:cursor-pointer">
				<div
					className="h-2 bg-primary-60 rounded w-8"
					onClick={() => setStep(1)}
				></div>
				<div
					className="h-2 bg-gray-100 rounded w-8"
					onClick={() => step != 1 && setStep(2)}
				></div>
				<div
					className="h-2 bg-gray-100 rounded w-8"
					onClick={() => step >= 2 && setStep(2)}
				></div>
			</div>
			<div className="flex justify-end">
				<Button
					className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
					size="lg"
					onClick={handleNext}
					disabled={type.trim() === ""}
				>
					Next <IoArrowForwardSharp />
				</Button>
			</div>
		</div>
	);
}
