import { RxDoubleArrowDown } from "react-icons/rx";
import Link from "next/link"

function Intro(): React.JSX.Element {
  return (
    <section className="relative z-0 min-h-screen bg-[url('/home-intro-bg.jpg')] bg-no-repeat bg-right-bottom bg-cover py-20 text-white">
      <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 bg-black/70"></div>
      <div className="relative z-[2] flex flex-col items-center justify-center h-[calc(100vh-100px)] w-full px-4 text-center">
        <h1 className="text-3xl md:text-6xl w-full max-w-4xl leading-[1.2] mt-[70px] md:mt-auto">
          Achieve more with <span className="text-primary-60">EASIFFY</span>
        </h1>
        <p className="mt-9 md:mt-5 text-base md:text-2xl text-white/80 w-full max-w-sm sm:max-w-5xl">
          Your one-stop platform for all digital services, Exceptional and
          timely delivery, quality results, and unwavering professionalism. At
          Easiffy, we transform your ideas into reality with precision and care.
          Welcome to Easiffy—an all in one platform for all your digital needs.
        </p>
        <Link
          href="/#services"
          className="mt-[150px] md:mt-auto animate-bounce"
        >
          <RxDoubleArrowDown className="text-white size-16" />
        </Link>
      </div>
    </section>
  );
}

export default Intro;
