import Image from "next/image";
import React from "react";
import ContactUs from "@/components/ContactUs";

function page() {
  return (
    <div>
      <section>
        <div
          style={{
            backgroundImage: 'url("img/home-bg.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex-1 bg-black bg-opacity-60 py-24">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-yellow-200 font-semibold">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-32">
        <div className="w-full md:container md:mx-auto md:max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:space-x-20 justify-center space-y-12 md:space-y-0 md:justify-between x-4 md:px-0">
            <div className="flex flex-col space-y-8 md:w-1/2">
              <div className="relative hidden md:block">
                <h2 className="theme-headline">
                  <span className="heading">About </span>
                  <p className="-mt-4">Company Overview</p>
                </h2>
              </div>
              <div className="block md:hidden">
                <h4 className="text-5xl font-semibold text-center md:text-left">
                  Who we are
                </h4>
              </div>
              <div>
                <p className="leading-relaxed text-center md:text-left px-4 md:px-0">
                  At Avyukt Tech Labs, we&apos;re your partners in digital
                  success. Founded on principles of innovation and client
                  satisfaction, we deliver cutting-edge web development, mobile
                  app solutions, branding, and digital marketing services. Our
                  diverse team of experts combines technical prowess with
                  creative insight to transform your digital challenges into
                  opportunities for growth. With a commitment to staying ahead
                  of industry trends and a track record of empowering businesses
                  across sectors, we&apos;re dedicated to crafting tailored
                  digital solutions that drive your success in the ever-evolving
                  online landscape.
                </p>
              </div>
            </div>
            <div className="relative flex flex-wrap items-start justify-start md:w-1/2 pt-4 md:pt-0">
              <div className="bg-grid-img-left">
                <Image
                  src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Pattern-min.jpeg"
                  width={400}
                  height={600}
                  alt=""
                  className="hidden md:block"
                />
              </div>
              <div className="-mt-12 z-[2]">
                <Image
                  src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Image-4.jpeg"
                  width={400}
                  height={550}
                  alt=""
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}

export default page;
