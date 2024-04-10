import TrustedCompanies from "@/data/CompaniesSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CompaniesSection = () => {
  return (
    <section id="company" className="my-16 space-y-16 mx-5 md:mx-10">
      <div
        className="md:w-10/12 m-auto max-md:text-center
 flex max-md:flex-col justify-between
       items-center gap-5 md:gap-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold w-5/6">{TrustedCompanies.heading}</h2>
        <p className="text-base font-extralight opacity-60">
          {TrustedCompanies.desc}
        </p>
      </div>
      <div
        className={cn(
          "space-y-10 scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        )}
      >
        <marquee scrollamount="12">
          {TrustedCompanies.companieList1.map((companyLogo, index) => (
            <div
              key={index}
              className="inline-block border border-white p-2 w-[130px] rounded-lg mx-3"
            >
              <Image src={companyLogo} alt="Shadient.co Logo" priority />
            </div>
          ))}
        </marquee>

        <marquee scrollamount="12" direction="right">
          {TrustedCompanies.companieList2.map((companyLogo, index) => (
            <div
              key={index}
              className="inline-block border border-white p-2 w-[130px] rounded-lg mx-3"
            >
              <Image src={companyLogo} alt="Shadient.co Logo" priority />
            </div>
          ))}
        </marquee>
      </div>
    </section>
  );
};

export default CompaniesSection;
