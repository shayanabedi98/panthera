import ContactForm from "@/components/contact/ContactForm";
import ContactImage from "@/components/contact/ContactImage";

export default function Contact() {
  return (
    <main>
      <div className="flex mx-auto my-28 w-[1200px] h-[700px]">
        <ContactImage />
        <ContactForm />
      </div>
    </main>
  );
}
