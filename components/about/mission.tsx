import { cn } from "@/lib/utils";
import Image from "next/image";

const items: Array<{ title: string; desc: string; img: string }> = [
  {
    title: "Our Mission",
    desc: "Innovation isn't just a component; it's the heartbeat of our business DNA. By fostering seamless collaboration and ensuring timely delivery, we empower you to confidently reach your digital goals, from conception to realization.",
    img: "/mission.jpg",
  },
  {
    title: "Our Vision",
    desc: "In charting the path ahead, Easiffy aspires to be the vanguard of digital innovation, forging new pathways that revolutionize service delivery and empower businesses worldwide.",
    img: "/our_vision.jpg",
  },
];

export default function MissionVision(): React.JSX.Element {
  return (
    <section className="pb-20 px-6 text-custom-dark">
      <div className="flex flex-col md:grid md:grid-cols-[repeat(2,_minmax(0,_430px))] gap-9 justify-center w-full max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-between h-full w-full max-w-2xl rounded-lg border px-5 pt-5 shadow-md duration-300 overflow-hidden",
              index == 1 && "pb-0 md:pb-20"
            )}
          >
            <div className="space-y-6 w-full pb-5 mt-2">
              <h1 className="text-3xl leading-[1.2] text-primary-60 font-raleway">
                {item.title}
              </h1>
              <p className="mt-5 text-base">{item.desc}</p>
            </div>
            <div className="mt-5">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className="w-full md:max-w-sm h-full mx-auto rounded-t-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
