import Link from "next/link";
import Pricing from "./components/Pricing";
import WhyInvest from "./components/WhyInvest";
import BlogPosts from "@/components/shared/BlogPosts";
import ContactUs from "@/components/ContactUs";
import WhatWeOffer from "./components/WhatWeOffer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Mobile App Development Company in India & Dubai",
  description: "Best mobile app development company specializing in custom Android and iOS app development. Transform your ideas into high-performance mobile applications today.",
  keywords: [
    "Mobile App Development Services",
    "Mobile App Development Company",
    "Custom App Development",
    "App Development Services",
    "Best Mobile App Development Company",
    "iOS App Development",
    "Custom Android App Development",
    "Mobile App Maintenance",
    "Affordable Mobile App Development Services",
    "Custom Android and iOS App Development",
    "App Development for Startups"
  ],
};

export default function page() {
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
            <div className="flex-1 bg-black bg-opacity-80 py-48">
              <div className="flex flex-col items-start justify-center max-w-6xl px-4 mx-auto">
                <h1 className="text-4xl text-white font-semibold md:pt-0 pt-16">
                  Premium App Development Services That Power Digital Growth
                </h1>
                <p className="text-white mt-4 leading-relaxed font-light">
                  In a digital-first world, successful businesses are built on powerful mobile experiences. Avyukt Tech Labs delivers enterprise-grade App Development Services that help brands innovate, scale, and lead their markets. We design and develop high-performance mobile applications that combine elegant design, robust technology, and measurable business outcomes.
                </p>
                <p className="text-white mt-4 leading-relaxed font-light">
                  Our focus is simple—build apps that users trust, engage with, and return to.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">A Results-Driven Mobile App Development Company</h2>
              </div>
              <div>
                <p>
                  As a professional Mobile App Development Company, Avyukt Tech Labs partners with startups, SMEs, and enterprises to transform ideas into intelligent mobile solutions. We go beyond development by aligning technology with your business strategy, ensuring your app becomes a long-term asset—not just a product.
                </p>
                <p className="mt-4">
                  From concept validation to final deployment, our process is structured, transparent, and growth-oriented.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Mobile App Development Services</h2>
              </div>
              <div>
                <p>
                  Our end-to-end Mobile App Development Services are designed to meet the highest industry standards while remaining flexible to your evolving business needs.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Custom Mobile App Development tailored to your industry and audience</li>
                  <li>Native Android & iOS App Development for optimal performance</li>
                  <li>Advanced UI/UX Design focused on usability and brand consistency</li>
                  <li>Secure Backend Development & API Integration</li>
                  <li>Quality Assurance & Performance Testing</li>
                  <li>Ongoing Maintenance, Upgrades & Support</li>
                </ul>
                <p className="mt-4">
                  Every application we deliver is built with scalability, security, and future expansion in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Expert iOS App Development for Premium Experiences</h2>
              </div>
              <div>
                <p>
                  Our specialized iOS App Development team creates polished, reliable, and high-performance applications for Apple devices. Leveraging Swift, modern frameworks, and Apple design principles, we deliver iOS apps that meet strict App Store guidelines while providing a seamless user experience.
                </p>
                <p className="mt-4">
                  Whether it’s a consumer app, enterprise solution, or on-demand platform, we ensure your iOS application reflects quality, innovation, and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Our Professional Development Approach</h2>
              </div>
              <div>
                <p>
                  At Avyukt Tech Labs, we follow a refined development methodology that ensures efficiency and excellence at every stage:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Discovery & Strategy – Understanding your goals, users, and market</li>
                  <li>Design & Prototyping – Creating intuitive, conversion-focused interfaces</li>
                  <li>Development & Integration – Clean, secure, and scalable coding</li>
                  <li>Testing & Optimization – Performance, security, and usability testing</li>
                  <li>Launch & Support – Smooth deployment with continuous improvement</li>
                </ul>
                <p className="mt-4">
                  This structured approach allows us to deliver applications that perform consistently and scale effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Why Leading Brands Choose Avyukt Tech Labs</h2>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Strategy-Driven Development</li>
                  <li>Expert App Development Team</li>
                  <li>Clear & Transparent Communication</li>
                  <li>Scalable & Future-Proof Architecture</li>
                  <li>Reliable, On-Time Delivery</li>
                  <li>Long-Term Technology Partnership</li>
                </ul>
                <p className="mt-4">
                  We don’t just build apps—we help brands create powerful digital ecosystems that evolve with their business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 pb-4 px-4 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-6 justify-between">
              <div>
                <h2 className="font-bold text-2xl">Build the Future of Your Business With Confidence</h2>
              </div>
              <div>
                <p>
                  If you’re searching for a trusted Mobile App Development Company that delivers innovation, precision, and performance, Avyukt Tech Labs is your ideal partner.
                </p>
                <p className="mt-4">
                  Transform your idea into a powerful mobile application.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
        <WhatWeOffer />
        <BlogPosts
          title="Our Mobile Application Development Blogs"
          category="mobile-app-development"
        />
        <ContactUs />
      </article>
    );
}