"use client";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-screen max-h-[610px] overflow-hidden">
      {/* Oval background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[370px] aspect-square">
        <div className="w-full h-full rounded-full bg-gray-200" />
      </div>

      {/* Arrow */}
      <div className="absolute top-[55%] left-[10%] w-[20%] max-w-[142px]">
        <div className="relative w-full aspect-[142/73]">
          <Image
            src="https://framerusercontent.com/images/COneeuQ8sHL9NUcTIkAK5iKqKaw.png"
            alt="Arrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Arrow 2 */}
      <div className="absolute bottom-[5%] right-[25%] w-[15%] max-w-[95px]">
        <div className="relative w-full aspect-[95/25]">
          <Image
            src="https://framerusercontent.com/images/Eop9bnf6isF9SVnhU4t08fWStg.png"
            alt="Small arrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Cloud */}
      <div className="absolute top-[20%] right-[12%] w-[18%] max-w-[112px]">
        <div className="relative w-full aspect-[112/82]">
          <Image
            src="https://framerusercontent.com/images/mzvSEtCaqFVpPui7ZZoibtNIM.png"
            alt="Cloud"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Stars */}
      <div className="absolute top-[10%] right-[30%] w-[15%] max-w-[112px] aspect-square text-white bg-red-400 rounded-full flex items-center justify-center">
        {/* Stars content would go here */}
      </div>

      {/* Info */}
      <div className="absolute bottom-[15%] left-[10%] sm:left-[20%] w-[40%] max-w-[214px] text-black">
        <div className="absolute bottom-0 left-0 w-full max-w-[180px] h-[80px] rounded-lg bg-white shadow-md"></div>
      </div>

      {/* Laptop */}
      <div className="absolute top-0 left-[15%] w-[35%] max-w-[254px]">
        <div className="relative w-full aspect-[154/210]">
          <Image
            src="https://framerusercontent.com/images/DzCSGqjqeAkMfxKmzzgT9RB54.png"
            alt="Laptop"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Woman */}
      <div className="absolute bottom-[5%] right-[5%] sm:right-[15%] w-[35%] max-w-[246px]">
        <div className="relative w-full aspect-[146/210]">
          <Image
            src="https://framerusercontent.com/images/zRKMG1R90jjgPDYd3cukzOmasII.png"
            alt="Woman"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
