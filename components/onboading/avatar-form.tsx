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
import {toast} from "sonner";
import Loader from "@/components/loader";
import {useState, useEffect, useRef, ChangeEvent} from "react";
import {useRouter} from "next/navigation";
import {AxiosError} from "axios";
import {IoArrowForwardSharp} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {GrGallery} from "react-icons/gr";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {MdOutlineAddAPhoto, MdOutlinePhotoCamera} from "react-icons/md";
import {MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES} from "@/lib/utils";
import {useSession} from "next-auth/react";
import {updateAvatar} from "@/requests/onboarding";
import {Session} from "next-auth";

const FormSchema = z.object({
	avatar: z
		.instanceof(File, {message: "Snap or upload a valid photo"})
		.refine((file) => file.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
			"Only .jpg, .jpeg, .png and .webp formats are supported."
		),
});

export default function AvatarForm() {
	const {data: session, update} = useSession();
	const router = useRouter();

	const [image, setImage] = useState<File | null | undefined>(null);
	const [open, setOpen] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const photoRef = useRef<HTMLCanvasElement | null>(null);
	const streamRef = useRef<MediaStream | null>(null);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: true,
			})
			.then((stream) => {
				let video = videoRef.current as HTMLVideoElement;
				streamRef.current = stream;
				video.srcObject = stream;
				video.play();
			})
			.catch((err) => console.error(err));
	};

	const takePhoto = () => {
		const canvasSize = 300; // Output canvas size (square)

		const video = videoRef.current as HTMLVideoElement;
		const photo = photoRef.current as HTMLCanvasElement;

		const videoWidth = video.videoWidth;
		const videoHeight = video.videoHeight;

		// Calculate the cropping for the center square
		const size = Math.min(videoWidth, videoHeight); // Smallest dimension
		const xOffset = (videoWidth - size) / 2;
		const yOffset = (videoHeight - size) / 2;

		photo.width = canvasSize;
		photo.height = canvasSize;

		let ctx = photo.getContext("2d") as CanvasRenderingContext2D;
		ctx.drawImage(
			video,
			xOffset,
			yOffset,
			size,
			size,
			0,
			0,
			canvasSize,
			canvasSize
		);

		photo.toBlob((blob) => {
			if (blob) {
				const file = new File([blob], "snap_avatar.png", {
					type: "image/png",
				});
				setImage(file);
				form.setValue("avatar", file);
				setOpen(false);
			}
		}, "image/png");
	};

	const stopVideo = () => {
		if (streamRef.current) {
			streamRef.current.getTracks().forEach((track) => track.stop());
			streamRef.current = null;
		}
	};

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		try {
			const formData = new FormData();
			formData.append("avatar", values.avatar);

			const res = await updateAvatar(formData);
			const data = session as Session;

			await update({
				...data,
				user: {
					...data.user,
					avatar: res.data?.avatar,
					onboarding: {
						...data.user.onboarding,
						stage2: true,
					},
				},
			});

			toast.success("Avatar updated successfully!");
			router.push("/dashboard");
		} catch (err: AxiosError | any) {
			toast.error(err?.response?.data?.detail);
		}
	};

	useEffect(() => {
		if (open) {
			getVideo();
		}
	}, [open]);

	return (
		<div className="space-y-7 bg-gray-50 p-10 rounded-2xl border">
			<h1 className="font-semibold text-2xl text-center">
				Add a face to your name
			</h1>
			<div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="flex flex-col justify-center items-center gap-6">
							{/* avatar */}
							<div className="size-28 rounded-full bg-gray-200 flex justify-center items-center">
								{image ? (
									<img
										src={URL.createObjectURL(image)}
										alt="_avatar"
										className="object-cover h-full w-full rounded-full"
									/>
								) : (
									<FaRegUser className="text-3xl " />
								)}
							</div>
							<div className="leading-none text-center">
								{session?.user && (
									<>
										<h2 className="font-semibold capitalize text-xl">
											{session?.user.firstName +
												" " +
												session?.user.lastName}
										</h2>
										<p className="text-sm">
											@{session?.user.username}
										</p>
									</>
								)}
							</div>
						</div>
						<div className="flex flex-col gap-2 *:h-14 *:rounded-xl mt-4">
							<Dialog open={open} onOpenChange={setOpen}>
								<DialogTrigger asChild>
									<button className="bg-green-100 text-primary-600 font-medium text-base flex items-center justify-center gap-2">
										<MdOutlineAddAPhoto className="text-2xl" />
										Take a Photo
									</button>
								</DialogTrigger>
								<DialogContent className="w-screen max-w-full h-screen bg-gray-50 border">
									<div className="flex justify-center items-center">
										<div className="w-[300px] min-h-80 overflow-hidden p-4 bg-white rounded-md">
											<video
												ref={videoRef}
												className="rounded-sm"
											></video>
											<div className="mt-4 space-y-2">
												<Button
													className="w-full bg-green-100 text-primary-500 hover:bg-primary-500 hover:text-white flex items-center gap-2"
													onClick={takePhoto}
												>
													<MdOutlinePhotoCamera className="text-xl" />
													Take Photo
												</Button>
												<Button
													className="w-full"
													variant="secondary"
													onClick={() => {
														setOpen(false);
														stopVideo();
													}}
												>
													Close
												</Button>
											</div>
										</div>
									</div>
									<canvas
										ref={photoRef}
										className="hidden"
									></canvas>
								</DialogContent>
							</Dialog>

							<FormField
								control={form.control}
								name="avatar"
								render={({field}) => (
									<FormItem>
										<FormLabel>
											<span className="h-14 rounded-xl bg-gray-300 text-slate-700 font-medium text-base flex items-center justify-center gap-4 cursor-pointer">
												<GrGallery className="text-xl" />
												Choose from Gallery
											</span>
											<FormControl>
												<Input
													type="file"
													accept="image/png,image/jpg,image/jpeg"
													className="hidden"
													onChange={(
														e: ChangeEvent<HTMLInputElement>
													) => {
														field.onChange(
															e.target.files?.[0]
														);
														setImage(
															e.target.files?.[0]
														);
													}}
												/>
											</FormControl>
										</FormLabel>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex justify-end">
							<Button
								className="py-3 hover:bg-primary-400 px-12 text-base rounded-full border-[1.5px] border-primary-600 bg-primary-500 flex items-center gap-4"
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
