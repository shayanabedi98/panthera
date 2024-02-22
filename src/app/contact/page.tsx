import ContactForm from "@/components/contact/ContactForm";
import ContactImage from "@/components/contact/ContactImage";

export default function Contact() {
  return (
    <main>
      <div
        className="flex flex-col  w-full h-[700px] mx-auto items-center
      mt-6 
      sm:mt-12
      lg:flex-row lg:w-[90%] lg:mt-10 lg:mb-44
      xl:mt-10 xl:mb-44      
      xl:w-[1200px] xl:h-[700px] "
      >
        <ContactImage />
        <ContactForm />
      </div>
    </main>
  );
}
