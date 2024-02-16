import Image from "next/image";
import FooterNavbarItem from "./FooterNavbarItem";
import logo from "@/../assets/logo-transparent2.png";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
        <div>
            <Image className="w-10 relative top-3" src={logo} alt=""/>
        </div>
      <div className="flex gap-10 mt-8 w-[500px] pt-3 justify-center border-t border-t-1 border-[#dfdfdf]">
        <FooterNavbarItem href="/" children="home" />
        <FooterNavbarItem href="/about" children="about" />
        <FooterNavbarItem href="/services" children="services" />
        <FooterNavbarItem href="/contact" children="contact" />
      </div>
      <div className="flex gap-10 my-4">
      <Link href=""><IoIosMail className="text-2xl" style={{fill:'#dfdfdf'}}/></Link>
      <Link href=""><IoIosCall className="text-2xl" style={{fill:'#dfdfdf'}}/></Link>
      <Link href=""><AiFillInstagram className="text-2xl" style={{fill:'#dfdfdf'}}/></Link>
      </div>
      <div className="mb-10">
        <p className="text-info-color text-sm font-thin">
          ©{new Date().getFullYear()} PANTHERAS. All rights reserved
        </p>
      </div>
    </div>
  );
}
