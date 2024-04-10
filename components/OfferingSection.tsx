import React from "react";
import { OfferingSectionData } from "@/data/OfferingSection";
import Image from "next/image";

const OfferingSection = () => {
  return (
    <section id="services" className="w-full text-center space-y-10 py-16 px-5 md:px-16 bg-bgSecondary">
      <h2 className="text-3xl md:text-4xl font-bold">
        {OfferingSectionData.OfferingHeading.title}
      </h2>
      <p className="text-base font-extralight m-auto md:w-8/12 opacity-60">
        {OfferingSectionData.OfferingHeading.desc}
      </p>
      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {OfferingSectionData.offeringList.map((offering, index) => (
          <div
            key={index}
            className="w-[300px] md:w-[350px] h-[220px] md:h-[210px] p-5 border border-borderColor flex flex-col justify-start items-start gap-4 hover:animate-shimmer rounded-md hover:bg-[linear-gradient(90deg,#000103,45%,#3f375e,55%,#000103)] bg-[length:200%_100%] px-6 transition-colors duration-300 ease-in-out"
          >
            <Image priority src={offering.icon} alt="Follow us on Twitter" />
            <h2 className="text-xl md:text-2xl font-bold">{offering.title}</h2>
            <p className="text-left text-sm font-extralight opacity-60">
              {offering.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingSection;
