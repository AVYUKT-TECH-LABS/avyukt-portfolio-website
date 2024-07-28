import { STATS } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <section className="custom-container md:py-36 py-16 md:px-0 px-8 flex flex-col md:space-y-48 space-y-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="md:text-6xl text-3xl !leading-none">
          Stats we work with
        </h2>
        <div className="flex flex-wrap space-x-6 space-y-6 mt-4">
          {STATS.map(({ title, stat }, index) => (
            <div
              className="flex flex-col items-center justify-center rounded-lg md:mb-0 mb-4"
              key={index}
            >
              <h1 className="font-semibold text-6xl">{stat}</h1>
              <h2 className="text-3xl">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
