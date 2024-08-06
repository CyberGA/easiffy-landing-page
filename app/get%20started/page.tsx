import { Metadata } from "next";
import Intro from "@/components/get-started/intro";
import EasiffyWeb from "@/components/get-started/web";

export const metadata: Metadata = {
  title: "Getting Started | Easiffy",
  description: "Getting Started page",
};

export default function Page() {
  return (
    <>
      <Intro />
      <EasiffyWeb />
    </>
  );
}
