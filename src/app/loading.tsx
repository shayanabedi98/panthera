'use client'
import Image from "next/image";
import logo from "@/../assets/logo-transparent.png"

export default function Loading() {
    return (
        <div className="loading flex justify-center relative bottom-12">
            <Image className="w-[900px]" priority src={logo} alt="loading icon of illustrated panthera" />
        </div>
    )
}