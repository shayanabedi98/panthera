import Link from "next/link";

export default function WorkWithUs() {
  return (
    <div className="mt-[250px] p-10 flex flex-col items-center">
      <div className="flex flex-col place-self-start p-10">
        <p className="font-medium text-heading-color text-xl">WORK WITH US</p>
        <p className="font-semibold text-5xl">what makes us different</p>
      </div>
      <div className="grid grid-cols-2 place-items-center">
        <div className="p-10">
          <p className="leading-7 mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p className="leading-7">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </div>
        <div className="p-10">
          <p className="leading-7 mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p className="leading-7">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </div>
      </div>
      <Link className="w-[200px]" href="/services">
        <button className="mt-[50px] bg-button-color-1 font-medium text-xl w-[200px] h-[60px] rounded-[30px] hover:bg-button-color-2 transition duration-500 ease-in-out">
          view services
        </button>
      </Link>
    </div>
  );
}
