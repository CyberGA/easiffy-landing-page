import {Metadata} from "next";
import Intro from "@/components/home/intro";
import Categories from "@/components/categories/categories";
import Effortless from "@/components/home/effortless";
import ClientFeedback from "@/components/home/feedbacks";
import Affiliate from "@/components/home/affiliate";
import HowItWorks from "@/components/home/how-it-works";
import Pricing from "@/components/home/solutions";
import Banner from "@/components/home/banner";
import EasiffyWeb from "@/components/home/web";
import EmpoweringBusiness from "@/components/home/empowering_business";

export const metadata: Metadata = {
	title: "Home | Easiffy",
	description: "Easiffy Home page",
};

export default function Home() {
	return (
		<>
			<Intro />
			<EmpoweringBusiness />
			<Categories />
			<HowItWorks />
			<Banner />
			{/* <Affiliate /> */}
			<Effortless />
			<ClientFeedback />
			<Pricing />
			<EasiffyWeb />
		</>
	);
}
