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
  id: number
};

export default function Technologies() {
  const techs: TechType[] = [
    { img: <SiAdobephotoshop />, name: "Adobe Photoshop", id: 1 },
    { img: <SiAdobepremierepro />, name: "Adobe Premiere Pro", id: 2 },
    { img: <SiAdobeillustrator />, name: "Adobe Illustrator", id: 3 },
    { img: <IoLogoFigma />, name: "Figma", id: 4 },
    { img: <SiCanva />, name: "Canva", id: 5 },
    { img: <FaHtml5 />, name: "HTML", id: 6 },
    { img: <FaCss3Alt />, name: "CSS", id: 7 },
    { img: <SiSass />, name: "SASS", id: 8 },
    { img: <SiTailwindcss />, name: "TailwindCSS", id: 9 },
    { img: <IoLogoJavascript />, name: "JavaScript", id: 10 },
    { img: <SiTypescript />, name: "TypeScript", id: 11 },
    { img: <SiJquery />, name: "jQuery", id: 12 },
    { img: <FaReact />, name: "React", id: 13 },
    { img: <SiNextdotjs />, name: "Next.js", id: 14 },
    { img: <SiMongodb />, name: "MongoDB", id: 15 },
    { img: <SiExpress />, name: "Express.js", id: 16 },
    { img: <FaNodeJs />, name: "Node.js", id: 17 },
    { img: <FaGoogle />, name: "Google Ads", id: 18 },
    { img: <FaFacebookF />, name: "Facebook Ads", id: 19 },
    { img: <FaWordpress />, name: "WordPress", id: 20 },
  ];

  return (
    <div className="flex flex-col my-[60px] md:my-[150px] xl:my-[250px] items-center justify-center">
      <p className="font-medium text-heading-color text-base md:text-lg">OUR TECHNOLOGIES</p>
      <div className="mt-[6px] grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {techs.map((item) => (
          <div key={item.id} className="flex flex-col my-3 mx-8 items-center p-5 rounded-2xl">
            <div className="my-3 text-3xl md:text-4xl">{item.img}</div>
            <p className="text-sm tracking-wide md:text-lg text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}