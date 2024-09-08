import Intro from "@/components/about/intro";
import MissionVision from "@/components/about/mission";
import TeamMembers from "@/components/about/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Easiffy",
  description: "About us page",
};

export default function Page() {
  return <>
    <Intro />
    <MissionVision />
    <TeamMembers />
  </>;
}
