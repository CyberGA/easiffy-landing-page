"use client";

import { useState, useRef, useEffect } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineMailOutline,
} from "react-icons/md";

import Image from "next/image";
import axios from "@/lib/axios";
import { ICategoryContent } from "@/definitions/category.interface";
import { toast } from "sonner";
import LoadingSpinner from "../ui/spinner";
import Link from "next/link";

const SubCategoryCard: React.FC<ICategoryContent> = (category) => {
  return (
    <div className="w-[320px] min-w-[320px] min-h-[545px] h-fit bg-white py-3 px-5 border border-black/10 rounded-md text-custom-black text-left  hover:shadow-lg hover:border-black/20 duration-300 cursor-pointer group">
      <div className="w-full h-[325px] overflow-hidden rounded-sm mb-6">
        <Image
          src={category.attachment.path}
          alt={category.attachment.name}
          width={180}
          height={325}
          objectFit="cover"
          className="w-full h-[325px] rounded-sm border object-cover border-black/5"
        />
      </div>
      <div className="line-clamp-3 group-hover:line-clamp-none space-y-2">
        <h2 className="text-xl font-semibold text-primary-60">
          {category.name}
        </h2>
        <p className="text-base text-secondary-gray-40 duration-500">
          {category.description}
        </p>
      </div>
      <div className="mt-10">
        <Link href="/contact">
          <p className="w-full flex items-center justify-center gap-2.5 text-base font-medium bg-whiteF4 text-primary-6B py-3 px-6 rounded-lg">
            <MdOutlineMailOutline size={24} />
            Send us a message
          </p>
        </Link>
      </div>
    </div>
  );
};

export default function SubCategories({ id }: { id: string }): React.ReactNode {
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<ICategoryContent | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  async function getCategory() {
    setLoading(true);
    try {
      const res = await axios.get(`/categories/${id}`);
        if (res.data) {
        const category = res.data as ICategoryContent;
        if (category) {
          setCategory(category);
        }
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
    getCategory();
  }, []);

  useEffect(() => {
    handleScroll();
  }, [category]);

  return (
    <section
      className="text-custom-black px-5 mt-16 pb-32 bg-white"
    >
      <div className="h-10"></div>
      {loading ? (
        <div className="w-full flex items-center justify-center gap-2 mt-3">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto relative">
          <h1 className="text-3xl md:text-5xl my-3 text-center text-primary-6B">
            {category?.name}
          </h1>
          <p className="text-base text-secondary-gray-7F text-center w-full max-w-lg mx-auto">
            {category?.description}
          </p>
          <div className="flex justify-center relative w-full max-w-screen-xl">
            <div
              className="relative flex w-fit max-w-screen-xl gap-5 mt-10 mx-auto overflow-x-auto services__carousel"
              ref={containerRef}
              onScroll={handleScroll}
            >
              {(category?.subs?.length ?? 0) > 0 ? (
                category?.subs?.map((category) => (
                  <SubCategoryCard {...category} key={category.id} />
                ))
              ) : (
                <p className="text-base text-primary-6B">
                  No Service Available
                </p>
              )}
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
        </div>
      )}
    </section>
  );
}
