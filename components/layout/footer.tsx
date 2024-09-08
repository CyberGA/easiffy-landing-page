import Link from "next/link";
import AppLogo from "./app-logo";
import { SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine, RiInstagramLine } from "react-icons/ri";
import DownloadApps from "./download-app";
import { IoIosArrowForward } from "react-icons/io";

type FooterUsefulLinks = {
  title: string;
  links: Array<{ text: string; link?: string }>;
};

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

const usefulLinks: Array<FooterUsefulLinks> = [
  {
    title: "Join our team",
    links: [
      { text: "Careers", link: "#" },
      { text: "Become an affiliate", link: "/become affiliate" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "Email", link: "/contact" },
      { text: "Phone Number", link: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Us", link: "/about" },
      { text: "How it works", link: "/#how_it_works" },
      { text: "FAQs", link: "/faqs" },
    ],
  },
  {
    title: "Product",
    links: [
      { text: "Contracts", link: "#" },
      { text: "One-off", link: "#" },
      { text: "User Customised", link: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", link: "/privacy policy" },
      { text: "Terms of Service", link: "#" },
      { text: "Refund policy", link: "#" },
      { text: "Affiliate and Rewards", link: "#" },
    ],
  },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-primary-6B text-white">
      <div className="px-7 py-20">
        <div className="flex gap-14 lg:gap-6 justify-between w-full max-w-7xl mx-auto flex-wrap">
          <div className="w-full min-w-[280px] max-w-xs">
            {/* <AppLogo /> */}
            <h4 className="my-4 font-bold text-2xl">Follow Us</h4>
            <div className="flex items-center gap-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="text-white rounded-md border border-primary-60 p-3 bg-primary-60 hover:scale-105 duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="my-8">
              <h1 className="font-semibold text-2xl">Download Our App</h1>
              <DownloadApps />
            </div>
            {/* <Newsletter /> */}
          </div>
          <div className="w-full min-w-[280px] max-w-xs overflow-hidden">
            {
              // Useful Links
              usefulLinks.slice(0, 3).map((item, index) => (
                <div key={index} className="my-4">
                  <h1 className="font-medium text-lg font-platypi text-left">
                    {item.title}
                  </h1>
                  <div className="flex flex-col gap-1 my-4">
                    {item.links.map((data, index) =>
                      data.link ? (
                        <Link
                          key={index}
                          href={data.link ?? "#"}
                          className="flex items-center gap-1 text-sm text-white/80 duration-300 group/useful"
                        >
                          <IoIosArrowForward
                            size={14}
                            className="text-white hidden transform -translate-x-full transition-transform duration-700 group-hover/useful:inline group-hover/useful:translate-x-0"
                          />
                          <p>{data.text}</p>
                        </Link>
                      ) : (
                        <span
                          key={index}
                          className="flex items-center gap-1 text-sm text-white/80 duration-300"
                        >
                          {data.text}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full min-w-[280px] max-w-xs overflow-hidden">
            {
              // Useful Links
              usefulLinks.slice(3).map((item, index) => (
                <div key={index} className="my-4">
                  <h1 className="font-medium text-lg font-platypi text-left">
                    {item.title}
                  </h1>
                  <div className="flex flex-col gap-1 my-4">
                    {item.links.map((data, index) =>
                      data.link ? (
                        <Link
                          key={index}
                          href={data.link ?? "#"}
                          className="flex items-center gap-1 text-sm text-white/80 duration-300 group/useful"
                        >
                          <IoIosArrowForward
                            size={14}
                            className="text-white hidden transform -translate-x-full transition-transform duration-700 group-hover/useful:inline group-hover/useful:translate-x-0"
                          />
                          <p>{data.text}</p>
                        </Link>
                      ) : (
                        <span
                          key={index}
                          className="flex items-center gap-1 text-sm text-white/80 duration-300"
                        >
                          {data.text}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="py-3 px-6 font-medium text-sm text-white/80">
        <div className="flex gap-4 w-full max-w-7xl mx-auto">
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
      <div className="py-4 px-6 border-t border-white/20 text-sm text-white/80">
        <p className="w-full max-w-7xl mx-auto">
          <span>&copy; 2024 Easiffy</span>, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
