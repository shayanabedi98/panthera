import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="flex flex-col mt-48 text-center items-center	">
      <h1 className="text-8xl font-semibold leading-tight w-5/6">
        email sent!
      </h1>
      <p className="my-32 text-2xl font-medium">
        we will be in contact with you shortly.
      </p>
      <Link className="mb-56" href="/contact">
          <button className="font-semibold text-2xl w-48 h-16 bg-button-color-2 rounded-xl hover:bg-button-color-1 transition duration-500 ease-in-out">
            return
          </button>
        </Link>
    </div>
  );
}
