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
    title: "Great Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "John Doe",
    clientHeadline: "CEO, ABC Company",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Excellent Work",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "Jane Doe",
    clientHeadline: "CTO, XYZ Company",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Amazing Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "Alice Doe",
    clientHeadline: "COO, PQR Company",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Great Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "John Doe",
    clientHeadline: "CEO, ABC Company",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Excellent Work",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "Jane Doe",
    clientHeadline: "CTO, XYZ Company",
    clientImage: "https://picsum.photos/200",
  },
  {
    title: "Amazing Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla facilisi. Cras tincidunt.",
    clientName: "Alice Doe",
    clientHeadline: "COO, PQR Company",
    clientImage: "https://picsum.photos/200",
  },
];

export default function ClientFeedback(): React.JSX.Element {

  if (!feedbacks) return <></>
  return (
    <section className="bg-no-repeat bg-cover bg-center py-20 px-6 text-custom-black">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-5xl text-center text-primary-60 mb-16">
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
                <h2 className="text-xl font-bold mb-2 font-poppins">
                  {feedback.title}
                </h2>
                <p className="text-sm mb-4">{feedback.desc}</p>
                <div className="flex items-center">
                  <Image
                    src={feedback.clientImage}
                    alt={feedback.clientName}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <div className="ml-4">
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
