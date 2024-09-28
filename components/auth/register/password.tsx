"use client";

import {useAuthStore} from "@/store/auth-store";
import {Button} from "@/components/ui/button";
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
import {cn, generateUsername, stringToHex} from "@/lib/utils";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {register} from "@/requests/auth";
import {toast} from "sonner";
import Loader from "@/components/loader";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {AxiosError} from "axios";

const formSchema = z
	.object({
		password: z
			.string()
			.min(8, {message: "Password must be at least 8 characters long"}) // Add additional validation for complexity if needed
			.max(100, {
				message: "Password cannot be longer than 100 characters",
			}),
		passwordConfirmation: z.string(),
		terms: z.boolean().refine((value) => value === true, {
			message: "You must accept the terms and conditions",
		}),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		path: ["passwordConfirmation"],
		message: "Passwords don't match",
	});

export default function UserInfo() {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const step = useAuthStore((state) => state.step);
	const setStep = useAuthStore((state) => state.setStep);
	const user = useAuthStore((state) => state.user);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		let data = {
			firstName: user?.fullname.split(" ")[0],
			lastName: user?.fullname.split(" ")[1],
			email: user?.email,
			username: generateUsername(user?.fullname as string),
			referredBy: user?.referredBy,
			phoneNumber: user?.phoneNumber,
			...values,
		};

		try {
			const res = await register(data);
			data = res.data;

			toast.success("Account created successfully!");

			localStorage.setItem(
				"user",
				stringToHex({...data, password: values.password})
			);

			router.push("/verify");
		} catch (err: AxiosError | any) {
			if (err?.response?.data?.detail?.includes("Email")) {
				setStep(2);
				toast.error(err?.response?.data?.detail);
			} else {
				toast.error("Something went wrong!");
			}
		}
	};

	return (
		<div className={cn("space-y-7", {hidden: step != 3})}>
			<h1 className="font-semibold text-3xl text-center">Set Password</h1>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="password"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										New Password
									</FormLabel>
									<FormControl>
										<Input
											type="password"
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
							name="passwordConfirmation"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										Confirm Password
									</FormLabel>
									<FormControl>
										<Input
											type="password"
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
							name="terms"
							render={({field}) => (
								<FormItem>
									<div className="flex items-start gap-4">
										<FormControl className="mt-3">
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className="size-7 rounded-full border-[1.5px] border-neutral-400 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-600"
											/>
										</FormControl>
										<div className="">
											<FormLabel className="text-neutral-500 font-normal">
												By signing up to easiffy you are
												agreeing to our{" "}
												<Link
													href=""
													className="text-primary-600 underline"
												>
													Terms and Conditions
												</Link>{" "}
												and for your personal data to be
												processed in accordance with our{" "}
												<Link
													href=""
													className="text-primary-600 underline"
												>
													Privacy Policy
												</Link>
											</FormLabel>
										</div>
									</div>

									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<div className="flex gap-1 justify-end *:cursor-pointer">
								<div
									className="h-2 bg-primary-60 rounded w-8"
									onClick={() => setStep(1)}
								></div>
								<div
									className="h-2 bg-primary-60 rounded w-8"
									onClick={() => step != 1 && setStep(2)}
								></div>
								<div
									className="h-2 bg-primary-60 rounded w-8"
									onClick={() => step >= 2 && setStep(2)}
								></div>
							</div>
						</div>
						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
								size="lg"
							>
								{form.formState.isSubmitting && <Loader />} Sign
								up
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
