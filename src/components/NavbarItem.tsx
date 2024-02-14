'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: string;
  href: string;
};

const NavbarItem = ({ children, href }: Props) => {
    const path = usePathname()
  return (
    <li className="list-none mx-5 my-0 text-xl font-medium">
      <Link className={path === href ? `text-[#cccbff]`: undefined} href={href}>{children}</Link>
    </li>
  );
};

export default NavbarItem;
