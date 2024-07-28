import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="w-full p-3">
      <div className="px-12 py-4 flex md:flex-row flex-col md:space-y-0 space-y-6 justify-between items-center ">
        <div>
          <Link href="/">
            <div className="flex flex-row items-center space-x-2">
              <Image
                className=""
                src="/img/logo.png"
                alt="Avyukt Logo"
                width={50}
                height={50}
                priority
              />
              <h1 className="text-2xl font-lg font-semibold text-white font-sans">
                AVYUKT TECH LABS
              </h1>
            </div>
          </Link>
        </div>

        <ul className="text-white gap-10 flex">
          <li className="uppercase text-xl">
            <Link
              className="hover:border-b-4 hover:border-200 px-2 text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="uppercase text-xl">
            <Link
              className="hover:border-b-4 hover:border-200 px-2 text-white"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li className="uppercase text-xl">
            <Link
              className="hover:border-b-4 hover:border-200 px-2 text-white"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="md:flex hidden">
          <a
            href="https://forms.gle/W9547VW4uPHr4V957"
            target="_blank"
            className="bg-white w-[160px] hover:bg-200 font-semibold text-black px-4 py-2 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
