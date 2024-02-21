import pic from "@/../assets/contact-image.jpg";
import Image from "next/image";

export default function ContactImage() {
  return (
    <div className="w-[50%] rounded-bl-2xl rounded-tl-2xl">
      <Image
        className="rounded-bl-2xl rounded-tl-2xl object-cover h-[100%]"
        src={pic}
        alt="purple bubbles under water"
      />
      <h1 className="mx-auto text-6xl w-[400px] font-semibold leading-tight relative bottom-[90%]">We&apos;d love to hear from you</h1>
    </div>
  );
}
