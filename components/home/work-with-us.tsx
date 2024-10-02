import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  ImArrowDownLeft2,
  ImArrowUpLeft2,
  ImArrowDownRight2,
  ImArrowUpRight2,
} from "react-icons/im";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const advantages: Array<{ title: string; icon: IconType; sn: string }> = [
  {
    title: "Quick turnaround",
    icon: ImArrowDownRight2,
    sn: "01",
  },
  {
    title: "Affordable prices",
    icon: FaArrowRightLong,
    sn: "03",
  },
  {
    title: "Topnotch services",
    icon: ImArrowUpRight2,
    sn: "05",
  },
  {
    title: "Personalized solutions",
    icon: ImArrowDownLeft2,
    sn: "02",
  },
  {
    title: "Reliable support",
    icon: FaArrowLeftLong,
    sn: "04",
  },
  {
    title: "Realtime tracking ",
    icon: ImArrowUpLeft2,
    sn: "06",
  },
];

export default function WorkWithUs(): React.ReactNode {
  return (
    <section className="text-custom-black px-5 pt-10 bg-white pb-20 xl:pb-0">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center relative">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <div className="flex items-center w-fit">
            <BiSolidRightArrow size={12} />
            <BiSolidRightArrow size={12} className="-ml-1" />
          </div>
          <p>WHY CHOOSE US</p>
        </div>
        <h1 className="text-3xl md:text-5xl my-3 text-primary-6B">
          Advantanges of Working With Us
        </h1>
        <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Long established fact that a reader will be distracted by the readable
          content of a page.
        </p>
        <div className="relative flex flex-col xl:flex-row gap-10 xl:gap-0 items-center mt-10 xl:mt-5">
          <div className="relative z-[2] flex flex-col items-center space-y-[50px] w-full max-w-xs xl:-mr-24">
            {advantages.slice(0, 3).map((ad, index) => {
              const Component = ad.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4",
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className="flex items-center gap-5 relative rounded-md py-2 px-2 pl-4 bg-whiteF4">
                    <p className="text-xl">{ad.title}</p>
                    <span className="flex items-center justify-center rounded-lg bg-primary-6B min-w-[50px] min-h-[50px]">
                      <Component size={24} className="text-primary-60" />
                    </span>
                  </div>
                  <p className="font-bold font-nohemi text-4xl text-whiteF4 w-max">
                    {ad.sn}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex justify-center rounded-full xl:-mb-[150px] relative z-[1] size-[640px] before:content-[''] before:absolute before:top-2.5 before:bottom-0 before:inset-x-0 before:rounded-full before:border before:mx-auto before:z-[-1] after:content-[''] after:absolute after:inset-y-0 after:left-2.5 after:right-0 after:rounded-full after:border after:mx-auto after:z-[-1]">
            <div className="w-fit pt-[50px]">
              <Image
                src="/why-choose-us.png"
                blurDataURL="/why-choose-us.png"
                alt="work with us"
                placeholder="blur"
                width={350}
                height={460}
                className=""
              />
            </div>
          </div>
          <div className="relative z-[2] flex flex-col items-center space-y-[50px] w-full max-w-xs xl:-ml-24">
            {advantages.slice(3).map((ad, index) => {
              const Component = ad.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4",
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <div className="flex items-center gap-5 relative rounded-md py-2 px-2 pl-4 bg-whiteF4">
                    <p className="text-xl">{ad.title}</p>
                    <span className="flex items-center justify-center rounded-lg bg-primary-6B min-w-[50px] min-h-[50px]">
                      <Component size={24} className="text-primary-60" />
                    </span>
                  </div>
                  <p className="font-bold font-nohemi text-4xl text-whiteF4 w-max">
                    {ad.sn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
