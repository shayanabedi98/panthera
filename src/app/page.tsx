import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col mt-48 text-center items-center	">
        <h1 className="text-8xl font-semibold w-4/5">empowering your brand's digital journey</h1>
        <p className="mt-32 text-lg font-medium">start your journey today</p>
        <Link className="mt-10" href='/contact'><button className="font-semibold text-xl w-32 h-12 bg-[#23225e] rounded-lg">contact us</button></Link>
      </div>
    </div>
  );
}
