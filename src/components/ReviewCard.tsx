import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="flex items-center gap-3">
      {/* Company logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src="https://framerusercontent.com/images/zLpaFpmKYr94e7HMJmBreCRH64.png"
          alt="TechWave Inc. logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Review text */}
      <div className="flex flex-col">
        <p className="text-black/70 text-lg font-medium">
          &quot;Game-changer for our brand&quot;
        </p>
        <p className="text-black font-medium">TechWave Inc.</p>
      </div>
    </div>
  );
}
