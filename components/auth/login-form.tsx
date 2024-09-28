"use client";

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
import ForgotPassword from "./forgot-password";
import {signIn} from "next-auth/react";
import {useState} from "react";
import {login} from "@/requests/auth";
import Loader from "@/components/loader";
import {toast} from "sonner";

const formSchema = z.object({
	username: z
		.string({required_error: "Email is required"})
		.email({message: "Invalid email address"}),
	password: z
		.string()
		.min(8, {message: "Password must be at least 8 characters long"}) // Add additional validation for complexity if needed
		.max(100, {
			message: "Password cannot be longer than 100 characters",
		}),
});

export default function LoginForm() {
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true);
		try {
			const res = await login(values);

			if (res.status === 200) {
				localStorage.removeItem("user");

				await signIn("credentials", {
					...values,
					redirect: true,
					redirectTo: "/dashboard",
				});

				toast.success("Successfully login!");
				setLoading(false);
			}
			setLoading(false);
		} catch (err: Error | any) {
			if (err.response && err.response.status >= 400) {
				toast.error(err?.response?.data?.detail);
			}
			setLoading(false);
		}
	};

	return (
		<div className="space-y-7">
			<h1 className="font-semibold text-3xl text-center">
				Welcome back!
			</h1>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="username"
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
							name="password"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base flex items-center gap-2">
										Password
									</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="******"
											className="border-neutral-400 border-[1.5px] bg-[#E8F7FF] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary-600 h-12"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<p className="text-sm">
							Can’t Remember? <ForgotPassword />
						</p>

						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
								size="lg"
							>
								{loading && <Loader />} Login
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
