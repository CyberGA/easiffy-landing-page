"use client";

import { useState, useEffect } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { cn } from "@/lib/utils"


const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false)

    const goToTop = () => {
        window.scrollTo({
            top: 0
        });
    }

     useEffect(() => {
        const handleVisibility = () => {
            if(window.scrollY > 100) {
                setVisible(visible => true)
            } else {
                setVisible(visible => false)
            }
        }

        window.addEventListener("scroll", handleVisibility);

        return () => {
            window.removeEventListener("scroll", handleVisibility)
        }
    }, [])

    return (
      <button type="button"
        onClick={goToTop}
        className={cn(
          "fixed z-20 bottom-10 right-10 p-4 bg-primary-60 text-white rounded-lg shadow-md border border-black/5 duration-300",
          visible ? "block" : "hidden"
        )}
      >
        <RxDoubleArrowUp size={24} />
      </button>
    );
}

export default ScrollToTop;
