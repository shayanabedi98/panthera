import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-col mt-24 md:mt-48 text-center items-center	">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight w-4/5">
        email sent!
      </h1>
      <p className="my-12 md:my-24 text-xl font-medium sm:text-2xl">
        we will be in contact with you shortly.
      </p>
      <Link className="mb-56" href="/contact">
        <button className="font-semibold text-lg md:text-2xl w-32 md:w-48 h-12 md:h-16 bg-button-color-2 rounded-xl hover:bg-button-color-1 transition duration-500 ease-in-out">
          return
        </button>
      </Link>
    </div>
  );
}
