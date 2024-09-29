import Image from "next/image";
import React from "react";
import ContactUs from "@/components/ContactUs";
import Link from "next/link";

function page() {
  return (
    <article>
      <section>
        <div
          style={{
            backgroundImage: 'url("img/home-bg.webp")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex-1 bg-black bg-opacity-60 py-24">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl text-yellow-300 font-semibold">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-32 md:pb-12">
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
                  A website is your virtual marketer that presents your business virtually.<br /><br />Avyukt Tech Labs is an affordable web design and development company based in New Delhi, India, catering to a number of clients throughout the world.<br /><br />

                  From creating a website and mobile application, to promoting it on various platforms, we never failed to create your dream website and mobile application with perfect blend of graphics and create a robust online presence through digital marketing tactics.<br /><br />

                  We have built a strong reputation for delivering innovative and specialized IT solutions to our valued clients. Our track record and <Link href="/portfolio"><span className="text-amber-500">portfolio</span></Link> speaks for itself, showcasing our commitment to excellence and customer satisfaction.
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
      <section className="py-12 md:py-12">
        <div className="w-full bg-yellow-400">
          <div className="max-w-6xl mx-auto p-6 flex flex-row items-center justify-center">
            <p className="font-bold text-3xl text-white text-center">
              Creative web design & development
            </p>
          </div>
        </div>
        <div className="md:container md:mx-auto md:max-w-6xl w-full py-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex flex-col justify-between">
              <h3 className="box-title">Vision</h3>
              <p className="box-description">
                Our goal is to become a trusted web design company known for creating original, memorable designs that transform companies&aops; online personas.

                With our clients, we want to establish enduring relationships that will help them navigate the ever-evolving digital landscape and stay one step ahead. We aim to raise the bar for web design excellence by consistently pushing boundaries and embracing new trends.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="box-title">Mission</h3>
              <p className="box-description">
                In order to help businesses establish a strong online presence, engage their target audience, and accomplish their digital goals, our mission is to design beautiful, user-friendly websites.

                To give our clients a competitive edge in the digital environment, we work hard to deliver great web design solutions that combine creativity, functionality, and cutting-edge technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0 py-16">
            <div className="flex flex-col items-center justify-between w-full">
              <h3 className="box-title text-center">What we do?</h3>
              <div className="grid grid-cols-3 gap-8 w-full">
                <div className="col-span-1 rounded-xl p-4 border-2 border-yellow-400 flex flex-col bg-yellow-50/40 space-y-2">
                  <h4 className="text-xl font-semibold">Web Designing</h4>
                  <p>Our whole aim is to design visually attractive websites to grab the attention of your customers.</p>
                </div>
                <div className="col-span-1 rounded-xl p-4 border-2 border-yellow-400 flex flex-col bg-yellow-50/40 space-y-2">
                  <h4 className="text-xl font-semibold">Web Development</h4>
                  <p>Apart from creating visually attractive websites, we are also experts in web development.</p>
                </div>
                <div className="col-span-1 rounded-xl p-4 border-2 border-yellow-400 flex flex-col bg-yellow-50/40 space-y-2">
                  <h4 className="text-xl font-semibold">Mobile app development</h4>
                  <p>We create streamlined mobile applications to fit your requirements in order to serve every area.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </article>
  );
}

export default page;
