import { Metadata } from "next";
import Intro from "@/components/home/intro"
import Services from "@/components/home/services"

export const metadata: Metadata = {
  title: "Home | Easiffy",
  description: "Easiffy Home page",
};

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
    </>
  );
}
