"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import axios from "@/lib/axios";
import { ICategoryContent } from "@/definitions/category.interface";
import { toast } from "sonner";
import LoadingSpinner from "../ui/spinner";
import Link from "next/link";

// const categoryList: Array<IService> = [
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
//   {
//     title: "Writing Services",
//     desc: "Are you looking for a writer that is very proficient in writing and creating stories that catches the heart.",
//     link: "#",
//     img: "/writing-service.jpeg",
//   },
// ];

const CategoryCard: React.FC<ICategoryContent> = (category) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="w-[320px] min-w-[320px] bg-white py-3 pb-10 px-5 border border-black/10 rounded-md text-custom-black text-left  hover:shadow-lg hover:border-black/20 duration-300 cursor-pointer group">
        <div className="w-full h-fit overflow-hidden rounded-sm mb-6">
          <Image
            src={category.attachment.path}
            alt={category.attachment.name}
            width={160}
            height={325}
            objectFit="cover"
            className="w-full max-h-[400px] rounded-sm"
          />
        </div>
        <h2 className="text-xl font-semibold text-primary-60">
          {category.name}
        </h2>
        <p className="text-base text-secondary-gray-40 line-clamp-3 group-hover:line-clamp-none duration-500">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

const Categories: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Array<ICategoryContent>>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  async function getCategories() {
    setLoading(true);
    try {
      const res = await axios.get("/categories");
      if (res.data.content) {
        setCategories(res.data.content);
      }
    } catch (error) {
      toast.error("Could not load the categories");
    } finally {
      setLoading(false);
    }
  }

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
    getCategories();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 1000)
  }, [categories]);

  return (
    <section
      className="text-custom-black px-5 pt-10 pb-32 bg-white"
      id="services"
    >
      <div className="h-10"></div>
      <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto text-center relative">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <div className="flex items-center w-fit">
            <BiSolidRightArrow size={12} />
            <BiSolidRightArrow size={12} className="-ml-1" />
          </div>
          <p>SERVICES WE PROVIDE</p>
        </div>
        <h1 className="text-3xl md:text-5xl my-3 text-primary-6B">
          Check out a few of our services and what we offer
        </h1>
        {/* <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Check out a few of our services and what we offer
        </p> */}
        {loading ? (
          <div className="w-full flex items-center justify-center gap-2 mt-3">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="flex justify-center relative w-full max-w-screen-xl">
            <div
              className="relative flex w-fit max-w-screen-xl gap-5 mt-10 mx-auto overflow-x-auto services__carousel"
              ref={containerRef}
              onScroll={handleScroll}
            >
              {categories.map((category) => (
                <CategoryCard {...category} key={category.id} />
              ))}
            </div>
            {showLeftArrow && (
              <div
                onClick={slideBack}
                className="size-10 rounded-full border text-black flex items-center justify-center absolute z-[1] -left-4 top-1/2 transform -translate-y-1/2 bg-white cursor-pointer"
              >
                <MdKeyboardArrowLeft size={24} />
              </div>
            )}
            {showRightArrow && (
              <div
                onClick={slideFront}
                className="absolute z-[1] -right-4 top-1/2 transform -translate-y-1/2 border text-black flex items-center justify-center cursor-pointer bg-white size-10 rounded-full"
              >
                <MdKeyboardArrowRight size={24} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
