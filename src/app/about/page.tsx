import HeroSection from "@/components/about/HeroSection";
import WorkWithUs from "@/components/about/WorkWithUs";
import OurTeam from "@/components/about/OurTeam";
import OurTeamCard from "@/components/about/OurTeamCard";
import Heading from "@/components/about/Heading";
import OurValues from "@/components/about/OurValues";

export const metadata = {
  title: "Pantheras | About",
  description: "",
  keywords: [
    "integrated digital marketing solutions",
    "custom web design and development",
    "ux/ui design solutions",
    "full stack javascript development",
    "next.js 14 dynamic web solutions",
    "content marketing strategy",
    "branding and graphic design solutions",
    "seo services",
    "social Media strategy and engagement",
    "social media content and email marketing",
  ],
};

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
