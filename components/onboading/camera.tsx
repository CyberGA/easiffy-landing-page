import {useState, useEffect, useRef} from "react";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {MdOutlineAddAPhoto} from "react-icons/md";
import {MdOutlinePhotoCamera} from "react-icons/md";

type CameraProps = {
	setImage: (image: string) => void;
};

export default function Camera({setImage}: CameraProps) {
	const [open, setOpen] = useState(true);

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const photoRef = useRef<HTMLCanvasElement | null>(null);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: true,
			})
			.then((stream) => {
				let video = videoRef.current as HTMLVideoElement;
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

		const url = photo.toDataURL("image/png");
		setImage(url);
	};

	const closePhoto = () => {
		let photo = photoRef.current as HTMLCanvasElement;
		let ctx = photo?.getContext("2d") as CanvasRenderingContext2D;

		ctx.clearRect(0, 0, photo.width, photo.height);
	};

	useEffect(() => {
		getVideo();
	}, [videoRef, open]);

	return (
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
						<video ref={videoRef} className="rounded-sm"></video>
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
								onClick={() => setOpen(false)}
							>
								Close
							</Button>
						</div>
					</div>
				</div>
				<div className="absolute top-0">
					<canvas ref={photoRef}></canvas>
				</div>
			</DialogContent>
		</Dialog>
	);
}
