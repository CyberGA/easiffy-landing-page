

import FAQs from "@/components/about/faqs";
import Intro from "@/components/about/intro";
import MissionVision from "@/components/about/mission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Easiffy",
  description: "About us page",
};

export default function Page() {
  return <>
    <Intro />
    <MissionVision />
    <FAQs />
  </>;
}
