import Image from "next/image";
import React from "react";

export default function Logo({
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={width ?? 240}
        height={height ?? 34}
        src="/icons/logo-text.svg"
        alt="logo"
        className="ipad:flex hidden"
      />
      <Image
        width={width ?? 34}
        height={height ?? 34}
        src="/icons/logo.svg"
        alt="logo"
        className="ipad:hidden"
      />
    </div>
  );
}
