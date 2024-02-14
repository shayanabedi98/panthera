import Image from "next/image";
import logo from "@/../assets/logo-transparent2.png";
import Link from "next/link";
import NavbarItem from "@/components/NavbarItem";

export default function Header() {
  return (
    <div>
      <header className="flex relative mt-[30px] justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="w-[55px] relative top-[-7px]"
              src={logo}
              alt="An illustrated side profile of a panthera"
            />
          </Link>
          <Link href="/">
            <p className="font-semibold text-4xl">PANTHERA</p>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            <NavbarItem href="/" children="home" />
            <NavbarItem href="/about" children="about" />
            <NavbarItem href="/services" children="services" />
            <NavbarItem href="/contact" children="contact" />
          </ul>
        </nav>
      </header>
    </div>
  );
}
