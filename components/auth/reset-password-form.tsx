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
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {
	register,
	resetPassword,
	verifyPasswordResetToken,
} from "@/requests/auth";
import {toast} from "sonner";
import Loader from "@/components/loader";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {cn} from "@/lib/utils";
import {AxiosError} from "axios";

const formSchema = z
	.object({
		password: z
			.string({required_error: "Password is required"})
			.min(8, {message: "Password must be at least 8 characters long"}) // Add additional validation for complexity if needed
			.max(100, {
				message: "Password cannot be longer than 100 characters",
			}),
		passwordConfirmation: z.string({
			required_error: "Password confirmation is required",
		}),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		path: ["passwordConfirmation"],
		message: "Passwords don't match",
	});

const tokenFormSchema = z.object({
	token: z.string({required_error: "Code is required"}).min(6, {
		message: "Your code must be 6 characters.",
	}),
	email: z.optional(z.string()),
});

export default function ResetPasswordForm() {
	const [show, setShow] = useState(false);
	const searchParams = useSearchParams();
	const email = searchParams.get("email");
	const router = useRouter();

	if (!email) {
		router.push("/login");
	}
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const token = localStorage.getItem("reset_password_token");
		try {
			const res = await resetPassword({
				email: email,
				token: token,
				password: values.password,
			});
			if (res.status == 200) {
				toast.success(res.data?.message);
				localStorage.removeItem("reset_password_token");
				router.push("/login");
			}
		} catch (err: AxiosError | any) {
			if (err?.response && err?.response?.data) {
				toast.error(err?.response?.data?.detail);
			}
		}
	};

	return (
		<div className="space-y-7 bg-gray-50 p-10 border rounded-2xl">
			<h1 className="font-semibold text-2xl">Reset Password</h1>
			<VerifyToken email={email} show={show} setShow={setShow} />
			<div className={cn("", {hidden: !show})}>
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

						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
								size="lg"
							>
								{form.formState.isSubmitting && <Loader />}{" "}
								Submit
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}

function VerifyToken({email, show, setShow}: any) {
	const tokenForm = useForm<z.infer<typeof tokenFormSchema>>({
		resolver: zodResolver(tokenFormSchema),
		defaultValues: {
			email: email,
		},
	});

	const onSubmit = async (values: z.infer<typeof tokenFormSchema>) => {
		try {
			const res = await verifyPasswordResetToken(values);
			if (res.status == 200) {
				toast.success("Token successfully verified");
				setShow(true);
				localStorage.setItem("reset_password_token", res.data?.token);
			}
		} catch (err: AxiosError | any) {
			if (err?.response && err?.response?.data) {
				toast.error(err?.response?.data?.detail);
			}
		}
	};
	return (
		<div className={cn("", {hidden: show})}>
			<Form {...tokenForm}>
				<form
					onSubmit={tokenForm.handleSubmit(onSubmit)}
					className="w-fit"
				>
					<div className="text-gray-500 mb-4">
						<p className="text-base">
							Check your email for the code
						</p>
						<p className="text-sm">
							Can&apos;t find it? Check{" "}
							<span className="font-medium underline">
								Spam Folder
							</span>{" "}
						</p>
					</div>
					<h2 className="font-medium text-base">Verification code</h2>
					<FormField
						control={tokenForm.control}
						name="token"
						render={({field}) => (
							<FormItem>
								<FormControl>
									<InputOTP maxLength={6} {...field}>
										<InputOTPGroup>
											<InputOTPSlot
												index={0}
												className="sm:size-12 font-bold text-lg border-neutral-400"
											/>
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot
												index={1}
												className="sm:size-12 font-bold text-lg border-neutral-400"
											/>
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot
												index={2}
												className="sm:size-12 font-bold text-lg border-neutral-400"
											/>
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot
												index={3}
												className="sm:size-12 font-bold text-lg border-neutral-400 "
											/>
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot
												index={4}
												className="sm:size-12 font-bold text-lg border-neutral-400 "
											/>
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot
												index={5}
												className="sm:size-12 font-bold text-lg border-neutral-400 "
											/>
										</InputOTPGroup>
									</InputOTP>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-end mt-6">
						<Button
							className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
							size="lg"
						>
							{tokenForm.formState.isSubmitting && <Loader />}{" "}
							Verify
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
