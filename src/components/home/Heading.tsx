import Link from "next/link";

export default function Heading() {
  return (
    <div className="heading">
      <div className="flex flex-col mt-24 md:mt-48 text-center items-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight w-4/5">
          empowering your brand&apos;s digital journey
        </h1>
        <p className="my-12 md:my-24 text-2xl font-medium">
          start your journey today
        </p>
        <Link className="" href="/contact">
          <button className="font-semibold text-lg md:text-2xl w-32 md:w-48 h-12 md:h-16 bg-button-color-2 rounded-xl hover:bg-button-color-1 transition duration-500 ease-in-out">
            contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
