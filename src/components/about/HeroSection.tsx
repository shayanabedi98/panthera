import Image from "next/image";
import highFive from "@/../assets/teamwork-high-five.png";

export default function HeroSection() {
  return (
    <div className="mt-[100px] p-10 flex items-center justify-between mx-auto">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold text-7xl mb-10">a bit about us</h1>
        <p className="font-secondary text-white w-[600px] leading-7">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod.
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          src={highFive}
          alt="Three co-workers high fiving"
          title="Online illustrations by Storyset"
          className="w-[550px]"
        />
      </div>
    </div>
  );
}
