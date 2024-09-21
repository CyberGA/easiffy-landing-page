"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IFeedback {
  title: string;
  desc: string;
  clientName: string;
  clientHeadline: string;
  clientImage: string;
}

const feedbacks: Array<IFeedback> = [
  {
    title: "Exceptional Experience",
    desc: "Working with Alex and his team has been an exceptional experience. His ability to go above and beyond to deliver excellent results is why I’ve trusted him for over six years. Now, with Easiffy, I’m excited to see this level of service extend to even more clients.",
    clientName: "James Roberts",
    clientHeadline: "Creative Director, Stellar Vision Media Concepts LTD.",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Fast Delivery ",
    desc: "Easiffy revolutionized the way we approach digital services. Their fast delivery and superior quality have made them our go-to partner for all projects. The customer service is top-notch—highly recommended for anyone serious about getting results.",
    clientName: "Sarah Collins",
    clientHeadline: "CEO, Redwood Solutions int'l.",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Creative and Efficient ",
    desc: "The level of creativity and efficiency at Easiffy is unmatched. Every project they handle for us is met with outstanding results, and they have truly become an extension of our internal team. Quality and professionalism are ingrained in everything they do.",
    clientName: "Thomas Anderson",
    clientHeadline: "Operations Manager, BrightPath Consulting LTD ",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Reliable",
    desc: "As a startup, finding a reliable partner can be challenging, but Easiffy has made our scaling process smooth and efficient. Their dedication to meeting deadlines and delivering with excellence is why we keep coming back.",
    clientName: "Jessica Morgan",
    clientHeadline: "Founder & CEO, Zenith Innovations",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Amazing Support",
    desc: "I’ve worked with many digital service providers, but Easiffy stands out. Alex and his team’s attention to detail, coupled with their ability to deliver precisely what we need, have made them an invaluable partner for our business.",
    clientName: "David Harrison",
    clientHeadline: "Marketing Manager, BlueSky Strategies",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Seamless",
    desc: "When you need a digital partner who gets it, Easiffy is the name that comes to mind. They deliver every time, with a keen understanding of what our company needs. Working with them has been a seamless and efficient process.",
    clientName: "Karen Brooks",
    clientHeadline: "Director of Communications, Infinity Ventures LLC.",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Seamless",
    desc: "Easiffy’s team brings a level of innovation and reliability that has greatly enhanced our projects. Alex’s leadership is evident in the way the team consistently meets our needs with excellent service and results. They’re now our trusted partner for all things digital.",
    clientName: "Michael Stewart",
    clientHeadline: "Chief Technology Officer, Quantum Digital Labs Inc.",
    clientImage: "https://picsum.photos/200",
  },
];

export default function ClientFeedback(): React.JSX.Element {

  if (!feedbacks) return <></>
  return (
    <section className="py-20 px-6 text-custom-black bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-center text-primary-6B mb-16">
          Proven Track of Satisfied Clients
        </h1>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 bg-white rounded-lg border w-full max-w-full xs:max-w-xs mb-16">
                <h2 className="text-xl font-bold mb-2 font-platypi text-primary-60">
                  {feedback.title}
                </h2>
                <p className="text-sm mb-4">{feedback.desc}</p>
                <div className="flex gap-2 items-center">
                  <Image
                    src={feedback.clientImage}
                    alt={feedback.clientName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="text-primary-6B">
                    <p className="text-sm font-bold">{feedback.clientName}</p>
                    <p className="text-xs text-gray-500">
                      {feedback.clientHeadline}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
