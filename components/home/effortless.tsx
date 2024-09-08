import Image from "next/image";
import DownloadApps from '@/components/layout/download-app';

export default function Effortless(): React.JSX.Element {
  return (
    <section
      className="pt-20 px-6 text-custom-black border-b bg-primary-D9/20"
      id="use-web"
    >
      <h1 className="text-3xl md:text-5xl text-center mb-16 text-primary-6B">
        Making It Effortless For You
      </h1>
      <div className="flex items-center justify-between gap-14 sm:gap-5 flex-col-reverse md:flex-row w-full max-w-5xl mx-auto px-10 rounded-lg">
        <Image
          src="/mobile-screen.png"
          alt="Mobile applications"
          width={400}
          height={400}
          className="h-auto"
        />
        <div className="w-full max-w-md pb-4">
          <h4 className="text-3xl md:text-4xl text-primary-60">
            Do on the go
          </h4>
          <p className="text-base mt-2 font-light text-primary-6B">
            Enjoy our full range of services wherever you are. Enhance your
            business with seamless, on-the-go support. Our mobile app delivers
            comprehensive digital solutions right to your fingertips, anytime,
            anywhere.
          </p>
          <div className="w-[280px] mt-8">
            <DownloadApps />
          </div>
        </div>
      </div>
    </section>
  );
}
