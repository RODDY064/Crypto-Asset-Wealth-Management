import Image from "next/image";
import React from "react";

export default function Deserved() {
  return (
    <div className=" flex w-full items-center flex-col justify-c ipad:flex-row font-switzer mt-10">
      <div className="ipad:w-1/2 flex items-center justify-center flex-col">
        <h1 className="font-bold ipad:font-extrabold text-2xl ipad:text-4xl text-center ">
          You deserved the best.
        </h1>
        <p className="my-4 text-[20px] font-medium text-desc max-ipad:text-balance  max-ipad:text-center px-8">
          Discover how we can help you experience the full potential of digital
          assets
        </p>
        <button className="py-1.5 ipad:py-2  my-6 px-2 ipad:px-3 border-primary border cursor-pointer text-primary bg-accent font-medium  text-md">
          Explore more about our services
        </button>
      </div>
      <div className="flex items-center justify-center ipad:w-1/2">
        <div className=" w-[240px] h-[240px] ipad:w-[500px] ipad:h-[500px] relative">
          <Image
            src="/images/deserved.png"
            fill
            className="object-contain"
            alt="deserved"
          />
        </div>
      </div>
    </div>
  );
}
