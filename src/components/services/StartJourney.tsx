import Link from "next/link";

export default function() {
    return (
        <div className="w-[1200px] mx-auto mt-[250px] flex flex-col items-center bg-button-color-2 py-16">
            <h1 className="font-semibold text-5xl">start your journey today</h1>
            <Link href="/contact"><button className="mt-10 bg-button-color-3 rounded-md w-[155px] h-[50px]  hover:bg-button-color-1 transition duration-500 ease-in-out">Get Started</button></Link>
        </div>
    )
}