import Image from "next/image";
import Link from "next/link";

export default function EasiffyWeb(): React.JSX.Element {
  return (
    <section
      className="py-20 px-6 text-custom-black bg-primary-D9/30"
      id="use-web"
    >
      <h1 className="text-5xl sm:text-6xl text-center mb-16 text-primary-60">
        Easiffy Web
      </h1>
      <div className="flex items-center justify-between gap-5 flex-col md:flex-row w-full max-w-5xl mx-auto p-10 rounded-lg">
        <div className="w-full max-w-md mb-7 md:mb-0">
          <h4 className="text-4xl text-custom-black/80">
            Access Your Dashboard from any web browser
          </h4>
          <p className="text-base mt-2">
            You can access your dashboard, make payment, create projects, create
            tasks, and see progress from any device with a web browser
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="w-fit  bg-custom-black/80 text-white text-center py-4 px-6 rounded-lg "
            >
              Signup Now
            </Link>
          </div>
        </div>
        <Image
          src="/web-design.png"
          alt="Dashboard views"
          width={400}
          height={400}
          className="h-auto"
        />
      </div>
    </section>
  );
}
