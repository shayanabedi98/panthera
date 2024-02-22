import pic from "@/../assets/contact-image.jpg";
import Image from "next/image";

export default function ContactImage() {
  return (
    <div className="w-[85%] h-[80px] lg:h-[95%] xl:w-[50%] xl:rounded-bl-2xl xl:rounded-tl-2xl xl:h-[100%]">
      <Image
        className="object-cover h-[100%] w-[100%] lg:rounded-bl-2xl lg:rounded-tl-2xl xl:h-[100%]"
        src={pic}
        alt="purple bubbles under water"
      />
      <h1 className="mx-auto text-center text-xl mt-9 w-[100%] font-semibold relative bottom-[100px] sm:text-2xl md:mt-7 lg:text-6xl lg:bottom-[80%] lg:leading-tight xl:text-7xl xl:leading-snug xl:bottom-[90%]">we&apos;d love to <br /> hear from you</h1> 
    </div>
  );
}
