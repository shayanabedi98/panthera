import Link from "next/link";

export default function StartJourney() {
  return (
    <div className="p-2 mt-[50px] md:mt-[250px]">
      <div className="rounded-2xl max-w-[1200px] mx-auto  flex flex-col items-center bg-button-color-2 py-16">
        <h1 className="font-semibold text-2xl md:text-5xl">
          start your journey today
        </h1>
        <Link href="/contact">
          <button className="mt-10 bg-button-color-3 rounded-md w-[155px] h-[50px]  hover:bg-button-color-1 transition duration-500 ease-in-out">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
