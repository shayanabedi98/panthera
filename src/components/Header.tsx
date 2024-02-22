"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "@/../assets/logo-transparent2.png";
import Link from "next/link";
import NavbarItem from "@/components/HeaderNavbarItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [phone, setPhone] = useState(false);

  return (
    <div className="relative">
      <header className="px-4 mt-[10px] md:mt-[35px] flex relative justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              priority
              className="w-[45px] relative top-[-7px]"
              src={logo}
              alt="An illustrated side profile of a panthera"
            />
          </Link>
          <Link href="/">
            <p className="font-semibold text-2xl ">PANTHERAS</p>
          </Link>
        </div>
        <nav>
          <ul className="hidden md:flex items-center">
            <NavbarItem href="/" content="home" />
            <NavbarItem href="/about" content="about" />
            <NavbarItem href="/services" content="services" />
            <NavbarItem href="/contact" content="contact" />
          </ul>
          <div className="flex justify-center items-center- md:hidden">
            <GiHamburgerMenu
              className="h-24 text-2xl"
              onClick={() => setPhone(true)}
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {phone && (
          <motion.div
            initial={{ right: "-100%" }}
            animate={{ right: 0 }}
            exit={{ right: "-100%"}}
            className="z-[1] top-0 right-0 bg-button-color-3 absolute flex flex-col items-end w-full px-4 gap-2 h-80"
          >
            <IoCloseSharp
              onClick={() => setPhone(false)}
              className="h-24 text-3xl"
            />
            <Link onClick={() => setPhone(false)} href="/">
              home
            </Link>
            <Link onClick={() => setPhone(false)} href="/about">
              about
            </Link>
            <Link onClick={() => setPhone(false)} href="/services">
              services
            </Link>
            <Link onClick={() => setPhone(false)} href="/contact">
              contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
