"use client";

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
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col bg-button-color-2 my-6 team-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        overflow: "visible",
      }}
    >
      <div className="bg-button-color-3">
        <Image src={image} alt="" />
      </div>
      <div className="name-desc-container px-5 mb-5">
        <h3 className="mt-3 text-2xl">{title}</h3>
        <p className="mt-3 font-secondary text-[rgba(255,255,255,0.6)]">
          {description}
        </p>
      </div>
      <div
        className="team-card-details h-[250px] absolute bottom-0 w-full bg-[rgb(35,34,94)] box-border"
        style={{
          transform: isHovered ? "translateY(-40%)" : "translateY(0)",
          transition: "transform 0.5s ease, opacity 0.5s ease",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <h3 className="mt-4 pl-5 text-2xl ">{subtitle}</h3>
        <ul className="p-[0]">
          <li className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5 ">
            {subdescription1}
          </li>
          <li className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
            {subdescription2}
          </li>
          <li className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
            {subdescription3}
          </li>
          <li className="mt-2 font-secondary text-[rgba(255,255,255,0.6)] pl-5">
            {subdescription4}
          </li>
        </ul>
      </div>
    </div>
  );
}
