import React from "react";
import { ConnectUsData } from "@/data/ConnectSection";
import Image from "next/image";
import AnimatedBtn from "./widgets/AnimatedBtn";
import Link from "next/link";

const ConnectSection = () => {
  return (
    <section
      id="connect"
      className="space-y-10 my-16 m-auto flex max-md:flex-col justify-center
       items-center sm:px-10 md:px-20"
    >
      <div className="w-full">
        <Image
          src={ConnectUsData.illustration}
          alt="Shadient.co Logo"
          priority
        />
      </div>
      <div className="space-y-5 w-5/6 lg:pr-20 max-md:text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {ConnectUsData.title}
        </h2>
        <p className="text-base font-extralight opacity-60">
          {ConnectUsData.desc}
        </p>
        <br />
        <Link href={"/"}>
          <AnimatedBtn>LET'S CONNECT</AnimatedBtn>
        </Link>
        {/* <Link>
          <AnimatedBtn>LET'S CONNECT</AnimatedBtn>
        </Link> */}
      </div>
    </section>
  );
};

export default ConnectSection;
