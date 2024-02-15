import Link from "next/link";
import OurServicesCard from "./OurServicesCard";

export default function OurServices() {
    return (
        <div className="mt-[250px] flex flex-col text-center">
            <p className="font-medium text-heading-color text-xl">OUR SERVICES</p>
            <p className="font-semibold text-5xl">what we offer</p>
            <div className="flex mt-20">
                <OurServicesCard image="" title="SEO" description="Boost your website's visibility and attract more traffic with our expert SEO services, tailored to elevate your search engine rankings and enhance online presence." />
                <OurServicesCard image="" title="GRAPHIC DESIGN" description="Elevate your brand with our cutting-edge graphic design services, offering creative solutions that captivate audiences and set your visual identity apart." />
                <OurServicesCard image="" title="CONTENT CREATION" description="Empower your brand with engaging content creation services, crafting compelling narratives that resonate with your audience and drive meaningful engagement." />
                <OurServicesCard image="" title="WEB DESIGN AND DEVELOPMENT" description="Transform your online presence with our comprehensive web design and development services, creating stunning, user-friendly websites that drive results and growth." />
            </div>
            <Link href='/services'><button className="relative top-[50px] bg-button-color-1 font-medium text-xl w-[200px] h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">view services</button></Link>
        </div>
    )
}