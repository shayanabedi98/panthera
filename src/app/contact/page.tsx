import ContactForm from "@/components/contact/ContactForm";
import ContactImage from "@/components/contact/ContactImage";

export const metadata = {
  title: "Pantheras | Contact",
  description: "",
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
      <div
        className="flex flex-col  w-full h-[700px] mx-auto items-center
      mt-6 
      sm:mt-12
      lg:flex-row lg:w-[90%] lg:mt-10 lg:mb-44
      xl:mt-16 xl:mb-44      
      xl:w-[1200px] xl:h-[700px] "
      >
        <ContactImage />
        <ContactForm />
      </div>
    </main>
  );
}
