import SingleBlurredCircle from "@/components/SingleBlurredCircle";
import Heading from "@/components/home/Heading";
import OurServices from "@/components/home/OurServices";
import Technologies from "@/components/home/Technologies";
import WhatIsPanthera from "@/components/home/WhatIsPanthera";

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
