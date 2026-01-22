import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const serviceLinks = [
    { title: "Static Website Development", to: "/static-website" },
    { title: "Dynamic Website Development", to: "/dynamic-website" },
    { title: "E-commerce Website Development", to: "/ecommerce-website" },
    { title: "Enterprise Website Development", to: "/enterprise-website" },
    { title: "Mobile App Development", to: "/mobile-app-development" },
    { title: "Web Hosting Services", to: "/web-hosting" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="custom-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col md:items-start items-center gap-4">
            <div className="flex flex-col md:items-start items-center">
              <Image
                src="/img/logo-new-cropped.webp"
                alt="AVYUKT TECH LABS"
                width={48}
                height={48}
              />
              <h3 className="text-lg font-semibold mt-2">AVYUKT TECH LABS</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-left text-center">
              A trusted IT services company offering web development, mobile app development, eCommerce websites, and digital solutions. We help businesses grow with scalable, secure & modern technology.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#134A45] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#134A45] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#134A45] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#134A45] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2 md:items-start items-center">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.to}
                    className="text-gray-600 hover:text-[#134A45] text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 md:items-start items-center">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#134A45] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#134A45] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#134A45] text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-[#134A45] text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#134A45] text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col md:items-start items-center">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[#134A45] mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm md:text-left text-center">
                  A-7, Flat no.8, 2nd Floor,<br />
                  Jawahar park, Khanpur,<br />
                  New Delhi, Delhi - 110062, India
                </p>
              </div>
              <a
                href="tel:+919625871682"
                className="flex items-center gap-2 text-gray-600 hover:text-[#134A45] text-sm transition-colors"
              >
                <Phone size={18} className="text-[#134A45] flex-shrink-0" />
                (+91) 9625871682
              </a>
              <a
                href="mailto:divyansh@avyuktlabs.in"
                className="flex items-center gap-2 text-gray-600 hover:text-[#134A45] text-sm transition-colors break-all"
              >
                <Mail size={18} className="text-[#134A45] flex-shrink-0" />
                divyansh@avyuktlabs.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border" />

      <div className="flex justify-center items-center py-6">
        <p className="md:text-sm text-xs text-center text-gray-500">
          All Rights Reserved © 2025 AVYUKT TECH LABS PRIVATE LIMITED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
