import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ISolution {
  title: string;
  features: Array<string>;
  desc: string;
}

const solutions: Array<ISolution> = [
  {
    title: "One-off",
    features: [
      "Single Task Execution",
      "Fast Turnaround",
      "No Long-Term Commitment",
      "High-Quality Results",
    ],
    desc: "Easiffy's One-off Services are perfect for businesses that need quick, professional assistance without the need for long-term commitments. Whether it's designing a flyer, fixing a bug, or creating a single business report, these services are focused on delivering high-quality results swiftly. You pay only for the specific service you require, making it a cost-effective solution for those times when you need something done right and fast. Our team of experts ensures that even a single task is handled with the utmost professionalism, delivering results that meet your exact specifications.",
  },
  {
    title: "Contract Services",
    features: [
      "Ongoing Flexibility ",
      "Task Creation Anytime ",
      "Cost-Effective ",
      "Comprehensive Management",
    ],
    desc: "Contract Services at Easiffy provide a flexible and cost-effective solution for businesses that require ongoing digital support. This package is ideal for companies looking for continuous engagement where they can create tasks anytime during the contract period. With streamlined pricing, businesses can efficiently manage their digital needs without worrying about escalating costs. This package ensures comprehensive management of all digital services, providing peace of mind that your business is supported by professionals who understand your long-term goals. Whether it’s managing multiple projects or handling regular updates, Contract Services offer the consistency and reliability your business deserves.",
  },
  {
    title: "Custom Packages",
    features: [
      "Tailored Solutions",
      "Scalable Options",
      "Priority Support",
      "Comprehensive Coverage",
    ],
    desc: "Custom Packages at Easiffy are designed to provide you with solutions tailored precisely to your business's specific needs. Whether you're a startup needing to establish an online presence or an established company looking to upgrade your digital assets, our packages offer scalable options that can grow as your business expands. With priority support, you receive dedicated assistance to ensure all your requirements are met efficiently. These packages cover a comprehensive range of services, ensuring that no aspect of your digital needs is overlooked, allowing you to focus on what you do best—running your business.",
  },
];

export default function Pricing() {
  return (
    <section className="pb-20 pt-10 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div>
          <div className="flex items-center text-sm text-primary-60 font-semibold">
            <div className="flex items-center w-fit">
              <BiSolidRightArrow size={12} />
              <BiSolidRightArrow size={12} className="-ml-1" />
            </div>
            <p>SOLUTION & PLAN</p>
          </div>
          <h1 className="text-3xl md:text-5xl my-3 text-primary-6B">
            Tailored Solutions
          </h1>
        </div>
        <div className="mt-10 w-full max-w-5xl">
          <div className="w-full flex items-center flex-wrap justify-center md:grid md:grid-cols-[repeat(3,_minmax(0,_320px))] gap-6">
            {solutions.map((price, key) => (
              <div
                key={key}
                className=" w-full max-w-full min-w-0 sm:min-w-[200px] sm:max-w-xs bg-white border shadow-md rounded-lg p-6 relative z-0 group/solution overflow-hidden "
              >
                <div className="absolute inset-0 z-0 translate-y-full group-hover/solution:translate-y-0 group-hover/solution:bg-primary-6B transform duration-300"></div>
                <div className="relative z-[1] text-custom-black group-hover/solution:text-white duration-300">
                  <div className="text-lg sm:text-2xl font-semibold text-primary-60">
                    {price.title}
                  </div>
                  <div className="my-8 mb-16">
                    {price.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center justify-between py-3 text-secondary-gray-80 group-hover/solution:text-white/80 duration-300"
                      >
                        <p className="text-sm">{feature}</p>
                        <IoCheckmark size={18} className="text-primary-60" />
                      </div>
                    ))}
                  </div>
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-1 text-base font-semibold text-primary-6B group-hover/solution:text-white hover:text-primary-60 duration-300">
                      <span>SEE MORE</span>
                      <MdOutlineKeyboardArrowRight />
                    </PopoverTrigger>
                    <PopoverContent
                      side="top" align="start"
                      className="bg-whiteF4 text-sm p-4 text-secondary-gray-80  duration-300 border-whiteF4"
                    >
                      {price.desc}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
