import Image from "next/image";

function Intro(): React.JSX.Element {
  return (
    <section className="py-20 px-6 text-custom-dark mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 w-full max-w-7xl mx-auto">
        <div className="w-full max-w-md">
          <h1 className="text-6xl w-full max-w-4xl leading-[1.2] text-primary-60 mt-auto">
            ABOUT US
          </h1>
          <p className="mt-5 text-xl text-black/60">
            Focus on what matters and let’s handle the rest . . .
          </p>
        </div>
        <Image src="/about-bg.jpg" alt="About us" width={400} height={200} className="rounded-lg object-cover h-[300px]" />
      </div>
    </section>
  );
}

export default Intro;
