


const items: Array<{ title: string; desc: string }> = [
  {
    title: "OUR MISSION",
    desc: "Innovation isn't just a component; it's the heartbeat of our business DNA. By fostering seamless collaboration and ensuring timely delivery, we empower you to confidently reach your digital goals, from conception to realization.",
  },
  {
    title: "OUR VISION",
    desc: "In charting the path ahead, Easiffy aspires to be the vanguard of digital innovation, forging new pathways that revolutionize service delivery and empower businesses worldwide."
  },
];

export default function MissionVision(): React.JSX.Element {
    return (
      <section className="relative z-0 py-20 px-6 text-custom-dark bg-[url('/clients.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute z-0 top-0 bottom-0 left-0 right-0 bg-primary-60/10"></div>
        <div className="relative z-[1] flex flex-col sm:flex-row gap-9 justify-between w-full max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-6 w-full bg-black/30 border border-white/50 h- max-w-4xl mx-auto backdrop-blur-md rounded-lg p-5 shadow-md shadow-primary-60/20 duration-300"
            >
              <h1 className="text-3xl w-full max-w-4xl leading-[1.2] text-white">
                {item.title}
              </h1>
              <p className="mt-5 text-xl text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
}