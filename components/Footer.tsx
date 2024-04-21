import React from "react";
import { FooterData } from "@/data/FooterSection";
import Image from "next/image";
import EmailInput from "./EmailInput";

const Footer = () => {
  const { footerList, footerLogoData, createdBy } = FooterData;
  return (
    <footer className="w-full py-5">
      <div className="flex justify-start sm:justify-around max-lg:flex-col my-5 px-10 md:px-16 lg:mr-28">
        <div className="flex justify-around col-row-span-2 max-lg:flex-wrap gap-10 lg:gap-10 xl:gap-24">
          {footerList.map((list, index) => (
            <div key={index} className="flex flex-col w-32 sm:text-left">
              <h4 className="font-semibold text-base">{list.name}</h4>
              <ul className="space-y-4 my-5">
                {list.values.map((value, i) => (
                  <li
                    key={i}
                    className="text-sm opacity-60 hover:text-primary cursor-pointer duration-300"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-[300px] lg:w-[260px] max-lg:my-10 max-lg:mx-auto space-y-5 flex justify-center items-center lg:justify-start lg:items-start flex-col">
          <div className="flex justify-center items-center gap-3">
            <Image src={footerLogoData.logo} alt="Shadient.co" priority />
            <span className="text-2xl font-extrabold">
              {footerLogoData.logoText}
            </span>
          </div>
          <p className="text-base font-extralight">{footerLogoData.textData}</p>
          <EmailInput isButton={false} />
        </div>
      </div>

      <div className="text-center text-sm opacity-60 my-5">
        Created by {createdBy}
      </div>
    </footer>
  );
};

export default Footer;
