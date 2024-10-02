import { BiSolidRightArrow } from "react-icons/bi";

type TSpecialty = { title: string; desc: string };
type THighlight = { text: string; count: string };

const specialties: Array<TSpecialty> = [
  {
    title: "Startups",
    desc: "They need Easiffy to streamline their launch processes, reducing time and costs while maximizing efficiency and focus on growth.",
  },
  {
    title: "Small Businesses",
    desc: "Easiffy boosts operational efficiency, allowing small businesses to focus on core activities while enjoying enhanced productivity and scalability.",
  },
  {
    title: "Entrepreneurs",
    desc: "Easiffy empowers entrepreneurs by simplifying complex tasks, enabling them to focus on innovation and business expansion with reduced stress.",
  },
  {
    title: "Nonprofits",
    desc: "Easiffy ensures nonprofits achieve their goals with maximum impact, offering seamless solutions that free up resources for mission-driven activities.",
  },
];

const highlights: Array<THighlight> = [
  { text: "Projects Completed", count: "2593" },
  { text: "Industry Companies", count: "26" },
  { text: "Projects Ongoing", count: "126" },
];

const Industry: React.FC<TSpecialty> = ({ title, desc }) => {
  return (
    <div className="pb-[30px] pr-4 mb-[30px] border-b border-secondary-gray-7F/50 last-of-type:pb-0 last-of-type:mb-0 last-of-type:border-none">
      <h4 className="text-lg md:text-2xl text-white">{title}</h4>
      <p className="text-base mt-2 font-light text-whiteF4">{desc}</p>
    </div>
  );
};
const Highlight: React.FC<THighlight> = ({ text, count }) => {
  return (
    <div className="flex items-center py-1.5 px-1.5 rounded-lg bg-white w-fit pl-5 lg:pl-14 first-of-type:pl-5 last-of-type:pl-5">
      <p className="text-base text-primary-6B">{text}</p>
      <span className="flex items-center justify-center ml-5 font-semibold w-20 h-[50px] rounded-lg bg-primary-60 text-white">
        {count}
      </span>
    </div>
  );
};

export default function Industries() {
  return (
    <section className="relative z-0 py-20 bg-primary-6B">
      <div className="absolute z-0 inset-y-0 right-0 w-[calc((100%-230px)/2)] bg-[url('/girls.jpg')] overflow-hidden bg-cover bg-no-repeat bg-left-top bg-scroll before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-industries-custom-gradient"></div>
      <div className="relative z-[1] px-6 w-full max-w-7xl mx-auto">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <div className="flex items-center w-fit">
            <BiSolidRightArrow size={12} />
            <BiSolidRightArrow size={12} className="-ml-1" />
          </div>
          <p>SERVICE AREAS</p>
        </div>
        <h1 className="text-3xl md:text-5xl my-3 text-primary-60">
          Our Specialized Industries
        </h1>
        <p className="text-base text-whiteF4 w-full">
          Effortlessly tap into skilled remote talent with our simplified
          hiring.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mt-10">
          <div className="w-full max-w-[700px]  border-r border-secondary-gray-7F/50">
            {specialties.map((specialty, index) => (
              <Industry key={index} {...specialty} />
            ))}
          </div>
          <div className="flex flex-col justify-center lg:items-end w-full lg:max-w-[370px]">
            <h1 className="text-xl my-3 text-white !m-0">Highlights:</h1>
            <div className="flex flex-row flex-wrap lg:flex-col lg:justify-center items-end gap-2.5">
              {highlights.map((highlight, index) => (
                <Highlight key={index} {...highlight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
