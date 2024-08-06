import Link from "next/link"
import DownloadApps from "@/components/layout/download-app"
import { MdDoubleArrow } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";


function Intro(): React.JSX.Element {
  return (
    <section className="h-screen bg-[url('/get-started.png')] bg-no-repeat bg-cover py-20 px-6 text-custom-black">
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-24">
        <h1 className="text-4xl ">
          Get Your Project Done By Professionals with
        </h1>
        <h1 className="text-5xl text-primary-60">EASIFFY</h1>
        <p className="text-base mt-2">
          The Simplest Way to Complete Your Project
        </p>
        <div className="w-[280px] mt-8">
          <DownloadApps />
        </div>
        <div className="mt-14 flex flex-col items-center gap-12 text-custom-black/80">
          <h1 className="flex items-center gap-2 text-2xl font-normal font-poppins">
            <span>Use Easiffy on the Web</span>
          </h1>
          <Link href="/get started/#use-web" className="mt-auto animate-bounce">
            <RxDoubleArrowDown className="text-black/60 size-16" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
