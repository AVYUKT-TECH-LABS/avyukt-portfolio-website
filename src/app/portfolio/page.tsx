"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "LifeSure",
    url: "https://themewagon.github.io/LifeSure/",
    description:
      "We developed a comprehensive website for LifeSure, a health insurance company, ensuring seamless user navigation and easy access to essential insurance information and services.",
    image: "https://themewagon.com/wp-content/uploads/2024/07/LIfeSure.webp",
  },
  {
    id: 2,
    title: "Uoni",
    url: "https://themewagon.github.io/Uoni/",
    image: "https://themewagon.com/wp-content/uploads/2024/03/Uoni.png",
    description:
      "For Uoni, a luxury watch brand, we crafted a sophisticated and elegant e-commerce website that highlights their exquisite timepieces and enhances the shopping experience.",
  },
  {
    id: 3,
    title: "Waggy",
    url: "https://rafiaein.github.io/waGGy/",
    image: "https://themewagon.com/wp-content/uploads/2024/03/waGGy.png",
    description:
      "We created a vibrant and user-friendly online store for Waggy, specializing in pet products, making it easy for pet owners to find and purchase the best products for their furry friends.",
  },
  {
    id: 4,
    title: "Mueller",
    url: "https://themewagon.github.io/mueller/",
    image: "https://themewagon.com/wp-content/uploads/2023/12/mueller.png",
    description:
      "For Mueller, a creative agency, we designed a visually engaging and innovative website that effectively showcases their portfolio and creative services.",
  },
  {
    id: 5,
    title: "Guarder",
    url: "https://themewagon.github.io/guarder/",
    image: "https://themewagon.com/wp-content/uploads/2023/10/Guarder.png",
    description:
      "We developed a robust and secure website for Guarder, a security provider, highlighting their comprehensive security solutions and services with a focus on reliability and trust.",
  },
  {
    id: 6,
    title: "VILLA",
    url: "https://themewagon.github.io/VillaAgency",
    description:
      "We built a luxurious and intuitive website for VILLA, a villa rental agency, showcasing high-end properties and facilitating easy booking for clients.",
    image: "https://themewagon.com/wp-content/uploads/2023/10/VillaAgency.png",
  },
  {
    id: 7,
    title: "Furni",
    url: "https://themewagon.github.io/furni/",
    description:
      "We designed a stylish and functional e-commerce site for Furni, a furniture business, enhancing the online shopping experience with an extensive catalog and easy navigation.",
    image: "https://themewagon.com/wp-content/uploads/2023/08/furni.png",
  },
  {
    id: 8,
    title: "Ultras",
    url: "https://themewagon.github.io/ultras/",
    description:
      "For Ultras, an e-commerce clothing brand, we developed a dynamic and trendy online store that highlights their unique apparel and simplifies the shopping process for customers.",
    image: "https://themewagon.com/wp-content/uploads/2023/07/ultras.png",
  },
  {
    id: 9,
    title: "Internspace",
    url: "https://internspace.in",
    description:
      "For Internspace, an internships platform, we developed a streamlined and user-friendly website that connects students with valuable internship opportunities seamlessly.",
    image: "/img/internspace.webp",
  },
];

export default function Page() {
  const [showPreview, setShowPreview] = useState<string | null>(null);

  useEffect(() => {
    const handleBackButton = (event: any) => {
      // Prevent default back button behavior
      if (showPreview) event.preventDefault();
      else setShowPreview(null);
    };

    // Add event listener to listen for back button presses
    window.addEventListener("popstate", handleBackButton);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [showPreview]);
  return (
    <article className="w-full">
      <section>
        <div
          style={{
            backgroundImage: 'url("img/home-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex-1 bg-black bg-opacity-60 py-12">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-white font-semibold text-center">
                Portfolio
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 w-full">
        <div className="md:container md:mx-auto md:max-w-8xl w-full">
          <div className="flex flex-col items-center space-y-20 justify-between">
            <div>
              <div className="relative">
                <h2 className="theme-headline">
                  <p className=" text-center">Some of our premium work</p>
                </h2>
                <p className="text-center mt-4">
                  At <Link href="/" className="text-amber-500">Avyukt Tech Labs</Link>, we take pride in our website design and eCommerce development portfolio. Each project is a testament to our creativity and technical expertise. With a focus on user-centric design and cutting-edge development, we craft websites that captivate, engage, and deliver results. Explore our portfolio to see how we&aops;ve helped businesses like yours thrive in the digital landscape. From sleek, responsive designs to e-commerce solutions that boost sales, our work speaks for itself. Join our satisfied clients and embark on a journey toward digital excellence with  <Link href="/" className="text-amber-500">Avyukt Tech Labs</Link>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-gray-200 rounded-lg flex flex-col items-center cursor-pointer hover:border-yellow-400 md:shadow-md"
                  onClick={() => setShowPreview(project.url)}
                >
                  <Image
                    src={project.image}
                    width={440}
                    height={200}
                    alt={project.title}
                    className="rounded-t-lg w-full h-[260px]"
                  />
                  <div className="flex flex-col bg-white p-4 rounded-b-lg my-4 space-y-3">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <span className="leading-loose text-gray-800">
                      {project.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showPreview && (
        <div className="fixed bottom-0 w-full bg-black z-10 h-full bg-opacity-40 flex flex-col-reverse">
          <div
            className="w-full"
            style={{
              height: "100%",
            }}
          >
            <iframe src={showPreview} className="h-full w-full bg-white" />
          </div>
          {/* <div className="flex flex-row items-center justify-end w-full px-12 pb-3">
            <button
              className="cursor-pointer"
              onClick={() => setShowPreview(null)}
            >
              <p className="text-white text-2xl font-semibold">x</p>
            </button>
          </div> */}
        </div>
      )}
    </article>
  );
}
