

import ContactUs from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Easiffy",
  description: "Contact us page",
};

export default function Page() {
  return <ContactUs />;
}
