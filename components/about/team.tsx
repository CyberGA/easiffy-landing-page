import Image from "next/image";

interface ITeamMembers {
  name: string;
  position: string;
  image: string;
}
const members: Array<ITeamMembers> = [
  {
    name: "Bertram Irvin",
    position: "Senior Recruiter",
    image: "/affiliate-1.jpg",
  },
  {
    name: "Michel Kyle",
    position: "Recruitment Manager",
    image: "/affiliate-1.jpg",
  },
  {
    name: "Nora Lillian",
    position: "IT Recruitment Specialist",
    image: "/affiliate-1.jpg",
  },
  {
    name: "Sarlett Lavern",
    position: "Account Manager",
    image: "/affiliate-1.jpg",
  },
  {
    name: "Milo Frederick",
    position: "Operations Manager",
    image: "/affiliate-1.jpg",
  },
  {
    name: "Dylan Zachary",
    position: "Marketing Coordinator",
    image: "/affiliate-1.jpg",
  },
];

function TeamMembers(): React.JSX.Element {
  return (
    <section className="pb-20 px-6 text-custom-dark">
      <div className="w-full max-w-7xl mx-auto">
        <p className="my-5 text-3xl sm:text-4xl font-semibold  text-primary-60">
          OUR TEAM
        </p>
        <div className="flex flex-wrap gap-5 mt-10 duration-300">
          {members.map((member, index) => (
            <div key={index} className="relative z-0 rounded overflow-hidden">
              <Image
                src={member.image}
                placeholder="blur"
                blurDataURL={member.image}
                priority
                alt="team member"
                width={370}
                height={450}
                className="relative z-0 w-[370px] h-[450px] hover:scale-105 object-cover duration-700"
              />
              <div className="absolute z-[1] bg-whiteF4 text-primary-6B bottom-3 inset-x-3 rounded">
                <p className="text-2xl font-bold py-2 px-3">
                  {member.name}
                </p>
                <p className="text-lg py-2 px-3 border-t">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
