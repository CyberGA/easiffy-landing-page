"use client";

import { useState, useEffect } from "react";
import AppLogo from "./app-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TbMenuDeep } from "react-icons/tb";

const navs: Array<{ text: string; href: string }> = [
  { text: "About", href: "/about" },
  { text: "Contact Us", href: "/contact" },
  { text: "Become an affiliate", href: "/become%20affiliate" },
  // { text: "Privacy Policy", href: "/privacy%20policy" },
];

function Header(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    if (window.scrollY > 100) {
      setBg((bg) => true);
    }
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBg((bg) => true);
      } else {
        setBg((bg) => false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 top-0 left-0 right-0 h-20 transition-colors duration-300",
        bg
          ? "bg-white back shadow-sm border-b text-secondary-gray-40"
          : "text-secondary-gray-40"
      )}
    >
      <div className="h-full flex items-center justify-between px-6 sm:px-14">
        <AppLogo />

        <div className="hidden min-[980px]:flex items-center gap-8">
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className={cn(
                "hover:text-primary-4A hover:font-semibold duration-300",
                pathname.startsWith(nav.href)
                  ? "text-primary-4A font-bold"
                  : "text-primary-6B"
              )}
            >
              {nav.text}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden min-[980px]:inline-block font-medium text-primary-6B py-2 px-4 rounded-lg duration-300"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="hidden min-[980px]:inline-block border-2 border-primary-6B text-white font-medium bg-primary-6B py-2 px-4 rounded-lg duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="block min-[980px]:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn("cursor-pointer", "text-custom-black")}
              asChild
            >
              <TbMenuDeep size={24} />
            </SheetTrigger>
            <SheetContent side="top" className="bottom-0">
              <SheetHeader>
                <SheetTitle>
                  <AppLogo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-20 pb-10">
                <div className="flex flex-col items-center gap-8">
                  {navs.map((nav, index) => (
                    <Link
                      key={index}
                      href={nav.href}
                      onClick={() => setOpen((open) => false)}
                      className={cn(
                        "w-full text-center hover:text-primary-4A hover:font-semibold duration-300",
                        pathname.startsWith(nav.href)
                          ? "text-primary-4A font-bold"
                          : "text-primary-6B"
                      )}
                    >
                      {nav.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute z-0 right-5 bottom-10 w-[calc(100%-32px)] space-y-2">
                <Link
                  href="/coming%20soon"
                  className="w-full block text-center text-primary-6B font-medium py-2 px-4"
                >
                  Log In
                </Link>
                <Link
                  href="/coming%20soon"
                  onClick={() => setOpen((open) => false)}
                  className="w-full block text-center border-2 border-primary-6B bg-primary-6B text-white font-medium py-2 px-4 rounded-lg duration-300"
                >
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
