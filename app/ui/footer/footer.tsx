import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-24 w-full  items-end flex font-switzer ">
      <div className="w-full h-[60%]  bg-primary flex flex-col gap-10 ipad:flex-row px-12 py-24">
        <div className="max-iphone:-ml-2.5">
          <Image
            src="/icons/footer-logo.svg"
            width={300}
            height={10}
            alt="footer logo"
          />
        </div>
        <div className="w-full mac-lg:w-2/3 grid grid-cols-1 ipad:grid-cols-3 gap-10">
          <div>
            <p className="font-semibold text-white text-lg">COMPANY</p>
            <ul className="mt-2 text-white/70 text-[17px] font-medium flex flex-col gap-2">
              <li className="cursor-pointer hover:underline underline-offset-3">
                About Us
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Community
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Locations
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white text-lg">SERVICES</p>
            <ul className="mt-2 text-white/70 text-[17px] font-medium flex flex-col gap-2" >
              <li className="cursor-pointer hover:underline underline-offset-3">
                Crypto Wealth Management
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Family planning
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Tax management
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Law management
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white text-lg">LEGAL</p>
            <ul className="mt-2 text-white/70 text-[17px] font-medium flex flex-col gap-2">
              <li className="cursor-pointer hover:underline underline-offset-3">
                Terms of Use
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
               Disclosures
              </li>
              <li className="cursor-pointer hover:underline underline-offset-3">
                Cookies Settings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
