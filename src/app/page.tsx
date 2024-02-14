import Image from "next/image";
import logo from '@/../assets/logo-transparent.png'

export default function Home() {
  return (
    <div>
      <header className="flex">
        <div>
          <Image className="size-24" src={logo} alt="An illustrated side profile of a panthera"/>
          <p>PANTHERA</p>
        </div>
        <nav></nav>
      </header>
    </div>
  );
}
