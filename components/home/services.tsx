"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";

interface IService {
  title: string;
  desc: string;
  link: string;
  img: string;
}

const serviceList: Array<IService> = [
  {
    title: "Writing Services",
    desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart..",
    link: "#",
    img: "/writing-service.jpeg",
  },
  {
    title: "Writing Services",
    desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart..",
    link: "#",
    img: "/writing-service.jpeg",
  },
  {
    title: "Writing Services",
    desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart..",
    link: "#",
    img: "/writing-service.jpeg",
  },
  {
    title: "Writing Services",
    desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
    link: "#",
    img: "/writing-service.jpeg",
  },
];

const ServiceCard: React.FC<IService> = (service) => {
  return (
    <div className="w-[320px] min-w-[320px] bg-white py-3 px-5 border border-black/10 rounded-md text-custom-black text-left  hover:shadow-lg duration-300 cursor-pointer">
      <div className="w-full h-[220px] overflow-hidden rounded-sm mb-6">
        <Image
          src={service.img}
          alt={service.title}
          width={160}
          height={325}
          className="w-full rounded-sm"
        />
      </div>
      <h2 className="text-xl  font-platypi font-bold text-primary-60">
        {service.title}
      </h2>
      <p className="text-base text-secondary-gray-40 line-clamp-3">
        {service.desc}
      </p>
      <div className="flex gap-1 items-center mt-10 group-hover/img:text-primary-60 duration-300">
        <p className="text-base font-semibold">GET STARTED</p>
        <span className="flex items-center overflow-hidden">
          <IoIosArrowForward className="translate-x-0 group-hover/icon:translate-x-[200%] duration-300" />
          <FaArrowRightLong className="-translate-x-[200%] group-hover/img:-translate-x-[50%] duration-300" />
        </span>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideBack = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -340,
        behavior: "smooth",
      });
    }
  };

  const slideFront = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 340,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="text-custom-black px-5 pt-10 pb-32" id="services">
      <div className="h-10"></div>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center relative">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <div className="flex items-center w-fit">
            <BiSolidRightArrow size={12} />
            <BiSolidRightArrow size={12} className="-ml-1" />
          </div>
          <p>SERVICES WE PROVIDE</p>
        </div>
        <h1 className="text-3xl md:text-5xl my-3">
          Innovative Solutions for Talents
        </h1>
        <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Long established fact that a reader will be distracted by the readable
          content of a page.
        </p>
        <div className="relative w-full max-w-7xl">
          <div
            className="relative flex w-full max-w-6xl gap-5 mt-10 mx-auto overflow-x-auto services__carousel"
            ref={containerRef}
            onScroll={handleScroll}
          >
            {serviceList.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </div>
          {showLeftArrow && (
            <div
              onClick={slideBack}
              className="size-10 rounded-full border text-black flex items-center justify-center absolute z-[1] -left-4 top-1/2 transform -translate-y-1/2 bg-white cursor-pointer"
            >
              <MdKeyboardArrowLeft size={14} />
            </div>
          )}
          {showRightArrow && (
            <div
              onClick={slideFront}
              className="absolute z-[1] -right-4 top-1/2 transform -translate-y-1/2 border text-black flex items-center justify-center cursor-pointer bg-white size-10 rounded-full"
            >
              <MdKeyboardArrowRight size={16} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
