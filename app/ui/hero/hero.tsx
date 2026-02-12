import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="section-wrapper pt-4 ipad:pt-10 text-center font-switzer">
      <h1 className="text-[32px] ipad:text-6xl mac-lg:text-7xl font-extrabold  text-[#1D1D1F]">
        Crypto Mastered.
      </h1>
      <p className="pt-2 px-10 ipad:pt-6 text-xl text-balance ipad:text-2xl mac-lg:text-3xl font-medium text-[#515154]">
        Institutional stewardship for your digital estate.
      </p>
      <div className="ipad:w-4xl mac-lg:w-5xl  h-full relative -mt-30 ipad:-mt-34 mac-lg:-mt-32 z-[-1]">
        <Image src="/images/hero.webp" fill className="object-contain ipad:flex hidden" alt="hero"/>
          <Image src="/images/hero mobile.png" fill className="object-contain ipad:hidden" alt="hero"/>
      </div>
    </div>
  );
}
