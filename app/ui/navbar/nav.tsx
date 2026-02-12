"use client"

import React from "react";
import Logo from "./logo";
import { ListIcon} from "@phosphor-icons/react"

export default function Nav() {
  return (
    <div className="pt-10 ipad:pt-8  w-full h-full max-w-5xl mx-auto h-nav flex items-center px-4  relative justify-between">
      <Logo/>
      <div className="flex items-center gap-3">
      <ListIcon size={24} className="cursor-pointer text-primary "/>
      <button className="py-1.5 ipad:py-2  px-2 ipad:px-3 border-primary border cursor-pointer text-primary bg-accent font-medium  text-xs">
        Meet with Us
      </button>

      </div>
    </div>
  );
}
