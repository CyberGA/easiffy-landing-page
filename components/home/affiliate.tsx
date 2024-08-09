import Image from "next/image"
import Link from "next/link"


const items: Array<{ desc: string; img: string }> = [
  {
    desc: "Welcome to the Easiffy Affiliate Program, a dynamic platform where your potential for success knows no bounds! As an affiliate, you are not just a partner; you are an integral part of our journey to redefine the landscape of digital services and empower businesses worldwide.",
    img: "/welcome.jpeg",
  },
  {
    desc: "At Easiffy, we believe in the power of collaboration and the limitless possibilities that arise when like-minded individuals come together with a shared vision. As you embark on this exciting journey with us, we extend a warm welcome and a promise of unparalleled support every step of the way.",
    img: "/collaboration.jpeg",
  },
  {
    desc: "As an affiliate, you play a crucial role in spreading the word about Easiffy and introducing our innovative solutions to businesses and individuals seeking top-notch digital services. Your efforts not only contribute to our growth but also empower others to harness the full potential of our platform.",
    img: "/affiliate-1.jpg",
  },
  {
    desc: "But being an Easiffy affiliate is more than just promoting a product—it's about building relationships, fostering trust, and delivering value to our clients. With a suite of cutting-edge services ranging from content creation and graphic design to web development and mobile app creation. Easiffy offers a comprehensive solution for businesses of all sizes and industries.",
    img: "/creative-writing.jpeg",
  },
  {
    desc: "As you navigate our affiliate program, you'll discover a wealth of resources at your disposal, including personalized support, marketing materials, and real-time analytics to track your progress. Whether you're a seasoned marketer or just starting out, we're here to provide the tools and guidance you need to succeed.",
    img: "/analytics.jpeg",
  },
  {
    desc: "But perhaps the most exciting aspect of being an Easiffy affiliate is the opportunity to earn generous commissions for your efforts. With a competitive commission structure and unlimited earning potential, your hard",
    img: "/make-money.jpeg",
  },
];

function Affiliate(): React.JSX.Element {
  return (
    <section className="py-20 px-6 border-t ">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-5xl text-primary-60 text-center">Democratizing Wealth</h2>
            <p className="text-center text-xl mt-2 text-secondary-gray-40">Join the Easiffy Affiliate Movement and Empower Success</p>
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                {
                items.map((item, index) => (
                    <div key={index} className="relative z-0 w-full min-w-xs max-w-sm border rounded-lg overflow-hidden shadow-md pb-10 group/desc">
                        <div className="relative z-0 space-y-5 w-full ">
                            <Image src={item.img} alt="Became an affiliate" width={400} height={200} className="w-full object-cover h-[200px]" />
                            <p className="w-full text-base mt-2 text-secondary-gray-40 px-5 line-clamp-5 visible group-hover/desc:invisible duration-100">{item.desc}</p>
                        </div>
                        <div className="absolute z-[1] inset-y-0 inset-x-0 transform -translate-y-full transition-transform group-hover/desc:translate-y-0 fade-in bg-black/50 backdrop-blur-sm text-white p-5 duration-500">
                            <div className="flex flex-col gap-2 justify-end h-full duration-300">
                                <p className="w-full text-base mt-2 text-white duration-100">{item.desc}</p>
                                <Link
                                  href="/get started"
                                  className="w-full text-white text-center font-medium bg-primary-60 py-2 px-4 rounded-lg duration-300"
                                >
                                  Become An Affiliate
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Affiliate