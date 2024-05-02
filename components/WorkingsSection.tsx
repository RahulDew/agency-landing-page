import { OurWorksSectionData } from "@/data/OurWorksSectionData";
import React from "react";
import rightArrow from "@/public/assets/rightArrow.svg";
import Image from "next/image";
import AnimatedBtn from "./widgets/AnimatedBtn";
import Link from "next/link";

const WorkingsSection = () => {
  return (
    <section
      id="resources"
      className="py-20 px-5 sm:px-10 md:px-20 flex flex-col lg:flex-row justify-start items-start gap-16"
    >
      <div className="w-full lg:w-6/12 xl:w-full space-y-5 max-lg:text-center">
        <h3 className="text-3xl md:text-4xl font-semibold">
          {OurWorksSectionData.title}
        </h3>
        <p className="opacity-60 font-extralight">{OurWorksSectionData.desc}</p>
        <br />
        <Link href={"/projects"}>
          <AnimatedBtn>SHOW MORE</AnimatedBtn>
        </Link>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 m-auto">
        {OurWorksSectionData.OurWorks.map((ourWork, index) => (
          <div key={index} className="flex flex-col gap-5">
            {ourWork.list.map(({ boxHeight, tag, title }, idx) => (
              <div
                key={idx}
                style={{ height: `${boxHeight}px` }}
                className={`rounded-md break-inside-avoid border border-borderColor bg-bgSecondary p-5 flex flex-col justify-center items-start gap-3`}
              >
                {boxHeight === 270 && (
                  <div className="w-full mb-2 bg-violet-400 flex-1 rounded-md"></div>
                )}
                <button className="text-xs font-semibold bg-primary text-black p-1 rounded-sm">
                  {tag}
                </button>
                <h3 className="text-left text-xl font-semibold">{title}</h3>
                <span className="text-left text-sm opacity-60 flex gap-2">
                  Read More
                  <Image
                    src={rightArrow}
                    alt="Shadient.co Logo"
                    priority
                    className=" w-5 h-5"
                    // width={"auto"}
                  />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingsSection;
