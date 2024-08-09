import Image from "next/image";
import DownloadApps from '@/components/layout/download-app';

export default function Effortless(): React.JSX.Element {
  return (
    <section
      className="py-20 px-6 text-custom-black bg-primary-D9/30"
      id="use-web"
    >
      <h1 className="text-5xl text-center mb-16 text-black/80">
        Making It Effortless For You
      </h1>
      <div className="flex items-center justify-between gap-14 sm:gap-5 flex-col md:flex-row w-full max-w-5xl mx-auto p-10 rounded-lg">
        <Image
          src="/mobile-screen.png"
          alt="Mobile applications"
          width={400}
          height={400}
          className="h-auto"
        />
        <div className="w-full max-w-md">
          <h4 className="text-4xl text-custom-black/80">Streamlined Access</h4>
          <p className="text-base mt-2">
            Start projects or contracts with just a few clicks, all from the
            convenience of your mobile device.
          </p>
          <div className="w-[280px] mt-8">
            <DownloadApps />
          </div>
        </div>
      </div>
    </section>
  );
}
