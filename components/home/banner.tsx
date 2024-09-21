import axios from "@/lib/axios";

export default async function Banner() {
  const res = await axios.post("/press/frontend_text").;

  if (res.status !== 200) {
    return <></>;
  } 
  return (
    <section className="py-16 bg-white">
      <div className="overflow-hidden relative">
        <div className="flex animate-scrolling-slide">
          <h1 className="text-5xl sm:text-7xl text-secondary-gray-80/50 whitespace-nowrap font-semibold">
            { res.data?.content}
          </h1>
        </div>
      </div>
      {/* <div className="px-6 mt-10">
        <p className="text-lg sm:text-2xl text-primary-6B w-full max-w-xl mx-auto text-center font-bold">
          We asked our customers how likely they were to recomment Easiffy to
          their network.
        </p>
      </div> */}
    </section>
  );
}
