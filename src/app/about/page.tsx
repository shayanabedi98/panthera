import HeroSection from "@/components/about/HeroSection";
import WorkWithUs from "@/components/about/WorkWithUs";
import OurTeam from "@/components/about/OurTeam";
import OurTeamCard from "@/components/about/OurTeamCard";
import Heading from "@/components/about/Heading";
import OurValues from "@/components/about/OurValues";

export default function About() {
  return (
    <main>
      <Heading />
      <HeroSection />
      <WorkWithUs />
      <OurValues />
      {/* <OurTeam /> */}
    </main>
  );
}
