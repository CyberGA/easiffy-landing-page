import {Metadata} from "next";
import Categories from "@/components/categories/categories";
import Effortless from "@/components/home/effortless";
import ClientFeedback from "@/components/home/feedbacks";
import HowItWorks from "@/components/home/how-it-works";
import Pricing from "@/components/home/solutions";
import Banner from "@/components/home/banner";
import EasiffyWeb from "@/components/home/web";
import EmpoweringBusiness from "@/components/home/empowering_business";
import Hero from "@/components/home/hero";
import React from "react";
import WorkWithUs from "@/components/home/work-with-us";
import Industries from "@/components/home/industries";

export const metadata: Metadata = {
	title: "Home | Easiffy",
	description: "Easiffy Home page",
};

export default function Home() {
	return (
    <>
      <Hero />
      <Industries />
      <EmpoweringBusiness />
      <Categories />
      <WorkWithUs />
      <HowItWorks />
      <Banner />
      <Effortless />
      <ClientFeedback />
      <Pricing />
      <EasiffyWeb />
    </>
  );
}
