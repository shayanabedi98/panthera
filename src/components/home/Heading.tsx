import Link from "next/link";

export default function Heading() {
  return (
    <div className="heading">
      <div className="flex flex-col mt-48 text-center items-center	">
        <h1 className="text-8xl font-semibold leading-tight w-4/5">
          empowering your brand's digital journey
        </h1>
        <p className="mt-32 text-2xl font-medium">start your journey today</p>
        <Link className="mt-10" href="/contact">
          <button className="font-semibold text-2xl w-48 h-16 bg-button-color-2 rounded-xl hover:bg-button-color-1 transition duration-500 ease-in-out">
            contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
