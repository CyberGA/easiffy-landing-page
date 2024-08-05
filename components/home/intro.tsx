import { RxDoubleArrowDown } from "react-icons/rx";
import Link from "next/link"

function Intro(): React.JSX.Element {
  return (
    <section className="relative z-0 h-screen bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover py-20 text-white">
      <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 bg-black/50"></div>
      <div className="relative z-[2] flex flex-col items-center justify-center h-full w-full text-center">
        <h1 className="text-6xl w-full max-w-4xl leading-[1.2] font-semibold mt-auto">
          Powerful Digital Solutions with{" "}
          <span className="text-primary-60">EASIFFY</span>
        </h1>
        <p className="mt-5 text-2xl text-white/80">
          We have a team of talents to deliver the best
        </p>
        <Link href="/#services" className="mt-auto animate-bounce" >
          <RxDoubleArrowDown className="text-white size-16" />
        </Link>
        </div>
    </section>
  );
}

export default Intro;
