"use client";

import LandingSection from "./section";
import {
  CardTitle,
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import Rating from "../ui/rating";

const studies = [
  {
    image: "img/internspace.webp",
    logo: "img/clients/internspace-logo.png",
    title: "🚀 100+ Daily Signups, All Organic",
    color: "#8e54db",
    description:
      "We were just starting out and had no marketing budget, so our website had to do all the work. The team built a fast, intuitive platform and optimized it for SEO right from day one. Within weeks, we started seeing a surge in organic signups—and now we consistently get over 100 new users registering every single day. It’s honestly been game-changing for our growth.",
  },
  {
    image: "img/portfolio/adrotack.png",
    logo: "img/clients/adrotack.png",
    title: "📈 8% Revenue Growth from SEO Optimization",
    color: "#00b0f0",
    description:
      "Our website just wasn’t showing up where it mattered. After working with the team, our SEO was completely revamped—better structure, faster load times, and optimized content. The result? More qualified leads, higher search rankings, and an 8% increase in revenue. It’s the first time our website has become a real asset to our sales pipeline.",
  },
  {
    image: "img/portfolio/buildocare.png",
    logo: "img/clients/buildocare.png",
    title: "🏗️ 3x More Project Inquiries in Just 2 Months",
    color: "#012353b3",
    description:
      "It was hard for potential clients to understand what we actually offered. After the redesign, everything changed. The new site looks professional, runs smoothly on all devices, and clearly showcases our portfolio. In just two months, our project inquiries tripled—all without running any ads. It finally feels like our website matches the quality of our work.",
  },
];

function CaseStudies() {
  return (
    <LandingSection
      type="light"
      heading="Clients love what we do"
      subheading="We work with some amazing clients, see what they say below!"
    >
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-6 gap-y-6 max-w-7xl mx-auto mt-16">
        {studies.map((item, idx) => (
          <Card key={idx} className="grid grid-rows-3">
            <CardHeader className="row-span-8">
              <div
                className="border rounded-lg mb-4 p-4"
                style={{
                  backgroundColor: item.color,
                }}
              >
                <Image
                  height={400}
                  width={400}
                  className="h-[200px] w-full rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Rating />
              <CardTitle className="text-2xl font-semibold mt-2 mb-4">
                {item.title}
              </CardTitle>
              <CardDescription className="text-lg leading-7 text-gray-600">
                {item.description}
              </CardDescription>
            </CardContent>{" "}
            <CardFooter className="flex flex-row items-start">
              <Image
                src={item.logo}
                width={400}
                height={200}
                className="w-auto h-auto"
                alt=""
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </LandingSection>
  );
}

export default CaseStudies;
