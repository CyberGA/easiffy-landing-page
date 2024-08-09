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
  { text: "Terms and Conditions", href: "/terms%20and%20conditions" },
  { text: "Privacy Policy", href: "/privacy%20policy" },
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
      if (window.scrollY > 100) {
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
        "fixed z-20 top-0 left-0 right-0 h-20 transition-colors duration-300",
        bg
          ? "bg-white back shadow-sm border-b text-secondary-gray-40"
          : pathname == "/"
          ? "bg-transparent text-white"
          : "text-secondary-gray-40"
      )}
    >
      <div className="h-full flex items-center justify-between px-6 sm:px-14">
        <AppLogo />

        <div className="hidden min-[980px]:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "hover:text-primary-4A hover:font-semibold duration-300",
              pathname == "/" ? "text-primary-4A font-bold" : ""
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
                pathname.startsWith(nav.href) ? "text-primary-4A font-bold" : ""
              )}
            >
              {nav.text}
            </Link>
          ))}
        </div>

        {!pathname.startsWith("/get%20started") ? (
          <Link
            href="/get started"
            className="hidden min-[980px]:inline-block border-2 border-primary-4A text-primary-4A font-medium hover:bg-primary-4A hover:text-white py-2 px-4 rounded-lg duration-300"
          >
            Get Started
          </Link>
        ) : (
          <span></span>
        )}
        <div className="block min-[980px]:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                "cursor-pointer",
                bg || pathname !== "/" ? "text-custom-black" : "text-white"
              )}
              asChild
            >
              <TbMenuDeep size={24} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <AppLogo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-20 pb-10">
                <div className="flex flex-col items-center gap-8">
                  <Link
                    href="/"
                    onClick={() => setOpen((open) => false)}
                    className={cn(
                      "w-full text-center hover:text-primary-4A hover:font-semibold duration-300",
                      pathname == "/" ? "text-primary-4A font-bold" : ""
                    )}
                  >
                    Home
                  </Link>
                  {navs.map((nav, index) => (
                    <Link
                      key={index}
                      href={nav.href}
                      onClick={() => setOpen((open) => false)}
                      className={cn(
                        "w-full text-center hover:text-primary-4A hover:font-semibold duration-300",
                        pathname.startsWith(nav.href)
                          ? "text-primary-4A font-bold"
                          : ""
                      )}
                    >
                      {nav.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute z-0 right-5 bottom-10 w-[calc(100%-32px)]">
                <Link
                  href="/get started"
                  onClick={() => setOpen((open) => false)}
                  className="w-full block text-center border-2 border-primary-4A text-primary-4A font-medium hover:bg-primary-4A hover:text-white py-2 px-4 rounded-lg duration-300"
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
