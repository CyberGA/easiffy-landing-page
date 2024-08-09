import { PiProjectorScreenChartLight } from "react-icons/pi";
import { MdDoubleArrow } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image"


interface IService {
  title: string;
  desc: string;
  link: string;
  icon: React.ReactNode;
  img: string;
}

const serviceList: Array<IService> = [
  {
    title: "Web Development",
    desc: "We build websites that are fast, secure, and easy to manage.",
    link: "#",
    icon: (
      <Image
        src="/design-develop.webp"
        alt="design and develop"
        width={100}
        height={100}
      />
    ),
    img: "/web-dev.jpeg",
  },
  {
    title: "Mobile Development",
    desc: "We build mobile apps that are fast, secure, and easy to manage.",
    link: "#",
    icon: <PiProjectorScreenChartLight size={80} />,
    img: "/web-dev-2.jpeg",
  },
  {
    title: "UI/UX Design",
    desc: "We design user interfaces that are fast, secure, and easy to manage.",
    link: "#",
    icon: <PiProjectorScreenChartLight size={80} />,
    img: "/web-dev.jpeg",
  },
  {
    title: "Digital Marketing",
    desc: "We market your products and services to the right audience.",
    link: "#",
    icon: (
      <Image
        src="/design-box.png"
        alt="design and develop"
        width={100}
        height={100}
      />
    ),
    img: "/web-dev-2.jpeg",
  },
];

const ServiceCard: React.FC<IService> = (service) => {
  return (
    <div className="w-full max-w-md min-[380px]:max-w-xs sm:max-w-sm 2xl:max-w-[250px] bg-white py-14 px-5 border border-black/10 rounded-md text-custom-black text-left  hover:shadow-lg duration-300 group/img group/icon">
      <h2 className="text-xl  font-platypi font-bold text-primary-60">
        {service.title}
      </h2>
      <div className="w-full h-[220px] relative z-0 my-10 overflow-hidden rounded-sm">
        <div className="absolute z-[2] bg-white size-20 rotate-45 -left-10 -top-10"></div>
        <div className="absolute z-[2] bg-white size-20 rotate-45 -right-10 -bottom-10"></div>
        <Image
          src={service.img}
          alt={service.title}
          width={160}
          height={160}
          className="absolute z-[1] w-full -translate-y-full group-hover/img:translate-y-0 duration-300"
        />
        <div className="flex items-center justify-center absolute z-[0] w-full h-full bg-primary-D9/30 text-secondary-gray-40 translate-y-0 group-hover/icon:translate-y-full rounded-sm duration-300">
          {service.icon}
        </div>
      </div>
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
  return (
    <section className="text-custom-black px-5 pt-10 pb-32" id="services">
      <div className="h-10"></div>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <MdDoubleArrow size={16} />
          <p>SERVICES WE PROVIDE</p>
        </div>
        <h1 className="text-5xl my-3">Innovative Solutions for Talents</h1>
        <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Long established fact that a reader will be distracted by the readable
          content of a page.
        </p>
        <div className="flex flex-wrap w-full max-w-4xl 2xl:max-w-full justify-center gap-5 mt-10">
          {serviceList.map((service) => (
            <ServiceCard {...service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
