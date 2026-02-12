import Image from "next/image";
import React from "react";

export default function WhoFor() {
  return (
    <div className="w-full pt-16 flex items-center flex-col font-switzer ipad:section-wrapper">
      <h3 className="font-bold ipad:font-extrabold text-2xl ipad:text-4xl px-24 text-center">
        Built for High Net Worth Clients
      </h3>
      <p className="text-balance text-center pt-6 text-[20px] font-medium text-desc px-10">
        Why Crypto Assets Wealth Management is the trusted partner of choice for
        private clients and institutions to engage in digital assets.
      </p>
      <div className="my-10 flex items-center flex-wrap justify-center gap-6 ipad:gap-10">
        <div className="w-65 h-67.5 bg-accent rounded-3xl border-2 ipad:border-3 border-primary flex flex-col items-center-safe justify-center ">
          <Image src="/icons/safe.svg" width={60} height={60} alt="safe" />
          <div className="my-4 flex items-center flex-col">
            <h2 className="font-semibold text-lg">Safe & Regulated</h2>
            <p className="text-center px-4">
              Actively securing over $100 billion in user assets
            </p>
          </div>
        </div>
        <div className="w-65 h-67.5 bg-accent rounded-3xl border-2 ipad:border-3 border-primary flex flex-col items-center-safe justify-center ">
          <Image src="/icons/scale.svg" width={60} height={60} alt="safe" />
          <div className="my-4 flex items-center flex-col">
            <h2 className="font-semibold text-lg">Compliant & Tailored </h2>
            <p className="text-center px-4">
              Bespoke services to suit our clients’ needs
            </p>
          </div>
        </div>
        <div className="w-65 h-67.5 bg-accent rounded-3xl border-2 ipad:border-3 border-primary flex flex-col items-center-safe justify-center ">
          <Image src="/icons/bitcoin.svg" width={60} height={60} alt="safe" />
          <div className="my-4 flex items-center flex-col">
            <h2 className="font-semibold text-lg">Deep Liquidity</h2>
            <p className="text-center px-4">
              $100 trillion cumulative trading volume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
