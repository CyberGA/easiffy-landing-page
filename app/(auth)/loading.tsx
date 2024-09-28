import {AiOutlineLoading3Quarters} from "react-icons/ai";
const Loading = () => {
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
			<span className="flex items-center gap-2 ">
				<AiOutlineLoading3Quarters className="animate-spin text-xl" />
				Loading...
			</span>
		</div>
	);
};

export default Loading;
