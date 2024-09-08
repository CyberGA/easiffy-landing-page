import { RxDoubleArrowDown } from "react-icons/rx";
import Link from "next/link"
import Image from "next/image";

function Intro(): React.JSX.Element {
  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-[url('/home-intro-bg.jpg')] bg-no-repeat bg-right-bottom bg-cover pt-10">
      <div className="relative w-full max-w-4xl bg-whiteF4/40">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-primary-6B w-full max-w-2xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl w-full leading-[1.2]">
            Achieve more with <span className="text-primary-60">EASIFFY</span>
          </h1>
          <p className="mt-12 md:mt-5 text-base w-full">
            Your one-stop platform for all digital services, Exceptional and
            timely delivery, quality results, and unwavering professionalism. At
            Easiffy, we transform your ideas into reality with precision and
            care. Welcome to Easiffy—an all in one platform for all your digital
            needs.
          </p>
          <div className="w-full mt-12">
            <Link
              href="#"
              className="border-2 border-primary-6B text-white font-medium bg-primary-6B py-3 px-4 rounded-lg duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/curve.svg"
        height={117}
        width={4424}
        className="hidden sm:block absolute z-[1] bottom-0 inset-[auto_0%_0%_auto] max-w-none object-cover"
        alt="curve"
      />
    </section>
  );
}

export default Intro;
