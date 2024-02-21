import Image from "next/image";
import developerActivity from "@/../assets/developer-activity.png";
import Link from "next/link";

export default function WhatIsPanthera() {
  return (
    <div className="grid grid-cols-1 p-10 mt-[150px]">
      <div className="flex justify-center items-center">
        <Image
          className="w-[460px]"
          src={developerActivity}
          alt="Laptop screen showing web development process"
        />
      </div>
      <div className="py-12 mx-auto items-center flex flex-col justify-around text-center" >
        <p className="mb-6 relative top-[12px] font-medium text-heading-color text-base">WHAT IS PANTHERAS?</p>
        <p className="my-6 text-center font-semibold text-2xl">mastering digital marketing excellence</p>
        <p className="my-6 text-info-color text-md font-secondary leading-relaxed">
          Maximizing your brand&apos;s reach with our digital marketing strategies.
          Elevate online presence and drive growth. Start your digital success
          journey now.
        </p>
        <Link href="/about">
          <button className="mt-6 bg-button-color-1 font-medium text-lg w-[120px] h-[40px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">about us</button>
        </Link>
      </div>
    </div>
  );
}
