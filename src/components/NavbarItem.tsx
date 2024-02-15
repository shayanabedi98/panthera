"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: string;
  href: string;
};

const NavbarItem = ({ children, href }: Props) => {
  const path = usePathname();
  return (
    <li className={path === href ? "list-none flex items-center justify-center h-[40px] w-[100px] rounded-lg text-xl font-medium hover:bg-[#23225e] transition duration-500 ease-in-out bg-[rgba(0,0,0,0.1)]" : "list-none flex items-center justify-center h-[40px] w-[100px] rounded-lg text-xl font-medium hover:bg-[#23225e] transition duration-500 ease-in-out"}>
      <Link
        className={path === href ? `text-[#cccbff]` : undefined}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;
// 