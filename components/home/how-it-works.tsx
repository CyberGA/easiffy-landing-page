import Image from "next/image";

type ListItemProps = {
  index: number;
  title: string;
  text: string;
  img?: string;
};

const list: Array<ListItemProps> = [
  {
    index: 1,
    title: "Register on Easiffy",
    text: "Create an account by providing your details and verifying your email.",
    img: "/how it works.png",
  },
  {
    index: 2,
    title: "Submit Your Proposal",
    text: "Describe your project needs and submit your proposal on our platform.",
    img: "/2. submit your propsal.jpg",
  },
  {
    index: 3,
    title: "Receive Custom Offers and Pay",
    text: "Review tailored offers from our experts and make the payment.",
    img: "/3. Receive custom offer and pay.jpg",
  },
  {
    index: 4,
    title: "Approve Orders and Enjoy",
    text: "Receive your completed tasks, review them, and approve the final delivery. Not satisfied with our delivery? There is room for modifications.Enjoy top-notch digital services!",
    img: "/4. approve order and enjoy.jpg",
  },
];

const ListItem: React.FC<ListItemProps> = ({ title, index, text }) => {
  return (
    <div className="w-full flex items-start space-x-4">
      <div className="size-10 flex items-center justify-center p-4 bg-primary-60 text-white text-base rounded-full">
        {index}
      </div>
      <div className="w-fit space-y-2 text-primary-60 text-left">
        <h3 className="text-lg font-semibold font-recoleta">{title}</h3>
        <p className="text-base text-secondary-gray-80">{text}</p>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section
      className="relative z-[1] text-custom-black px-6 py-10 pb-28 bg-white border-t border-b"
      id="how_it_works"
    >
      <div className="h-10"></div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-primary-60 font-semibold my-10 space-y-3">
          <p className="text-sm">How it works</p>
          <h1 className="text-3xl md:text-4xl text-primary-6B">
            Simple steps to efficiency and endless possibilities. Easiffy is an
            ever-ready employee in your pocket.{" "}
          </h1>
        </div>
        <div className="w-full gap-5 space-y-8">
          {list.map((item) => (
            <div
              key={item.index}
              className="w-full max-w-3xl flex flex-row items-center justify-between gap-3 sm:gap-10 sm:space-y-10"
            >
              <ListItem {...item} />
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={80}
                  className="w-full max-w-[100px] h-auto rounded-t-lg bg-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
