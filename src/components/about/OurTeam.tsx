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
          subdescription1="SEO/SEM"
          subdescription2="Branding"
          subdescription3="Content Creation"
          subdescription4="Analytics"
        />
        <OurTeamCard
          image={Shayan}
          title="shayan abedi"
          description="software engineer"
          subtitle="EXPERTISE"
          subdescription1="Web Development"
          subdescription2="Web Hosting"
          subdescription3="Content Creation"
          subdescription4=""
        />
        <OurTeamCard
          image={Dela}
          title="dela bahmani"
          description="front end engineer"
          subtitle="EXPERTISE"
          subdescription1="UX/UI Design"
          subdescription2="Web Development"
          subdescription3="Content Creation"
          subdescription4="Graphic Design"
        />
      </div>
    </div>
  );
}
