import Arshya from "@/../assets/arshya-std.png";
import Shayan from "@/../assets/shayan-std.png";
import Dela from "@/../assets/dela-std.png";
import OurTeamCard from "./OurTeamCard";

export default function OurTeam() {
  return (
    <div className="mt-[250px] flex flex-col items-center p-10">
      <p>OUR TEAM</p>
      <p>meet the creative team</p>
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
          className1='card-1'
          className2="card-details-1"
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
          className1='card-2'
          className2="card-details-2"
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
          className1='card-3'
          className2="card-details-3"
        />
      </div>
    </div>
  );
}
