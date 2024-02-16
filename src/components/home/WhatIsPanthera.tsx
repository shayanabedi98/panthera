import Image from "next/image";
import developerActivity from "@/../assets/developer-activity.png";
import Link from "next/link";

export default function WhatIsPanthera() {
  return (
    <div className="grid grid-cols-2 p-10 mt-[250px]">
      <div className="flex justify-center items-center">
        <Image
          className="w-[460px]"
          src={developerActivity}
          alt="Laptop screen showing web development process"
        />
      </div>
      <div className="py-12 w-[600px] flex flex-col items-start justify-around">
        <p className="relative top-[12px] font-medium text-heading-color text-xl">WHAT IS PANTHERAS?</p>
        <p className="font-semibold text-5xl">mastering digital marketing excellence</p>
        <p className="w-[400px] text-info-color text-md font-secondary leading-relaxed">
          Maximizing your brand&apos;s reach with our digital marketing strategies.
          Elevate online presence and drive growth. Start your digital success
          journey now.
        </p>
        <Link href="/about">
          <button className="bg-button-color-1 font-medium text-xl w-[200px] h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">about us</button>
        </Link>
      </div>
    </div>
  );
}
