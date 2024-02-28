import OurServices from "@/components/services/OurServices";
import Heading from "../../components/services/Heading";
import StartJourney from "@/components/services/StartJourney";
import FAQ from "@/components/services/FAQ";

export const metadata = {
  title: "Pantheras | Services",
  description:
    "Pantheras services: Tailored web development, UX/UI design, and digital marketing to boost your brand.",
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

export default function Services() {
  return (
    <main>
      <Heading />
      <OurServices />
      <StartJourney />
      <FAQ />
    </main>
  );
}
