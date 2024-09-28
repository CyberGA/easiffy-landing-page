import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="font-inter min-h-screen bg-blue-50 w-full max-w-7xl mx-auto">
			<div className="grid lg:grid-cols-12 items-center md:px-10 px-4 place-content-center">
				<div className="col-span-7 w-full flex flex-col gap-4 mt-[8rem]">
					<span className="flex items-center gap-1 bg-white px-4 py-2 rounded-full border-[1.5px] font-medium border-green-400 w-fit md:text-xs text-[8px]">
						Most efficient and pocket friendly digital service
						provider{" "}
						<Image
							src="/1st_medal.png"
							alt="_medal"
							width={20}
							height={20}
						/>
					</span>
					<h1 className="font-bold font-nohemi lg:text-6xl max-lg:text-5xl text-[1.9rem] lg:leading-tight max-lg:leading-[1.2]">
						All in one platform for all your{" "}
						<span className="relative">
							<span className="relative z-20">digital needs</span>
							<span className="absolute max-[400px]:hidden left-3 bottom-1 bg-[#67ef8e] lg:h-[50px] h-6 w-[93%] z-10 rounded-xl -rotate-2"></span>
						</span>
					</h1>
					<p className="font-medium lg:text-xl text-base text-gray-600 max-w-[80%]">
						Your one-stop platform for all digital services,
						Exceptional and timely delivery, quality results, and
						unwavering professionalism.
					</p>

					<Link href="/register" className="">
						<button className="bg-primary-500 rounded-full p-3 text-base text-white font-medium px-14">
							Get Started
						</button>
					</Link>
				</div>
				<div className="col-span-5 w-full relative max-md:hidden">
					<img
						src="/Frame1000008114.png"
						alt=""
						className="w-full h-full transform scale-[1.2] relative lg:-left-4 left-8 lg:top-14"
					/>
				</div>
			</div>
		</div>
	);
}
