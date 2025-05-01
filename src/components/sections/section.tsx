import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function LandingSection({
  heading,
  subheading,
  children = null,
  type = "light",
}: {
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
  type: "light" | "gray" | "brand";
}) {
  return (
    <section
      className={cn("px-4 md:px-0 md:pb-32 md:pt-24 py-16", {
        "bg-gray-50": type == "gray",
        "bg-white": type == "light",
        "bg-brand": type == "brand",
      })}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h2
            className={cn(
              "md:text-[48px] text-[36px] md:leading-9 leading-8 font-extrabold text-center",
              {
                "text-white": type == "brand",
              }
            )}
          >
            {heading}
          </h2>
          {subheading && (
            <div>
              <p
                className={cn("leading-8 text-xl text-center", {
                  "text-gray-600 ": type == "light",
                  "text-gray-300 ": type == "brand",
                })}
              >
                {subheading}
              </p>
            </div>
          )}
          <Link href="/contact" className="md:w-auto w-full">
            <Button
              size={"lg"}
              className={cn(
                "py-3 px-10 h-auto my-2 group transition-all ease-in md:w-auto w-full",
                {
                  "bg-brand hover:bg-brand": type == "light" || type == "gray",
                  "bg-white hover:bg-gray-200": type == "brand",
                }
              )}
            >
              <div className="flex flex-row items-center gap-x-4">
                <span
                  className={cn("font-semibold text-lg", {
                    "text-white": type == "light" || type == "gray",
                    "text-brand": type == "brand",
                  })}
                >
                  Get a Quote
                </span>
                <span className="group-hover:block hidden">
                  <ArrowRight
                    className={cn({
                      "text-white": type == "light" || type == "gray",
                      "text-brand": type == "brand",
                    })}
                  />
                </span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}

export default LandingSection;
