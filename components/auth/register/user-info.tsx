"use client";

import {useAuthStore} from "@/store/auth-store";
import {Button} from "@/components/ui/button";
import {IoArrowForwardSharp} from "react-icons/io5";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {BsExclamationCircle} from "react-icons/bs";
import {PhoneInput} from "react-international-phone";
import "react-international-phone/style.css";
import {PhoneNumberUtil} from "google-libphonenumber";
import {cn} from "@/lib/utils";
import {useEffect} from "react";

const phoneUtil = PhoneNumberUtil.getInstance();

const formSchema = z.object({
	fullname: z
		.string({required_error: "Full name is required"})
		.min(1, {message: "Full name is required"})
		.refine((value) => value.trim().split(" ").length >= 2, {
			message: "Full name must include at least first and last name",
		}),
	email: z
		.string({required_error: "Email is required"})
		.email({message: "Invalid email address"}),
	phoneNumber: z.string().refine(
		(value) => {
			try {
				return phoneUtil.isValidNumber(
					phoneUtil.parseAndKeepRawInput(value)
				);
			} catch (error) {
				return false;
			}
		},
		{message: "Invalid phone number"}
	),
	referredBy: z.optional(z.string()),
});

export default function UserInfo() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullname: "",
			email: "",
			phoneNumber: "",
		},
	});

	const step = useAuthStore((state) => state.step);
	const setStep = useAuthStore((state) => state.setStep);
	const setUser = useAuthStore((state) => state.setUser);

	function onSubmit(values: z.infer<typeof formSchema>) {
		setUser(values);
		setStep(3);
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		setStep(1);
	}, [setStep]);

	return (
		<div className={cn("space-y-7", {hidden: step != 2})}>
			<h1 className="font-semibold text-3xl text-center">
				Tell us about yourself
			</h1>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="fullname"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										Full Name
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your legal full name"
											className="border-neutral-400 border-[1.5px] bg-[#E8F7FF] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary-600 h-12"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										Email Address
									</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="Enter your email address"
											className="border-neutral-400 border-[1.5px] bg-[#E8F7FF] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary-600 h-12"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phoneNumber"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										Phone Number
									</FormLabel>
									<FormControl>
										<PhoneInput
											defaultCountry="ng"
											className="phone-number-input"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="referredBy"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base flex items-center gap-2">
										Referral Code <BsExclamationCircle />
									</FormLabel>
									<FormControl>
										<Input
											placeholder="Referral code"
											className="border-neutral-400 border-[1.5px] bg-[#E8F7FF] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary-600 h-12"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<div className="flex gap-1 justify-end *:cursor-pointer">
								<div
									className="h-2 bg-primary-60 rounded w-8"
									onClick={() => {
										setStep(1);
										window.scrollTo(0, 0);
									}}
								></div>
								<div
									className="h-2 bg-primary-60 rounded w-8"
									onClick={() => step != 1 && setStep(2)}
								></div>
								<div
									className="h-2 bg-gray-100 rounded w-8"
									onClick={() => step >= 2 && setStep(2)}
								></div>
							</div>
						</div>
						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
								size="lg"
							>
								Next <IoArrowForwardSharp />
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
