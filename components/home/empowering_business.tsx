import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";

export default function EmpoweringBusiness(): React.ReactNode {
  return (
    <section className="text-custom-black px-5 pt-10 bg-white">
      <div className="h-10"></div>
      <div className="w-full max-w-screen-2xl mx-auto relative">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div className="flex flex-col gap-10 w-full max-w-[800px]">
            <div>
              <div className="flex items-center gap-3 text-sm text-primary-60 font-medium mt-10">
                <div className="flex w-fit">
                  <BiSolidRightArrow size={12} />
                  <BiSolidRightArrow size={12} className="-ml-1" />
                </div>
                <h6>WELCOME TO EASIFFY</h6>
              </div>
              <h1 className="text-2xl md:text-4xl mt-3 md:mb-[46px] text-primary-6B font-bold">
                Empowering businesses
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full max-w-[360px] h-[450px] rounded-md overflow-hidden">
                <Image
                  src="/cool-guy.jpg"
                  placeholder="blur"
                  blurDataURL="/cool-guy.jpg"
                  priority
                  alt="empowering businesses"
                  width={360}
                  height={450}
                  className="relative z-0 w-full min-w-[250px] max-w-[360px] h-[450px] object-cover hover:scale-110 duration-700"
                />
              </div>
              <div className="w-full max-w-[360px] h-[450px] rounded-md overflow-hidden">
                <Image
                  src="/Atrmdw.jpg"
                  placeholder="blur"
                  blurDataURL="/Atrmdw.jpg"
                  priority
                  alt="empowering businesses"
                  width={360}
                  height={450}
                  className="relative z-0 w-full min-w-[250px]  max-w-[360px] h-[450px] object-cover hover:scale-110 duration-700"
                />
              </div>
            </div>
            <div className="block xl:hidden space-y-4 max-w-[760px]">
              <h1 className="text-2xl md:text-4xl text-primary-6B font-bold">
                Discover flexible options that matches your day-to-day needs
              </h1>
              <p className="text-base text-secondary-gray-7F mx-auto">
                Empowering businesses with expert one-off solutions and tailored
                contract services, driving digital success through innovative
                strategies and seamless execution.
              </p>
            </div>
          </div>
          <div>
            <div className="hidden xl:block w-full max-w-[500px] space-y-4">
              <h1 className="text-lg md:text-4xl text-primary-6B font-bold">
                Discover flexible options that matches your day-to-day needs
              </h1>
              <p className="text-base text-secondary-gray-7F mx-auto">
                Empowering businesses with expert one-off solutions and tailored
                contract services, driving digital success through innovative
                strategies and seamless execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
