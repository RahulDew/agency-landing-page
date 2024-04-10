import { PricingSectionData, availableSVG } from "@/data/PricingSectionData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PricingSection = () => {
  const { pricingList, heading } = PricingSectionData;

  return (
    <section id="pricing" className="w-full py-16 bg-bgSecondary">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-5 text-3xl md:text-4xl tracking-tight font-bold">
            {heading.title}
          </h2>
          <p className="mb-5 font-light text-base opacity-60">{heading.desc}</p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-3 md:gap-5 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          {pricingList.map((pricingCard, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 mx-auto max-w-xs sm:max-w-sm md:max-w-md text-center rounded-lg bg-gradient-to-tl from-bgSecondary from-70% to-[#8474C470] to-12% border border-borderColor shadow xl:p-8 ${
                index === 1
                  ? "scale-100 border-primary"
                  : "scale-90 border-secondary"
              }`}
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {pricingCard.title}
              </h3>
              <p className="font-extralight opacity-60 ">{pricingCard.desc}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  ${pricingCard.price}
                </span>
                <span className="opacity-60">/month</span>
              </div>

              {/* <!-- List --> */}
              <ul role="list" className="mb-8 space-y-4 m-auto text-center">
                {pricingCard.detailsList.map((detail, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Image
                      src={
                        index === 1
                          ? availableSVG.availablePrimary
                          : availableSVG.availableSecondary
                      }
                      alt="availableSVG"
                      priority
                      className="text-light-200"
                    />
                    <span className="opacity-60">{detail}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`${
                  index === 1
                    ? "text-black bg-primary"
                    : "text-black bg-secondary"
                }  hover:text-black duration-200 font-semibold rounded-lg text-base px-5 py-2.5 text-center`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
