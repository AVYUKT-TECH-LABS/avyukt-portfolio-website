import ClientsWorkedWith from "@/components/ClientsWorkedWith";
import Header from "@/components/header/header";
import ConnectWithUs from "@/components/shared/ConnectWithUs";
import Image from "next/image";
import React from "react";
import Technologies from "../../components/Technologies";
import ContactUs from "../../components/ContactUs";

const services = [
  {
    id: 1,
    title: "Website Development",
    content: `At our company, we specialize in creating dynamic, responsive, and user-friendly websites tailored to your business needs. Our expert team of developers uses the latest technologies to ensure your website is not only visually appealing but also highly functional and optimized for performance. Whether you need an e-commerce platform, a corporate site, or a personal blog, we provide end-to-end solutions from design to deployment.`,
  },
  {
    id: 2,
    title: "Mobile App Development",
    content: `We offer comprehensive mobile app development services to bring your innovative ideas to life on both Android and iOS platforms. Our experienced developers craft custom mobile applications that are intuitive, feature-rich, and designed to enhance user engagement. From concept to launch, we ensure your app meets the highest standards of usability and performance, helping you reach a wider audience in the mobile-first world.`,
  },
  {
    id: 4,
    title: "Branding & Marketing",
    content: `Our branding and marketing services are designed to elevate your brand and connect with your target audience effectively. We create cohesive brand identities that resonate with your customers and differentiate you from the competition. From logo design and brand strategy to content creation and social media management, our team ensures your brand message is consistent and compelling across all channels.`,
  },
  {
    id: 5,
    title: "Search Engine Optimization",
    content: `Boost your online visibility and drive organic traffic to your website with our expert Search Engine Optimization (SEO) services. We use proven strategies and the latest SEO techniques to improve your website's search engine rankings. Our comprehensive approach includes keyword research, on-page and off-page optimization, technical SEO, and continuous performance monitoring to ensure your site achieves and maintains top positions in search results.`,
  },
  {
    id: 6,
    title: "Digital Marketing",
    content: `Maximize your online presence and achieve your business goals with our tailored digital marketing solutions. Our team combines creativity and data-driven strategies to deliver impactful campaigns across multiple digital channels, including social media, PPC, content marketing, and more. We focus on understanding your audience and creating personalized experiences that drive engagement, conversions, and ROI.`,
  },
  {
    id: 6,
    title: "Email Marketing",
    content: `Harness the power of email marketing to nurture leads, build customer relationships, and drive sales. Our email marketing services include strategy development, content creation, campaign management, and performance analysis. We craft compelling emails that speak directly to your audience, delivering the right message at the right time to boost engagement and achieve your marketing objectives.`,
  },
];

const page = () => {
  return (
    <div>
      {/* <section>
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
                Services
              </h1>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 md:py-32 px-4 md:px-0">
        <div className="container mx-auto max-w-8xl">
          <div className="flex flex-col items-center space-y-20 justify-between">
            <div>
              <div className="relative hidden md:block">
                <h2 className="theme-headline">
                  <span className="heading ml-20">Services </span>
                  <p className="-mt-8 text-center">
                    We’re Offering Creative
                    <br />
                    Web Services
                  </p>
                </h2>
              </div>
              <div>
                <h4 className="text-5xl font-semibold block md:hidden">
                  Services
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="border border-gray-300 rounded-lg hover:border-yellow-400 transition ease-in-out bg-white py-8 px-8"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col space-y-8">
                      <h1 className="text-2xl font-semibold text-center md:text-left">
                        {service.title}
                      </h1>
                      <p className="text-lg leading-loose text-gray-800  text-center md:text-left">
                        {service.content}
                      </p>
                    </div>
                    <div className="mt-8 w-full">
                      <a
                        target="_blank"
                        href="https://forms.gle/W9547VW4uPHr4V957"
                      >
                        <button className="cta-btn w-full">
                          <span>Contact Us</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactUs />

      {/* <section className="bg-200 w-full md:py-36 py-16 md:px-0 px-8">
        <div className="flex justify-between items-center md:flex-row flex-col gap-12 relative">
          <div className="flex flex-col md:gap-16 gap-8 w-full">
            <div className="flex flex-col gap-4">
              <h1 className="md:text-6xl text-2xl text-center font-light">
                How can we help you?
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white md:divide-y-0 sm:divide-x-0 divide-y">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="md:p-16 py-16 flex flex-col space-y-8 items-center justify-between"
                >
                  <div>
                    <h1 className="text-2xl text-center mb-4">
                      {service.title}
                    </h1>
                    <p className="text-xl font-light text-center">
                      {service.content}
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://forms.gle/W9547VW4uPHr4V957"
                      target="_blank"
                      className="p-2 px-4 border border-black text-lg font-semibold hover:text-white hover:bg-black transition-colors"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default page;
