import Image from "next/image";

type ListItemProps = {
  index: number;
  title: string;
  text: string;
};

const list: Array<ListItemProps> = [
  {
    index: 1,
    title: "Create an Account",
    text: "If you haven’t already, head to our website and create an account. This is your gateway to all our services.",
  },
  {
    index: 2,
    title: "Send Us Your Project Details",
    text: "Once you’re logged in, send us a message detailing your project. We usually respond in less than two minutes.",
  },
  {
    index: 3,
    title: "Choose Your Package",
    text: "Select the package that suits your needs. For one-off projects, enter your proposed budget and the number of days for delivery. For contracts, select the tasks we’ll be handling for you. Our contracts typically run for a minimum of 30 days.",
  },
  {
    index: 4,
    title: "Submit for Review",
    text: "Send your package selection to our team for review. Once approved, you’ll proceed to payment.",
  },
  {
    index: 5,
    title: "Project Matching and Delivery",
    text: "Easiffy matches your project with the best creator in our network. Your project is then delivered according to your specifications.",
  },
  {
    index: 6,
    title: "Request Modifications",
    text: "Not satisfied with the delivery? You can request modifications until you’re happy with the outcome.",
  },
];

const ListItem: React.FC<ListItemProps> = ({ title, index, text }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="size-10 flex items-center justify-center p-4 bg-secondary-gray-40 text-white text-base rounded-full">
        {index}
      </div>
      <div className="w-fit space-y-2 text-primary-60 text-left">
        <h3 className="text-lg font-medium font-recoleta">{title}</h3>
        <p className="text-sm text-secondary-gray-80">{text}</p>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section
      className="text-custom-black px-6 pt-10 bg-[#f9f7f3]"
      id="how_it_works"
    >
      <div className="h-10"></div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-primary-60 w-full max-w-4xl font-semibold my-10 space-y-3">
          <p className="text-sm">How it works</p>
          <h1 className="text-4xl text-secondary-gray-40">
            Simple steps to efficiency and endless possibilities. Easiffy is an
            ever-ready employee in your pocket.{" "}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-5 mb-5">
          {list.slice(0, 2).map((item) => (
            <div key={item.index} className="w-full lg:max-w-lg">
              <ListItem {...item} />
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-end">
          <div className="w-full lg:max-w-lg space-y-5 mb-10">
            {list.slice(2).map((item) => (
              <ListItem key={item.index} {...item} />
            ))}
          </div>
          <Image
            src="/how it works.png"
            alt="How it works"
            width={600}
            height={200}
            className="rounded-lg object-cover h-auto"
          />
        </div>
      </div>
    </section>
  );
}
