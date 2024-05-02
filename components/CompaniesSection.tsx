import TrustedCompanies from "@/data/CompaniesSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Slider from "./widgets/Slider";

const CompaniesSection = () => {
  return (
    <section
      id="company"
      className="w-full md:w-11/12 space-y-10 my-16 px-10 mx-5 md:mx-10 "
    >
      <div
        className="md:w-10/12 m-auto max-md:text-center
 flex max-md:flex-col justify-between
       items-center gap-5 md:gap-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold w-5/6">
          {TrustedCompanies.heading}
        </h2>
        <p className="text-base font-extralight opacity-60">
          {TrustedCompanies.desc}
        </p>
      </div>

      <div>
        <Slider direction={"left"} speed={"fast"} pauseOnHover={false}>
          {TrustedCompanies.companieList1.map((companyLogo, index) => (
            <div
              key={index}
              className="inline-block border border-white p-2 w-[130px] rounded-lg"
            >
              <Image src={companyLogo} alt="Shadient.co Logo" priority />
            </div>
          ))}
        </Slider>

        <Slider direction={"right"} speed={"fast"} pauseOnHover={false}>
          {TrustedCompanies.companieList2.map((companyLogo, index) => (
            <div
              key={index}
              className="inline-block border border-white p-2 w-[130px] rounded-lg"
            >
              <Image src={companyLogo} alt="Shadient.co Logo" priority />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesSection;
