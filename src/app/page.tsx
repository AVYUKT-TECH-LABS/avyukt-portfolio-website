import ContactUs from "@/components/ContactUs";
import HeroImage from "@/components/HeroImage";
import ReviewCard from "@/components/ReviewCard";
import CaseStudies from "@/components/sections/case-studies";
import Features from "@/components/sections/features";
import LandingSection from "@/components/sections/section";
import { LeadPopup } from "@/components/shared/LeadPopoup";
import Timeline from "@/components/timeline";
import { getThemeColor } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, CircleCheck, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whatWeWillDo = [
  {
    icon: <CircleCheck className="w-12 h-12" />,
    title: "Easily Editable",
    description:
      "Our websites are easy to edit yourself, so you don't have to wait on us for every little change.",
  },
  {
    icon: <CircleCheck className="w-12 h-12" />,
    title: "Custom to your business",
    description:
      "You'll get a website that is completely custom to your business.",
  },
  {
    icon: <CircleCheck className="w-12 h-12" />,
    title: "Fully Responsive",
    description:
      "All of our websites are responsive, so they look great on any device.",
  },
  {
    icon: <CircleCheck className="w-12 h-12" />,
    title: "Built For Growth",
    description:
      "Websites built by us are scalable, so they can grow with your business.",
  },
];

const help = [
  {
    title: "You're getting visitors, but not getting leads?",
    description:
      "We turn your website into a lead-generating machine. We design websites that guide visitors toward taking action—like filling out a form, booking a call, or making a purchase.",
    icon: "/img/mobile-web.gif",
  },
  {
    title: "You're not showing up on Google?",
    description:
      "If people can’t find you, they can’t hire you. We build websites with SEO in mind from the start, so you have a better chance of ranking on search engines.",
    icon: "/img/search-new.gif",
  },
  {
    title: "You don't know how your website is performing!",
    description:
      "Without tracking, it’s just guesswork. We set up simple, powerful analytics so you can see how many people visit, where they come from, and what they do—so you can make smart decisions.",
    icon: "/img/rounding-lines-2-black.gif",
  },
];

function page() {
  return (
    <article className="pt-12">
      <section className="py-12 px-4 md:px-0 md:py-32 md:pb-6 flex flex-row items-center">
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
                <h1
                  className="text-black md:text-[72px] text-[54px] md:text-left text-center font-[800]"
                  style={{
                    lineHeight: "72px",
                  }}
                >
                  Websites that Drives Sales and Growth for Your Business
                </h1>
              </div>
              <div>
                <p className="text-gray-600 leading-8 md:text-2xl text-lg md:text-left text-center">
                  We help businesses grow through web design and lead
                  generation. Transform your business with an exceptional
                  website also with cutting-edge SEO to drive highly targeted
                  traffic that converts and boosts your sales.
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center md:gap-x-4 gap-y-4">
                {/* <Link target="_blank" href={"/contact"}>
                  <button className="bg-[#134A45] px-10 py-4 text-black rounded-lg font-semibold transition duration-400 group">
                    <span className="flex flex-row items-center justify-between space-x-3 w-full">
                      <span>Get Free Consultation</span>
                    </span>
                  </button>
                </Link> */}
                <LeadPopup />
                <Link href={"/portfolio"} className="md:w-1/2 w-full">
                  <button className="w-full px-10 py-4 bg-transparent border text-black rounded-lg font-semibold transition duration-400 group hover:text-[#134A45]">
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
      <Features />
      <CaseStudies />
      <LandingSection
        type="gray"
        heading="Where can we help?"
        // subheading="We work with some amazing clients, see what they say below!"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto container max-w-7xl md:mt-24 my-16">
          {help.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-y-4 items-center justify-center"
            >
              <div>
                <Image
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  className="md:w-16 w-24 md:h-16 h-24"
                  src={item.icon}
                />
              </div>
              <h2 className="text-3xl font-bold text-center">{item.title}</h2>
              <p className="font-medium text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </LandingSection>
      <LandingSection
        type="brand"
        heading="Looking to re-design your website or build a new one?"
        subheading="Avyukt Tech Labs is a web design agency that primarily serves B2B clients. We are a team of experienced designers, developers and SEO specialists."
      >
        <div className="flex flex-row items-center justify-center mt-8">
          <Image
            loading="lazy"
            width={400}
            height={600}
            alt=""
            className="w-[900px] h-auto"
            src="https://cdn.prod.website-files.com/6324661c63e26f8afea58f44/65b938bb3912784a68309083_iridiumlaw-figma-p-2000.png"
          />
        </div>
        {/* <div className="px-54 pl-64 py-12 md:flex flex-row items-center hidden">
          <Image
            loading="lazy"
            width={400}
            height={600}
            alt=""
            className="w-[900px] -mr-[300px] h-auto"
            src="https://cdn.prod.website-files.com/6324661c63e26f8afea58f44/65b938bb3912784a68309083_iridiumlaw-figma-p-2000.png"
          />
          <Image
            loading="lazy"
            width={400}
            height={600}
            alt=""
            className="w-[1000px] h-auto"
            src="https://cdn.prod.website-files.com/6324661c63e26f8afea58f44/65b93a89856482e41e9892ff_iridium-law-homepage-redesign-p-2000.jpg"
          />
        </div> */}
      </LandingSection>
      <LandingSection type="light" heading="Your Website Will be...">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-8 md:px-48 px-6 mx-auto mt-12">
          {whatWeWillDo.map((item, idx) => (
            <div className="flex flex-col gap-y-4" key={idx}>
              <div>{item.icon}</div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <span className="leading-7 text-xl">{item.description}</span>
            </div>
          ))}
        </div>
      </LandingSection>
      <section className="bg-brand py-12 px-4 md:px-0 md:py-24">
        <div className="md:container md:mx-auto md:max-w-8xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-4">
              <div className="flex flex-col gap-y-4 md:w-1/2 w-full">
                <h2 className="text-[36px] md:text-[48px] font-semibold text-white">
                  Once your website is ready we help you get found on Google!
                </h2>
                <div>
                  <p className="leading-8 text-xl text-white text-left">
                    We understand that having a great website is just the first
                    step towards online success. To ensure your business thrives
                    online, we offer comprehensive SEO designed to boost your
                    website&apos;s visibility on Google.
                  </p>
                </div>
                <div className="leading-8 text-xl text-white text-left">
                  <p>Some of the key things we do include:</p>
                  <ul className="flex flex-col gap-y-4 my-4 text-lg">
                    <li className="flex flex-row items-start gap-x-3">
                      <CircleCheckBig className="text-white md:h-12 h-16 md:w-12 w-16" />
                      <p>
                        We research and integrate valuable keywords into your
                        website, boosting your visibility in relevant search
                        results.
                      </p>
                    </li>
                    <li className="flex flex-row gap-x-3">
                      <CircleCheckBig className="text-white md:h-12 h-16 md:w-12 w-16" />
                      <p>
                        On-Page SEO: Our experts optimise your website&apos;s
                        structure, meta tags, and content, making it search
                        engine-friendly.
                      </p>
                    </li>
                    <li className="flex flex-row gap-x-3">
                      <CircleCheckBig className="text-white md:h-12 h-16 md:w-12 w-16" />
                      <p>
                        Link Building and Backlink Analysis: We create quality
                        backlinks and regularly analyse them, enhancing your
                        website&apos;s authority and Google ranking.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  loading="lazy"
                  width={400}
                  height={600}
                  alt=""
                  className="w-auto h-auto"
                  src="https://cdn.prod.website-files.com/6324661c63e26f8afea58f44/65b936cdd636c895dbfccec2_lawyer%20near%20me%20image%20purple.png"
                />
              </div>
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
