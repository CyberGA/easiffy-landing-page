"use client";

import { ITeamMember } from "@/definitions/team.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TeamMember() {
  const [loading, setLoading] = useState<boolean>(false);
  const [member, setMember] = useState<ITeamMember>();
  const router = useRouter();

  useEffect(() => {
    async function getTeam() {
      setLoading(true);
      try {
        const teamMember = sessionStorage.getItem("team");
        if (teamMember) {
          setMember(JSON.parse(teamMember));
          return;
        }
      } catch (error) {
        router.back();
      } finally {
        setLoading(false);
      }
    }
    getTeam();
  }, [router]);

  return (
    <section className="py-20 px-6 text-custom-dark">
      {member && (
        <div className="flex items-center flex-col md:flex-row gap-10 w-full max-w-6xl mx-auto">
          <Image
            src={member.avatar}
            placeholder="blur"
            blurDataURL={member.avatar}
            priority
            alt="team member"
            width={370}
            height={450}
            className="relative z-0 w-full max-w-[530px] h-auto object-cover"
          />
          <div className="space-y-5">
            <div className="font-semibold text-2xl text-primary-6B">
              <p>Hi, I am</p>
              <p>{member.name}</p>
            </div>
            <p className="text-secondary-gray-80 text-base">{member.title}</p>
            <p className="text-secondary-gray-80 text-sm">{member.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
