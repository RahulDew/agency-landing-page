import React from "react";
import Image from "next/image";
import NavbarData from "@/data/NavbarData";
import Link from "next/link";
import MobileNav from "./MobileNav";
import AnimatedBtn from "./widgets/AnimatedBtn";

const Navbar = () => {
  return (
    <nav className="w-full h-[9vh] md:h-[11vh] z-50 fixed p-5 px-5 sm:px-10 lg:px-20 bg-bgSecondary bg-opacity-60 flex justify-between items-center backdrop-blur-sm ">
      <Link href={"/"} className="flex justify-center items-center gap-3">
        <Image
          src={NavbarData.logo}
          alt="Shadient.co"
          priority
          className="max-md:w-7"
        />
        <span className="text-xl md:text-2xl font-extrabold">
          {NavbarData.logoText}
        </span>
      </Link>
      <ul className="hidden md:flex justify-center items-center gap-10 font-semibold">
        {NavbarData.links.map((link, index) => (
          <Link
            key={index}
            href={`/#${link.toLowerCase()}`}
            className="text-base font-semibold hover:text-primary duration-300"
          >
            {link}
          </Link>
        ))}
        <Link href={"/#contact"}>
          <AnimatedBtn>CONTACT</AnimatedBtn>
        </Link>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
