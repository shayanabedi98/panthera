import Arshya from "@/../assets/arshya-std.png";
import Shayan from "@/../assets/shayan-std.png";
import Dela from "@/../assets/dela-std.png";
import OurTeamCard from "./OurTeamCard";

export default function OurTeam() {
  return (
    <div className="mt-[50px] md:my-[150px] xl:mt-[250px] flex flex-col items-center px-5">
      <h2 className="font-medium text-heading-color text-base md:text-xl mb-6">OUR TEAM</h2>
      <p className="font-semibold text-2xl md:text-5xl">meet the executive team</p>
      <div className="flex flex-col md:flex-row mt-6 mb-[60px] gap-10 w-[100%] justify-center items-center">
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
