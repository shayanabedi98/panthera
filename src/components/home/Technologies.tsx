import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

type TechType = {
  img: JSX.Element;
  name: string;
};

export default function Technologies() {
  const techs: TechType[] = [
    { img: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { img: <SiAdobepremierepro />, name: "Adobe Premiere Pro" },
    { img: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { img: <IoLogoFigma />, name: "Figma" },
    { img: <SiCanva />, name: "Canva" },
    { img: <FaHtml5 />, name: "HTML" },
    { img: <FaCss3Alt />, name: "CSS" },
    { img: <SiSass />, name: "SASS" },
    { img: <SiTailwindcss />, name: "TailwindCSS" },
    { img: <IoLogoJavascript />, name: "JavaScript" },
    { img: <SiTypescript />, name: "TypeScript" },
    { img: <SiJquery />, name: "jQuery" },
    { img: <FaReact />, name: "React" },
    { img: <SiNextdotjs />, name: "Next.js" },
    { img: <SiMongodb />, name: "MongoDB" },
    { img: <SiExpress />, name: "Express.js" },
    { img: <FaNodeJs />, name: "Node.js" },
    { img: <FaGoogle />, name: "Google Ads" },
    { img: <FaFacebookF />, name: "Facebook Ads" },
    { img: <FaWordpress />, name: "WordPress" },
  ];

  return (
    <div className="flex flex-col my-[250px] items-center justify-center">
      <p className="font-medium text-heading-color text-xl">OUR TECHNOLOGIES</p>
      <div className="mt-[50px] grid grid-cols-5">
        {techs.map((item) => (
          <div className="flex flex-col my-3 mx-8 items-center  p-5 rounded-2xl">
            <div className="my-3 text-5xl">{item.img}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// [photoshop, premier, figma, canva, html, css, javascript, react, next, mongo, express, node, tailwind, TS, google, facebook]
