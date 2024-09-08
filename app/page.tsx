import { Metadata } from "next";
import Intro from "@/components/home/intro"
import Services from "@/components/home/services"
import Effortless from "@/components/home/effortless";
import ClientFeedback from "@/components/home/feedbacks";
import Affiliate from "@/components/home/affiliate";
import HowItWorks from "@/components/home/how-it-works";
import Pricing from "@/components/home/solutions";
import Banner from "@/components/home/banner";
import EasiffyWeb from "@/components/home/web";

export const metadata: Metadata = {
  title: "Home | Easiffy",
  description: "Easiffy Home page",
};

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
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
