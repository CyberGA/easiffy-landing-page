import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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
import {forgotPassword} from "@/requests/auth";
import {toast} from "sonner";
import Loader from "../loader";
import {AxiosError} from "axios";
import {useState} from "react";
import {useRouter} from "next/navigation";

const formSchema = z.object({
	email: z
		.string({required_error: "Email is required"})
		.email({message: "Invalid email address"}),
});

export default function ForgotPassword() {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const res = await forgotPassword(values);
			toast(res.data, {
				description: "Check your email for password reset token",
			});
			setOpen(false);
			router.push(`/reset-password?email=${values.email}`);
		} catch (err: AxiosError | any) {
			toast.error(err?.response?.data?.detail);
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<span className="text-primary-600 font-medium underline cursor-pointer">
					Recover Password
				</span>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-gray-50 border rounded-2xl">
				<DialogHeader>
					<DialogTitle>Forgot Password</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
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

						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-2"
								size="lg"
							>
								{form.formState.isSubmitting && <Loader />}
								Submit
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
