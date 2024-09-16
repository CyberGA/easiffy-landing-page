import Image from "next/image";
import Link from "next/link";

export default function EasiffyWeb(): React.JSX.Element {
  return (
    <section className="py-20 px-6 text-primary-6B">
      <h1 className="text-5xl sm:text-6xl text-center mb-16 text-primary-6B">
        Easiffy Web
      </h1>
      <div className="flex items-center justify-between gap-5 flex-col md:flex-row w-full max-w-7xl mx-auto p-10 rounded-lg">
        <div className="w-full max-w-md mb-7 md:mb-0">
          <h4 className="text-4xl text-primary-60">
            Explore with ease. Our dashboard designed with you in mind.
          </h4>
          <p className="text-base mt-2">
            You can access your dashboard, make payment, create projects, create
            tasks, and see progress from any device with a web browser
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="w-fit  bg-primary-6B text-white text-center py-4 px-6 rounded-lg "
            >
              Signup Now
            </Link>
          </div>
        </div>
        <Image
          src="/web-design.png"
          alt="Dashboard views"
          width={500}
          height={500}
          className="h-auto"
        />
      </div>
    </section>
  );
}
