import SingleBlurredCircle from "@/components/SingleBlurredCircle";
import Heading from "@/components/home/Heading";
import OurServices from "@/components/home/OurServices";
import Technologies from "@/components/home/Technologies";
import WhatIsPanthera from "@/components/home/WhatIsPanthera";

export const metadata = {
  title: "Pantheras | Home",
  description:
    "Explore Pantheras digital innovation: web, graphic design, and marketing services to elevate your brand.",
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

export default function Home() {
  return (
    <main>
      <Heading />
      <WhatIsPanthera />
      <SingleBlurredCircle />
      <OurServices />
      <Technologies />
    </main>
  );
}
