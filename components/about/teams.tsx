"use client";

import { ITeamMember } from "@/definitions/team.interface";
import axios from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const teamMembers: Array<ITeamMember> = [
  {
    id: 1,
    name: "Tiffany D.C Queen",
    title: "CEO and Co-founder",
    avatar: "/ceo.png",
    desc: "",
  },
  {
    id: 2,
    name: "Owini Alexander",
    title: "Product Development Manager and Co-founder",
    avatar: "/product-manager.JPG",
    desc: "",
  },
  {
    id: 3,
    name: "Joy Bassey",
    title: "WordPress Developer and Pitch Decker",
    avatar: "/bassey.png",
    desc: "",
  },
];

function TeamMembers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<Array<ITeamMember>>(teamMembers);
  const router = useRouter();

  // async function getTeams() {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get("/teams");
  //     setMembers(res.data);
  //   } catch (error) {
  //     toast.error("Could not get team members");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const handleTeamClick = (member: ITeamMember) => {
    sessionStorage.setItem("team", JSON.stringify(member));
    router.push(`/about/team/${member.id}`);
  };

  // useEffect(() => {
  //   getTeams();
  // }, []);

  return (
    <section className="pb-20 px-6 text-custom-dark">
      <div className="w-full max-w-7xl mx-auto">
        <p className="my-5 text-3xl sm:text-4xl font-semibold text-primary-60">
          OUR TEAM
        </p>
        {loading ? (
          <p className="mt-20">Loading Teams...</p>
        ) : (
          <div className="flex flex-wrap gap-5 mt-10 duration-300">
            {members &&
              members.map((member) => (
                <div
                  key={member.id}
                  className="relative z-0 rounded overflow-hidden cursor-pointer"
                  onClick={() => handleTeamClick(member)}
                >
                  <Image
                    src={member.avatar}
                    placeholder="blur"
                    blurDataURL={member.avatar}
                    priority
                    alt="team member"
                    width={370}
                    height={450}
                    className="relative z-0 w-[370px] h-[450px] hover:scale-105 object-cover duration-700"
                  />
                  <div className="absolute z-[1] bg-whiteF4 text-primary-6B bottom-3 inset-x-3 rounded">
                    <p className="text-2xl font-semibold py-2 px-3">
                      {member.name}
                    </p>
                    <p className="text-lg py-2 px-3 border-t">{member.title}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamMembers;
