import Link from "next/link";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface IPricing {
  tag: string;
  title: string;
  caption: string;
  features: Array<string>;
  link: string;
}

const prices: Array<IPricing> = [
  {
    tag: "16.8",
    title: "Temporary",
    caption: "Highlight Something Here",
    features: [
      "Candidate Sourcing",
      "Resume Management",
      "Candidate Tracking",
      "Integrations",
    ],
    link: "#",
  },
  {
    tag: "99.5",
    title: "Contract",
    caption: "Highlight Something Here",
    features: [
      "Candidate Matching",
      "Security Control",
      "Portal Management",
      "Assessments",
    ],
    link: "#",
  },
  {
    tag: "35",
    title: "Contract",
    caption: "Highlight Something Here",
    features: [
      "Candidate Sourcing",
      "Resume Management",
      "Candidate Tracking",
      "Integrations",
    ],
    link: "#",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div>
          <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
            <div className="flex items-center w-fit">
              <BiSolidRightArrow size={12} />
              <BiSolidRightArrow size={12} className="-ml-1" />
            </div>
            <p>PRICING & PLAN</p>
          </div>
          <h1 className="text-3xl md:text-5xl my-3">
            Tailored Pricing Solutions
          </h1>
        </div>
        <div className="mt-10 w-full max-w-7xl">
          <div className="w-full flex items-center flex-wrap justify-center gap-6">
            {prices.map((price) => (
              <div
                key={price.tag}
                className=" w-full max-w-full min-w-0 sm:min-w-[200px] sm:max-w-sm bg-white border shadow-md rounded-lg p-6 relative z-0 group/price overflow-hidden "
              >
                <div className="absolute inset-0 z-0 translate-y-full group-hover/price:translate-y-0 group-hover/price:bg-primary-60 transform duration-300"></div>
                <div className="relative z-[1] text-custom-black group-hover/price:text-white duration-300">
                  <p className="text-3xl sm:text-5xl font-semibold text-primary-60 group-hover/price:text-white duration-300">
                    <sup className="text-base text-secondary-gray-80 group-hover/price:text-white duration-300">
                      $
                    </sup>
                    {price.tag}
                    <sub className="text-base text-secondary-gray-80 group-hover/price:text-white/80 duration-300">
                      /MONTHLY
                    </sub>
                  </p>
                  <div className="text-lg font-semibold my-3">
                    {price.title}
                  </div>
                  <div className="my-8">
                    {price.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center justify-between py-3 text-secondary-gray-80 group-hover/price:text-white/80 duration-300"
                      >
                        <p className="text-sm">{feature}</p>
                        <IoCheckmark
                          size={18}
                          className="text-primary-60 group-hover/price:text-white duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <Link
                    href={price.link}
                    className="flex items-center gap-1 text-base font-semibold text-secondary-gray-40 group-hover/price:text-white duration-300"
                  >
                    <span>EXPLORE MORE</span>
                    <MdOutlineKeyboardArrowRight />
                  </Link>
                  <p className="text-sm text-secondary-gray-40 mt-8">
                    *{price.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
