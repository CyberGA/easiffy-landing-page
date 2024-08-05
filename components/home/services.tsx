import { MdDoubleArrow } from "react-icons/md";

const Services: React.FC = () => {
  return (
    <section className="text-custom-black px-5 pt-10 pb-32" id="services">
      <div className="h-10"></div>
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto text-center">
        <div className="flex items-center text-sm text-primary-60 font-semibold mt-10">
          <MdDoubleArrow size={16} />
          <p>SERVICES WE PROVIDE</p>
        </div>
        <h1 className="text-5xl my-3">Innovative Solutions for Talents</h1>
        <p className="text-base text-secondary-gray-7F w-full max-w-md mx-auto">
          Long established fact that a reader will be distracted by the readable
          content of a page.
        </p>
      </div>
    </section>
  );
};

export default Services;
