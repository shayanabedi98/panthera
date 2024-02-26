import Image from "next/image";
import developerActivity from "@/../assets/developer-activity.png";
import Link from "next/link";

export default function WhatIsPanthera() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 p-10 mt-[150px] xl:mt-[250px]">
      <div className="flex justify-center items-center">
        <Image
          className="w-[350px] lg:w-[460px]"
          src={developerActivity}
          alt="Laptop screen showing web development process"
        />
      </div>
      <div className="py-12 md:py-3 mx-auto items-center xl:items-start flex flex-col justify-around text-center xl:text-start">
        <p className="mb-6 md:mb-2 xl:mb-1 relative top-[12px] font-medium text-heading-color text-base md:text-xl">
          WHAT IS PANTHERAS?
        </p>
        <p className="max-w-[480px] my-6 md:my-2 xl:my-1 text-center xl:text-start font-semibold text-2xl md:text-5xl">
          mastering digital marketing excellence
        </p>
        <p className="max-w-[380px] my-6 md:my-2 xl:my-1 text-info-color text-md font-secondary leading-relaxed">
          Maximizing your brand&apos;s reach with our digital marketing
          strategies. Elevate online presence and drive growth. Start your
          digital success journey now.
        </p>
        <Link href="/about">
          <button className="mt-6 bg-button-color-1 font-medium text-lg w-[120px] md:w-[200px] h-[40px] md:h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">
            about us
          </button>
        </Link>
      </div>
    </div>
  );
}
