import { BiSolidRightArrow } from "react-icons/bi";

export default function WorkWithUs(): React.ReactNode {
  return (
    <section className="text-custom-black px-5 pt-10 pb-32 bg-white">
      <div className="h-10"></div>
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center relative">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <div className="flex items-center w-fit">
            <BiSolidRightArrow size={12} />
            <BiSolidRightArrow size={12} className="-ml-1" />
          </div>
          <p>WHY CHOOSE US</p>
        </div>
        <h1 className="text-3xl md:text-5xl my-3 text-primary-6B font-medium">
          Advantanges of Working With Us
        </h1>
        <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Long established fact that a reader will be distracted by the readable
          content of a page.
        </p>
      </div>
    </section>
  );
}
