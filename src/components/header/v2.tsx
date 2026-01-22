"use client";
import { Mail, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const navLinks: {
  id: number;
  title: string;
  to: string;
  isCTA?: boolean;
  hasDropdown?: boolean;
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
    hasDropdown: true,
  },
  {
    id: 4,
    title: "Portfolio",
    to: "/portfolio",
  },
];

const serviceLinks = [
  {
    title: "Static Website Development",
    to: "/static-website",
  },
  {
    title: "Dynamic Website Development",
    to: "/dynamic-website",
  },
  {
    title: "E-commerce Website Development",
    to: "/ecommerce-website",
  },
  {
    title: "Enterprise Website Development",
    to: "/enterprise-website",
  },
  {
    title: "Mobile App Development",
    to: "/mobile-app-development",
  },
  {
    title: "Web Hosting Services",
    to: "/web-hosting",
  },
];

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white w-full fixed top-0 inset-x-0 z-50 shadow">
      <div className="border-b border-gray-200 py-3 w-full bg-[#134A45]">
        <div className="w-full md:container md:mx-auto bg-[#134A45]">
          <div className="flex flex-row items-center justify-center md:justify-between">
            <span></span>
            <div className="flex flex-row items-center divide-x divide-gray-200 space-x-2 text-sm text-white font-semibold">
              <a
                href="tel:+919625871682"
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
        className="min-h-[92px] items-center justify-center flex flex-col sticky top-0 bg-white z-50"
      >
        <div className="md:container md:mx-auto w-full md:max-w-8xl flex flex-col md:flex-row items-center justify-center md:justify-between px-4">
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
                      ? "shadow-[0_0_0_1px_#000000_inset] hover:bg-[#134A45] px-4 py-2 bg-transparent border border-black text-black rounded-md font-semibold transform hidden md:block"
                      : link.hasDropdown
                        ? "nav-link relative"
                        : "nav-link"
                  }
                >
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      ref={dropdownRef}
                    >
                      <Link
                        href={link.to}
                        className="flex flex-row items-center gap-1 pt-1.5 cursor-pointer hover:text-[#134A45] transition-colors"
                      >
                        <span>{link.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full pt-2 transition-all duration-200 w-[280px] ${
                          isServicesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="bg-white shadow-lg rounded-md py-2 min-w-[240px] border border-gray-100">
                          {serviceLinks.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.to}
                              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#134A45] transition-colors text-sm"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.to}
                      className="hover:text-[#134A45] transition-colors"
                    >
                      <span>{link.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Link
              className="bg-[#134A45] hover:bg-[#0f3d39] px-4 py-2 text-white rounded-md font-medium transform hidden md:block transition-colors"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
