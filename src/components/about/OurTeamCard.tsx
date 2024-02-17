import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  subtitle: string;
  subdescription1: string;
  subdescription2: string;
  subdescription3: string;
  subdescription4: string;
  className1: string;
  className2: string;
};

export default function OurTeamCard({
  image,
  title,
  description,
  subtitle,
  subdescription1,
  subdescription2,
  subdescription3,
  subdescription4,
  className1,
  className2
}: Props) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col bg-[rgba(35,34,94,0.5)] rounded group ${className1}`}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image src={image} alt="" />
      </div>
      <div className="name-desc-container">
        <h3 className="mt-3 text-2xl pl-5">{title}</h3>
        <p className="mt-3 pl-5 font-secondary text-[rgba(255,255,255,0.6)]">
          {description}
        </p>
      </div>
      <div className={className2}>
        <h3 className="mt-4 pl-5 text-2xl ">{subtitle}</h3>
        <p className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5 ">
          {subdescription1}
        </p>
        <p className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
          {subdescription2}
        </p>
        <p className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
          {subdescription3}
        </p>
        <p className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
          {subdescription4}
        </p>
      </div>
    </div>
  );
}
