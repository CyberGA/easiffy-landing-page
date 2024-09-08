import Image from "next/image";

function Intro(): React.JSX.Element {
  return (
    <section className="py-20 px-6 text-custom-dark mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 w-full max-w-4xl mx-auto">
        <div className="w-full">
          <p className="text-3xl sm:text-5xl w-full max-w-4xl leading-[1.2] font-bold text-primary-60 mt-auto">
            ABOUT US
          </p>
          <p className="mt-5 text-3xl sm:text-6xl font-bold  text-primary-6B">
            Focus on what matters and let’s handle the rest . . .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
