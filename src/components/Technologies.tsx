import { TECH } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Technologies = () => {
  return (
    <section className="custom-container md:py-36 py-16 md:px-0 px-8 flex flex-col md:space-y-48 space-y-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="md:text-6xl text-3xl !leading-none text-center">
          Technologies we work with
        </h2>
        <div className="flex flex-wrap space-x-6 space-y-6 mt-4">
          {TECH.map(({ img, name }, index) => (
            <div
              className="flex items-center justify-center rounded-lg md:mb-0 mb-4"
              key={index}
            >
              <Image
                src={img}
                className="rounded-lg"
                width={120}
                height={50}
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
