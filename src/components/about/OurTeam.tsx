import Arshya from "@/../assets/arshya-std.png";
import Shayan from "@/../assets/shayan-std.png";
import Dela from "@/../assets/dela-std.png";
import OurTeamCard from "./OurTeamCard";

export default function OurTeam() {
  return (
    <div className="mt-[260px] flex flex-col items-center p-10">
      <p className="font-medium text-heading-color text-xl">OUR TEAM</p>
      <p className="font-semibold text-5xl mt-[5px]">meet the creative team</p>
      <div className="flex mt-20 w-[100%] space-x-20 justify-center">
        <OurTeamCard 
          image={Arshya}
          title="arshya abedi"
          description="marketing specialist"
          subtitle="EXPERTISE"
          subdescription1="Lorem Ipsum"
          subdescription2="Lorem Ipsum"
          subdescription3="Lorem Ipsum"
          subdescription4="Lorem Ipsum"
        />
        <OurTeamCard
          image={Shayan}
          title="shayan abedi"
          description="software engineer"
          subtitle="EXPERTISE"
          subdescription1="Lorem Ipsum"
          subdescription2="Lorem Ipsum"
          subdescription3="Lorem Ipsum"
          subdescription4="Lorem Ipsum"
        />
        <OurTeamCard
          image={Dela}
          title="dela bahmani"
          description="front end engineer"
          subtitle="EXPERTISE"
          subdescription1="Lorem Ipsum"
          subdescription2="Lorem Ipsum"
          subdescription3="Lorem Ipsum"
          subdescription4="Lorem Ipsum"
        />
      </div>
    </div>
  );
}
