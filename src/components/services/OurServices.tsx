"use client";

import { useState } from "react";
import OurServicesInfo from "./OurServicesInfo";
import { IoCodeSharp } from "react-icons/io5";
import OurServicesOptions from "./OurServicesOptions";
import { GoPencil } from "react-icons/go";
import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

type Options = {
  seo: boolean;
  graphicDesign: boolean;
  contentCreation: boolean;
  webDesign: boolean;
  webDevelopment: boolean;
};

export default function OurServices() {
  const [options, setOptions] = useState<Options>({
    seo: true,
    graphicDesign: false,
    contentCreation: false,
    webDesign: false,
    webDevelopment: false,
  });

  function handleClick(name: string) {
    setOptions({
      seo: name == "seo",
      graphicDesign: name == "graphicDesign",
      contentCreation: name == "contentCreation",
      webDesign: name == "webDesign",
      webDevelopment: name == "webDevelopment",
    });
  }

  return (
    <div className="mt-[250px] flex p-10 justify-center gap-20">
      <div className="flex flex-col">
        <h2 className="font-medium text-heading-color text-xl">OUR SERVICES</h2>
        <OurServicesOptions handleClick={() => handleClick("seo")} name="SEO" />
        <OurServicesOptions
          handleClick={() => handleClick("graphicDesign")}
          name="GRAPHIC DESIGN"
        />
        <OurServicesOptions
          handleClick={() => handleClick("contentCreation")}
          name="CONTENT CREATION"
        />
        <OurServicesOptions
          handleClick={() => handleClick("webDesign")}
          name="WEB DESIGN"
        />
        <OurServicesOptions
          handleClick={() => handleClick("webDevelopment")}
          name="WEB DEVELOPMENT"
        />
      </div>
      <div className="bg-button-color-2 p-10 rounded-2xl w-2/3">
        <OurServicesInfo
          icon={<FaChartLine style={{ fill: "#23225e" }} />}
          title="SEO (SEARCH ENGINE OPTIMIZATION)"
          description="Maximize your online presence with our SEO service. We enhance your website's search rankings through optimized content and improved user experience, driving more traffic and conversions. Elevate your digital footprint effortlessly with us."
          style={{ display: options.seo ? "flex" : "none" }}
          service1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
        />
        <OurServicesInfo
          icon={<GoPencil style={{ fill: "#23225e" }} />}
          title="GRAPHIC DESIGN"
          description="Elevate your visuals with our Graphic Design service, mastering Photoshop, Canva, and Illustrator. We craft stunning graphics and illustrations that captivate your audience. With our blend of creativity and technical skill, your brand will shine in the digital landscape. Let's create visuals that stand out and speak to your audience."
          style={{ display: options.graphicDesign ? "flex" : "none" }}
          service1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
        />
        <OurServicesInfo
          icon={<MdInsertPhoto style={{ fill: "#23225e" }} />}
          title="CONTENT CREATION"
          description="Elevate your content with our service, harnessing Premiere Pro for professional video edits, Canva for stunning graphics, and optimizing for platforms like Instagram and TikTok. We craft compelling content tailored to engage your audience across these dynamic platforms, ensuring your brand not only stands out but thrives in the digital space. Let's transform your online presence with content that captures attention and sparks interaction."
          style={{ display: options.contentCreation ? "flex" : "none" }}
          service1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
        />
        <OurServicesInfo
          icon={<MdOutlineWeb style={{ fill: "#23225e" }} />}
          title="WEB DESIGN"
          description="Elevate your online presence with our Web Design service, blending the power of Photoshop for exquisite graphics and Figma for seamless, interactive designs. We specialize in creating visually stunning and user-friendly websites that ensure an engaging user experience. Our expertise in these leading design tools enables us to bring your digital vision to life with precision and creativity. Let's build a website that not only looks great but also effectively communicates your brand's message."
          style={{ display: options.webDesign ? "flex" : "none" }}
          service1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
        />
        <OurServicesInfo
          icon={<IoCodeSharp style={{ fill: "#23225e" }} />}
          title="WEB DEVELOPMENT"
          description="Leverage our Web Development service with expert full-stack developers skilled in Node.js, Express, MongoDB, SQL, React, Next.js, and SASS/CSS. We deliver scalable, custom web solutions that enhance user experience and meet your unique business needs. Transform your web presence with our comprehensive tech expertise."
          style={{ display: options.webDevelopment ? "flex" : "none" }}
          service1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
          service3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur architecto amet rerum? Impedit, id quo."
        />
      </div>
    </div>
  );
}
