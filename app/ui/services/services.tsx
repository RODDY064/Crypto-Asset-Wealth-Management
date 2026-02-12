import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="w-full font-switzer ipad:section-wrapper  px-6 flex flex-col items-center  ipad:items-start">
      <div className="w-full">
        <h3 className="font-bold ipad:font-extrabold text-2xl ipad:text-4xl">
          Our Services
        </h3>
        <p className="pt-2 text-desc text-[18px] ipad:text-lg ">
          Let’s us help you navigate the complexities of legacy building,
          <br className="hidden ipad:flex" />
          crypto wealth management and assets management.{" "}
        </p>
        <button className="py-1.5 ipad:py-2  my-6 px-2 ipad:px-3 border-primary border cursor-pointer text-primary bg-accent font-medium  text-md">
          Explore more about our services
        </button>
      </div>

      <div className="w-full px-4 my-6 grid  grid-cols-1 ipad:grid-cols-3 gap-6">
        <div className="w-full h-100 ipad:h-110 border border-black/30 relative overflow-hidden ">
          <Image
            src="/images/law.jpg"
            fill
            className="object-cover"
            alt="law managament"
          />
          <div className="w-full h-full flex items-end relative z-10 text-white">
            <div className="w-full h-26 bg-primary px-8 py-6">
              <h3 className="font-semibold text-lg">Law Managament</h3>
              <p className="text-sm underline underline-offset-4 cursor-pointer hover:no-underline w-fit">
                Learn more
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-100 ipad:h-110 border border-black/30 relative overflow-hidden ">
          <Image
            src="/images/family.jpg"
            fill
            className="object-cover"
            alt="law managament"
          />
          <div className="w-full h-full flex items-end relative z-10 text-white">
            <div className="w-full h-26 bg-primary px-8 py-6">
              <h3 className="font-semibold text-lg">Family Planning</h3>
              <p className="text-sm underline underline-offset-4 cursor-pointer hover:no-underline w-fit">
                Learn more
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-100 ipad:h-110 border border-black/30 relative overflow-hidden ">
          <Image
            src="/images/tax.jpg"
            fill
            className="object-cover"
            alt="law managament"
          />
          <div className="w-full h-full flex items-end relative z-10 text-white">
            <div className="w-full h-26 bg-primary px-8 py-6">
              <h3 className="font-semibold text-lg">Tax Managament</h3>
              <p className="text-sm underline underline-offset-4 cursor-pointer hover:no-underline w-fit">
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
