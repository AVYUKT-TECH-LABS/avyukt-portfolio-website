import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks: {
  id: number;
  title: string;
  to: string;
  isCTA?: boolean;
}[] = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "About us",
    to: "/about",
  },
  {
    id: 3,
    title: "Services",
    to: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    id: 5,
    title: "Blogs",
    to: "/blogs",
  },
  {
    id: 6,
    title: "Contact us",
    to: "/contact",
    isCTA: true,
  },
];

function Header() {
  return (
    <header className="bg-white w-full">
      {/* <div className="border-b border-gray-200 py-3 w-full">
        <div className="w-full md:container md:mx-auto md:max-w-6xl">
          <div className="flex flex-row items-center justify-center md:justify-between">
            <span></span>
            <div className="flex flex-row items-center divide-x divide-gray-200 space-x-2 text-sm text-gray-700">
              <span>(+91) 8178392040</span>
              <span className="pl-2">divyansh@avyuktlabs.in</span>
            </div>
          </div>
        </div>
      </div> */}
      <div
        id="main-nav"
        className="min-h-[92px] items-center justify-center flex flex-col sticky top-0 bg-white z-10"
      >
        <div className="md:container md:mx-auto w-full md:max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between">
          <a
            href="/"
            className="flex flex-col md:flex-row items-center md:space-x-2 mb-4 md:mb-0"
          >
            <Image
              className=""
              src="/img/logo-full.webp"
              alt="Avyukt Logo"
              width={250}
              height={48}
              priority
            />
          </a>
          <nav>
            <ul className="flex flex-row items-center space-x-6">
              {navLinks.map((link) => (
                <Link href={link.to} key={link.id}>
                  <li
                    className={
                      link.isCTA ? "cta-btn !py-3 hidden md:block" : "nav-link"
                    }
                  >
                    <span>{link.title}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
