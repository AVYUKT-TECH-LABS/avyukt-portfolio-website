import { Mail, Phone } from "lucide-react";
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
  // {
  //   id: 5,
  //   title: "Blogs",
  //   to: "/blogs",
  // },
  // {
  //   id: 6,
  //   title: "Contact us",
  //   to: "/contact",
  //   isCTA: true,
  // },
];

function Header() {
  return (
    <header className="bg-white w-full fixed top-0 inset-x-0 z-10 shadow">
      <div className="border-b border-gray-200 py-3 w-full bg-[#134A45]">
        <div className="w-full md:container md:mx-auto bg-[#134A45]">
          <div className="flex flex-row items-center justify-center md:justify-between">
            <span></span>
            <div className="flex flex-row items-center divide-x divide-gray-200 space-x-2 text-sm text-white font-semibold">
              <a
                href="call:(+91) 9625871682"
                className="flex flex-row items-center gap-x-2"
              >
                <Phone size={16} />
                (+91) 9625871682
              </a>
              <a
                href="mailto:divyansh@avyuktlabs.in"
                className="flex flex-row items-center gap-x-2 pl-2"
              >
                <Mail size={16} />
                divyansh@avyuktlabs.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="main-nav"
        className="min-h-[92px] items-center justify-center flex flex-col sticky top-0 bg-white z-10"
      >
        <div className="md:container md:mx-auto w-full md:max-w-8xl flex flex-col md:flex-row items-center justify-center md:justify-between">
          <a
            href="/"
            className="flex flex-col md:flex-row items-center md:space-x-2 mb-4 md:mb-0"
          >
            <Image
              className=""
              src="/img/logo-new-cropped.webp"
              alt="Company logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-lg font-[600]">AVYUKT TECH LABS</span>
          </a>
          <nav>
            <ul className="flex flex-row items-center space-x-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={
                    link.isCTA
                      ? "shadow-[0_0_0_1px_#000000_inset] hover:bg-[#134A45] px-4 py-2 bg-transparent border border-black  text-black rounded-md font-semibold transform hidden md:block"
                      : "nav-link"
                  }
                >
                  <Link href={link.to}>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Link
              className="bg-brand px-4 py-2 text-white rounded-md font-medium transform hidden md:block"
              href="/contact"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
