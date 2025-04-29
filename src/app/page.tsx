import ContactUs from "@/components/ContactUs";
import HeroImage from "@/components/HeroImage";
import ReviewCard from "@/components/ReviewCard";
import { LeadPopup } from "@/components/shared/LeadPopoup";
import Timeline from "@/components/timeline";
import { getThemeColor } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand1.png",
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand2.png",
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand3.png",
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand4.png",
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand5.png",
  "https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/brand6.png",
];

const techs = [
  "Bootstrap",
  "HTML",
  "CSS",
  "JS",
  "React",
  "WordPress",
  "php",
  "node.js",
  "Sass",
  "Angular",
  "Woocommerce",
  "Elementor",
  "OpenAI",
  "Shopify",
];

function page() {
  return (
    <article>
      <section className="py-12 px-4 md:px-0 md:py-32 flex flex-row items-center">
        <div className="container mx-auto max-w-8xl">
          <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full md:gap-x-12 gap-y-6">
            <div className="flex flex-col gap-y-6 md:py-24 py-10">
              <div className="relative">
                <div className="absolute right-12 -top-12 -z-10 animate-spin">
                  <Image
                    src="https://framerusercontent.com/images/mFr6YNitDQJTKmyUCjzzjzPbk.png"
                    height={222}
                    width={219}
                    alt=""
                  />
                </div>
                <h2 className="hero-text">We Help Build Your Dream Project</h2>
              </div>
              <div>
                <p className="text-gray-500 leading-7 text-xl">
                  Get high quality web design & development services for all
                  sized businesses & companies worldwide.
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center md:gap-x-4 gap-y-4">
                {/* <Link target="_blank" href={"/contact"}>
                  <button className="bg-[#34f092] px-10 py-4 text-black rounded-lg font-semibold transition duration-400 group">
                    <span className="flex flex-row items-center justify-between space-x-3 w-full">
                      <span>Get Free Consultation</span>
                    </span>
                  </button>
                </Link> */}
                <LeadPopup />
                <Link href={"/portfolio"} className="md:w-1/2 w-full">
                  <button className="w-full px-10 py-4 bg-transparent border text-black rounded-lg font-semibold transition duration-400 group hover:text-[#34f092]">
                    <span className="flex flex-row items-center justify-center space-x-3 w-full">
                      <span>Our Portfolio</span>
                    </span>
                  </button>
                </Link>
              </div>
              <ReviewCard />
            </div>
            <HeroImage />
          </div>
        </div>
      </section>

      <section className="bg-[#34f092] py-12 px-4 md:px-0 md:py-32">
        <div className="md:container md:mx-auto md:max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex flex-col justify-between">
              <h3 className="box-title">100% Satisfaction</h3>
              <p className="box-description">
                At Avyukt Tech Labs, your satisfaction is our top priority.
                We&apos;re committed to delivering results that exceed your
                expectations. Our iterative approach ensures that we refine our
                solutions until you&apos;re completely satisfied, guaranteeing a
                final product that aligns perfectly with your vision and
                business goals.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="box-title">Professional Team</h3>
              <p className="box-description">
                Our team of seasoned experts brings a wealth of experience and
                cutting-edge skills to every project. From skilled developers
                and designers to savvy digital marketers, each member of Avyukt
                Tech Labs is dedicated to crafting innovative solutions that
                drive your business forward. We stay ahead of industry trends to
                ensure you always receive the most advanced and effective
                digital strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 pt-12 md:pt-40">
        <div className="md:container md:mx-auto md:max-w-7xl w-full">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="relative hidden md:block">
              <h2 className="theme-headline">
                <span
                  className={cn(
                    "theme-section-headline heading md:-ml-10",
                    getThemeColor("text", 0)
                  )}
                >
                  Technologies{" "}
                </span>
                <p className="-mt-4">Platforms we&apos;re offering</p>
              </h2>
            </div>
            <div className="block md:hidden">
              <h3 className="text-4xl">Technologies</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-full px-6 py-3 transition-colors	ease-in-out bg-stone-100 hover:bg-black hover:text-white"
                >
                  <span className="text-xl">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-0 py-12 md:py-32">
        <div className="md:container md:mx-auto md:max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
            <div className="relative flex flex-wrap items-start justify-start md:w-1/2">
              {/* <div className="bg-grid-img-left hidden md:block">
                <Image
                  src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Pattern-min.jpeg"
                  width={400}
                  height={600}
                  alt=""
                />
              </div> */}
              <div className="md:-mt-12 z-[2]">
                <Image
                  src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Image-4.jpeg"
                  width={400}
                  height={550}
                  alt=""
                  className="rounded-lg shadow-xl w-[360px] md:w-[400px]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-6 md:w-1/2 md:py-12 py-24">
              <div className="relative">
                <h2 className="theme-headline">
                  <span className="theme-section-headline heading">
                    Services{" "}
                  </span>
                  Suitable For Any type Of
                  <br />
                  Businesses
                </h2>
              </div>
              <div>
                <p className="text-gray-500 leading-8">
                  At Avyukt Tech Labs, we offer a comprehensive suite of digital
                  solutions tailored to businesses of all sizes and industries.
                  Our versatile services are designed to address every aspect of
                  your online presence, ensuring your business thrives in the
                  digital realm regardless of your specific niche or market.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#5857f9] border-[#5857f9]"
                    )}
                  ></span>
                  <span>Web Development</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#fb5457] border-[#fb5457]"
                    )}
                  ></span>

                  <span>SEO Services</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#9c34f0] border-[#9c34f0]"
                    )}
                  ></span>

                  <span>Digital Marketing</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#f07f34] border-[#f07f34]"
                    )}
                  ></span>

                  <span>Mobile App Dev</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#34f092] border-[#34f092]"
                    )}
                  ></span>

                  <span>Branding Solutions</span>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <span
                    className={cn(
                      "border-2 p-2 -mr-4 h-4 w-4 rounded-full",
                      "bg-[#f0b934] border-[#f0b934]"
                    )}
                  ></span>

                  <span>Email Marketing</span>
                </div>
              </div>
              <div className="pt-4">
                <Link href={"/services"}>
                  <button className="cta-btn !py-3">
                    <span>Our Services</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="relative">
              <h2 className="theme-headline">
                <span className="theme-section-headline heading ml-24 md:ml-16">
                  Trust Us{" "}
                </span>
                <p className="-mt-5 text-center md:text-left">
                  Reason for choosing us
                </p>
              </h2>
            </div>
            <div>
              <Image
                src="https://xstore.b-cdn.net/elementor/demos/business02/wp-content/uploads/sites/75/2022/04/Video.png"
                width={1000}
                height={800}
                className="w-["
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-[#34f092] pt-56 -mt-56 h-[380px]">
          <div className="md:container md:mx-auto w-full md:max-w-7xl pt-12">
            <div className="flex flex-row items-center space-x-6 md:px-24 px-4">
              {companies.map((company, index) => (
                <div key={index}>
                  <Image src={company} height={28} width={144} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col space-y-8 items-center justify-center">
            <div className="relative mb-16">
              <h2 className="theme-headline">
                <span className="theme-section-headline heading ml-10 md:-ml-1">
                  Process{" "}
                </span>
                <p className="-mt-5">How do we work</p>
              </h2>
            </div>
            <Timeline />
          </div>
        </div>
      </section>
      <ContactUs />
    </article>
  );
}

export default page;
