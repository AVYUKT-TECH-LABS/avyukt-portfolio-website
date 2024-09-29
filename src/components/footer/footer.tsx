import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="custom-container flex md:flex-row flex-col py-24 justify-between gap-10">
        <div className="flex flex-col md:items-start justify-center items-center gap-10">
          <div className="flex flex-col justify-center md:items-start items-center space-x-2">
            <Image
              className=""
              src="/img/logo-full.webp"
              alt="Avyukt Logo"
              width={250}
              height={48}
            />
            <div className="flex flex-col space-y-1 mt-2">
              <div className="md:text-start text-center">
                <p className="text-gray-400">
                  A-7, Flat no.8, 2nd Floor, Jawahar park, Khanpur,
                  <br />
                  New Delhi, Delhi - 110062, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:items-end gap-10">
          <ul className="md:flex md:flex-row grid grid-cols-2 gap-4 text-lg md:gap-12 text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="col-span-2">
              <Link target="_blank" href="https://forms.gle/W9547VW4uPHr4V957">Contact Us</Link>
            </li>
          </ul>

          {/* <div className='flex gap-2'>
            socials
          </div> */}
        </div>
      </div>

      <hr className="border" />

      <div className="flex justify-center items-center py-12">
        <p className="md:text-sm text-xs">
          Copyright © 2024 Avyukt Tech Labs Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
