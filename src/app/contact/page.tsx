import ContactForm from "@/components/contact/ContactForm";
import ContactImage from "@/components/contact/ContactImage";
import Link from "next/link";

export const metadata = {
  title: "Pantheras | Contact",
  description:
    "Connect with Pantheras for top-notch digital marketing, web and design solutions. Transform your brand's presence.",
  keywords: [
    "integrated digital marketing solutions",
    "custom web design and development",
    "ux/ui design solutions",
    "full stack javascript development",
    "next.js 14 dynamic web solutions",
    "content marketing strategy",
    "branding and graphic design solutions",
    "seo services",
    "social Media strategy and engagement",
    "social media content and email marketing",
  ],
};

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col  mt-6   sm:mt-12 lg:mt-10 lg:mb-44 xl:mb-44">
        <div
          className="flex flex-col  w-full h-[700px] mx-auto items-center
     
     
      lg:flex-row lg:w-[90%] 
      xl:mt-16       
      xl:w-[1200px] xl:h-[700px] "
        >
          <ContactImage />
          <ContactForm />
        </div>
        <p className="bg-button-color-2 w-[250px] py-8 px-2 rounded-lg mx-auto text-center text-lg mt-1 mb-20 sm:text-2xl sm:w-[400px] lg:mt-10 ">Or call us at <span className="text-button-color-1 tracking-wider"><Link href="tel:+6478904176">(647) 890-4176</Link></span></p>
      </div>
    </main>
  );
}
