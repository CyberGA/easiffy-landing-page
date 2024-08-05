"use client";

import { useState, useEffect } from "react"
import AppLogo from "./app-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navs: Array<{text: string, href: string}> = [{text: "About", href: "/about"}, {text: "Contact Us", href: "/contact"}, { text: "FAQs", href: "/faqs"}];

function Header(): React.JSX.Element {
    const pathname = usePathname();
    const [bg, setBg] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setBg(bg => true)
            } else {
                setBg(bg => false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <header
      className={cn(
        "fixed z-20 top-0 left-0 right-0 h-20 transition-colors duration-300",
        bg ? "bg-white back shadow-sm border-b text-secondary-gray-40" : pathname == "/" ? "bg-transparent text-white" : "text-secondary-gray-40"
      )}
    >
      <div className="h-full flex items-center justify-between px-14">
        <AppLogo />

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "hover:text-primary-orange61 hover:font-semibold duration-300",
              pathname == "/"
                ? "text-primary-4A font-bold"
                : ""
            )}
          >
            Home
          </Link>
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className={cn(
                "hover:text-primary-4A hover:font-semibold duration-300",
                pathname.startsWith(nav.href)
                  ? "text-primary-4A font-bold"
                  : ""
              )}
            >
              {nav.text}
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="border-2 border-primary-4A text-primary-4A font-medium hover:bg-primary-4A hover:text-white py-2 px-4 rounded-lg duration-300"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Header;
