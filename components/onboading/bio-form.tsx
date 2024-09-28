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
import {toast} from "sonner";
import Loader from "@/components/loader";
import {useRouter} from "next/navigation";
import {AxiosError} from "axios";
import {Textarea} from "@/components/ui/textarea";
import {IoArrowForwardSharp} from "react-icons/io5";
import {updateBio} from "@/requests/onboarding";
import {signIn, useSession} from "next-auth/react";
import {Session} from "next-auth";

const FormSchema = z.object({
	bio: z
		.string({required_error: "Bio is required"})
		.min(10, {
			message: "Bio must be at least 10 characters.",
		})
		.max(160, {
			message: "Bio must not be longer than 30 characters.",
		}),
});

export default function BioForm() {
	const {data: session, update} = useSession();

	const router = useRouter();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			const res= await updateBio(values);
			const data = session as Session;

			await update({
				...data,
				user: {
					...data.user,
					bio: values.bio,
					onboarding: {
						...data.user.onboarding,
						stage1: true
					}
				},
			});

			toast.success("Bio successfully updated!")

			router.push("/onboarding/avatar");
		} catch (err: AxiosError | any) {
			toast.error(err?.response?.data?.detail);
		}
	};

	return (
		<div className="space-y-7 bg-gray-50 p-10 rounded-2xl border">
			<h1 className="font-semibold text-2xl">Write briefly about you</h1>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="bio"
							render={({field}) => (
								<FormItem>
									<FormLabel className="text-base">
										Write your bio
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Briefly describe yourself"
											className="resize-none border-neutral-400 border-[1.5px] bg-[#E8F7FF] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-primary-600 h-20"
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
								{form.formState.isSubmitting && <Loader />} Next{" "}
								<IoArrowForwardSharp />
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
