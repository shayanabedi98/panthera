import Image from "next/image";
import highFive from "@/../assets/teamwork-high-five.png";

export default function HeroSection() {
  return (
    <div className="mt-[50px] xl:mt-[210px] px-5 xl:p-16 flex flex-col lg:flex-row items-center justify-between mx-auto ">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="font-semibold text-4xl md:text-5xl mb-4">a bit about us</h1>
        <p className="font-secondary text-md md:w-[500px] text-center lg:text-start text-white leading-7">
          Located in Toronto, our digital marketing startup is built on the
          foundation of collaboration, innovation, and expertise. Our team
          brings together a diverse range of skills and experiences, with a
          common goal: to empower businesses to thrive in the digital world.
          <br />
          From web development and design to crafting effective marketing
          strategies, we leverage our combined knowledge to deliver impactful
          solutions tailored to each client&apos;s unique needs. We believe in
          the power of creativity, data-driven insights, and continuous learning
          to drive success for our clients. Let us be your partner in achieving
          your digital marketing goals.
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          src={highFive}
          alt="Three co-workers high fiving"
          title="Online illustrations by Storyset"
          className="w-[550px] mt-10"
        />
      </div>
    </div>
  );
}
