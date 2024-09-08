import Image from "next/image";
import MessageForm from "./message-form";
import { IconType } from "react-icons";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

interface IContactInfo {
  title: string;
  value: string;
  icon: IconType;
}

const infos: Array<IContactInfo> = [
  {
    title: "Phone Number",
    value: "000 000 0000 000",
    icon: FaPhone,
  },
  {
    title: "Email Address",
    value: "support@easiffy.com",
    icon: MdEmail,
  },
  {
    title: "Location",
    value: "Easiffy location",
    icon: IoLocation,
  },
];

const InfoTile: React.FC<IContactInfo> = (info) => {
  const Icon = info.icon;
  return (
    <div className="px-4 py-5 rounded-lg border w-full min-w-[250px] flex-1 max-w-sm bg-white">
      <div className="flex items-center justify-center size-10 text-primary-60 bg-primary-D9/30 rounded-full mx-auto mb-1">
        <Icon size={14} />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-primary-6B">{info.title}</h4>
        <p className="text-secondary-gray-80 tex-sm">{info.value}</p>
      </div>
    </div>
  );
};

export default function ContactUs(): React.JSX.Element {
  return (
    <section className="py-20 px-6 mt-20">
      <div className="flex flex-wrap gap-5 justify-center w-full max-w-6xl mx-auto mb-10">
        {infos.map((info, index) => (
          <InfoTile key={index} {...info} />
        ))}
      </div>
      <div className="mx-auto w-full max-w-6xl border rounded-lg bg-[url('/phone.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full flex justify-end gap-12">
          <MessageForm />
        </div>
      </div>
    </section>
  );
}
