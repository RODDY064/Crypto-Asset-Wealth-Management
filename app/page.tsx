import Image from "next/image";
import Hero from "./ui/hero/hero";
import Services from "./ui/services/services";
import WhoFor from "./ui/who-for/who-for";
import Deserved from "./ui/deserved/deserved";
import FAQS from "./ui/faqs/faqs";

export default function Home() {
  return (
    <div className=" w-full h-full max-w-5xl mx-auto min-h-screen-nav pt-nav flex items-center flex-col">
      <Hero />
      <div className="w-full h-10 ipad:flex hidden"></div>
      <Services />
      <div className="w-full h-10 "></div>
      <WhoFor />
      <Deserved/>
      <FAQS/>
    </div>
  );
}
