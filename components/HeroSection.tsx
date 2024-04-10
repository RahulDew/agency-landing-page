import React from "react";
import Navbar from "./Navbar";
import HeroSectionData from "@/data/HeroSection";
import EmailInput from "./EmailInput";

const HeroSection = () => {
  return (
    <section id="#" className="min-h-screen w-full">
      <Navbar />
      <div
        style={{
          background: `url("${HeroSectionData.gridBackgroundUrl}")`,
        }}
        className="w-full h-screen flex justify-center flex-col items-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bgSecondary  [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          <div className="animate-blobanimate absolute h-[270px] w-[270px] md:h-[330px] md:w-[330px] lg:h-[450px] lg:w-[450px] left-[-40px] bottom-[-130px] bg-firstBlob opacity-80 blur-2xl"></div>
          <div className="animate-blobanimate absolute h-[270px] w-[270px] md:h-[330px] md:w-[330px] lg:h-[450px] lg:w-[450px] top-[-100px] right-[-140px] -rotate-180 bg-secondBlob opacity-80 blur-2xl"></div>
        </div>
        <div className="w-[230px] sm:w-[250px] lg:w-[400px]  text-white blur-none absolute text-left flex justify-center items-start flex-col space-y-5">
          <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl sm:font-bold flex flex-col">
            {HeroSectionData.headingTop}
            <span className="bg-gradient-to-tr from-[#9F8CED] from-[5%] via-[#FA7C0B] via-[percentage:30%]  to-[#9DE8EE] to-80% text-transparent bg-clip-text">
              {HeroSectionData.headingMain}
            </span>
            {HeroSectionData.headingCenter}
            <br />
            {HeroSectionData.headingBottom}
          </h1>
          <p className="text-sm font-extralight opacity-60">
            {HeroSectionData.desc}
          </p>
          <EmailInput />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
