import Link from "next/link";
import OurServicesCard from "./OurServicesCard";
import { IoSearchSharp } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { IoCodeSharp } from "react-icons/io5";

export default function OurServices() {
  return (
    <div className="mt-[50px] md:mt-[150px] flex flex-col items-center">
      <h2 className="font-medium text-heading-color text-base md:text-xl mb-6">OUR SERVICES</h2>
      <p className="font-semibold text-2xl md:text-5xl">what we offer</p>
      <div className="flex-wrap	flex mt-12 gap-6">
        <OurServicesCard
          image={<IoSearchSharp style={{ fill: "#23225e" }} />}
          title="SEO"
          description="Boost your website's visibility and attract more traffic with our expert SEO services, tailored to elevate your search engine rankings and enhance online presence."
        />
        <OurServicesCard
          image={<BsPencil style={{ fill: "#23225e" }} />}
          title="GRAPHIC DESIGN"
          description="Elevate your brand with our cutting-edge graphic design services, offering creative solutions that captivate audiences and set your visual identity apart."
        />
        <OurServicesCard
          image={<MdOndemandVideo style={{ fill: "#23225e" }} />}
          title="CONTENT CREATION"
          description="Empower your brand with engaging content creation services, crafting compelling narratives that resonate with your audience and drive meaningful engagement."
        />
        <OurServicesCard
          image={<IoCodeSharp style={{ fill: "#23225e" }} />}
          title="WEB DESIGN AND DEVELOPMENT"
          description="Transform your online presence with our comprehensive web design and development services, creating stunning, user-friendly websites that drive results and growth."
        />
      </div>
      <Link href="/services">
        <button className="my-12 bg-button-color-1 font-medium text-lg w-[120px] md:w-[200px] h-[40px] md:h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">
          view services
        </button>
      </Link>
    </div>
  );
}
