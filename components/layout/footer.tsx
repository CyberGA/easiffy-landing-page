import Link from "next/link";
import AppLogo from "./app-logo";
import { SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import DownloadApps from "./download-app"
import { IoIosArrowForward } from "react-icons/io";


const subFooter: Array<{ text: string; href: string }> = [
  {
    text: "Privacy Policy",
    href: "/privacy policy",
  },
  {
    text: "Terms & Conditions",
    href: "/terms and conditions",
  },
];

const socials: Array<{ icon: React.JSX.Element; link: string }> = [
  { icon: <SlSocialFacebook size={18} />, link: "#" },
  { icon: <LuLinkedin size={18} />, link: "#" },
  { icon: <RiTwitterXLine size={18} />, link: "#" },
  { icon: <RiInstagramLine size={18} />, link: "#" },
];

const usefulLinks: Array<{ text: string, link: string }> = [
  { text: "About Us", link: "/about"},
  { text: "Contact Us", link: "/contact"},
  { text: "FAQs", link: "/about/#faqs"},
  { text: "Getting Started", link: "/get started"},
]

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-custom-black/90 text-white">
      <div className="px-6 py-20">
        <div className="flex gap-14 lg:gap-6 justify-between w-full max-w-7xl mx-auto flex-wrap">
          <div className="w-full min-w-[280px] max-w-xs">
            <AppLogo />
            <p className="my-4">
              Have to be repudiated & annoyances accepted. The wise man
              therefore always holds in these matters.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="text-white rounded-md border border-primary-60/20 p-3 hover:bg-primary-60 duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <h1 className="font-medium text-2xl">Download Our App</h1>
              <DownloadApps />
            </div>
          </div>
          <div className="w-full min-w-[280px] max-w-xs overflow-hidden">
            <h1 className="font-medium text-2xl font-recoleta text-left">
              Useful Links
            </h1>
            <div className="flex flex-col gap-3 my-4">
              {usefulLinks.map((data, index) => (
                <Link
                  key={index}
                  href={data.link}
                  className="flex items-center gap-1 text-sm text-secondary-gray-80 hover:text-primary-60 duration-300 group/useful"
                >
                  <IoIosArrowForward
                    size={14}
                    className="text-primary-60 hidden transform -translate-x-full transition-transform duration-700 group-hover/useful:inline group-hover/useful:translate-x-0"
                  />
                  <p>{data.text}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full min-w-[280px] h-fit max-w-sm bg-primary-60 rounded-md px-4 py-6 border border-white/20 shadow-md">
            <h1 className="font-medium text-2xl">Our Newsletter</h1>
            <p className="text-sm my-2">
              Subscribe to our newsletter and receive the latest news about our
              services!
            </p>
            <div className="flex items-center gap-1 bg-white border border-custom-black/40 rounded-md p-1 mt-3">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full text-sm text-custom-black pl-2 placeholder:text-secondary-grey-7F outline-none focus-visible:outline-none"
              />
              <button className="px-2 py-3 bg-custom-black/80 hover:bg-custom-black/90 text-white font-semibold text-xs rounded-md duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 px-6 font-medium text-sm text-secondary-gray-80">
        <div className="flex gap-4 w-full max-w-6xl mx-auto">
          {subFooter.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm hover:underline hover:underline-offset-2 duration-500"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-4 px-6 border-t border-white/20 text-sm text-secondary-gray-80">
        <p className="w-full max-w-6xl mx-auto">
          <span className="text-primary-60">&copy; 2024 Easiffy</span>, All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
