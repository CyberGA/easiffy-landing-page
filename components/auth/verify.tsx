"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {resendVerificationCode, verify} from "@/requests/auth";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import Loader from "@/components/loader";
import {hexToString, stringToHex} from "@/lib/utils";
import {AxiosError} from "axios";
import {signIn} from "next-auth/react";
import {useEffect, useState} from "react";

const FormSchema = z.object({
	token: z.string().min(6, {
		message: "Your token must be 4 characters.",
	}),
});

export function VerificationForm() {
	const router = useRouter();
	const [user, setUser] = useState<any | null>(null);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			token: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		try {
			const res = await verify({email: user?.email, token: data.token});

			toast.success(res.data);

			const success = await signIn("credentials", {
				username: user?.email,
				password: user?.password,
				redirect: false,
			});

			router.push("/dashboard");
		} catch (err: AxiosError | any) {
			toast.error(err?.response?.data?.detail);
		}
	};

	const resend = () => {
		resendVerificationCode(user?.email)
			.then((res) => toast.success("Check your email for new token!"))
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const user = hexToString(localStorage.getItem("user"));
		if (!user) {
			router.push("/");
		}
		setUser(user);
	}, []);

	return (
		<div className="w-full bg-gray-50 rounded-2xl p-10 sm:px-16 px-4 border space-y-4">
			<div className="space-y-4">
				<h1 className="text-2xl font-semibold">Verify your account</h1>
				<div className="text-gray-500">
					<p className="text-base">Check your email for the code</p>
					<p className="text-sm">
						Can&apos;t find it? Check{" "}
						<span className="font-medium underline">
							Spam Folder
						</span>{" "}
					</p>
				</div>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-fit">
					<h2 className="font-medium text-lg">Verification Code</h2>
					<FormField
						control={form.control}
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
					<p className="text-sm mt-4">
						Didn’t receive the code?{" "}
						<span
							className="text-primary-60 font-medium cursor-pointer"
							onClick={resend}
						>
							Request Again
						</span>
					</p>
					<div className="flex justify-end mt-6">
						<Button
							className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
							size="lg"
						>
							{form.formState.isSubmitting && <Loader />} Verify
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
