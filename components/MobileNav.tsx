"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavbarData from "@/data/NavbarData";
import { reveal } from "@/lib/utils";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`fixed h-screen inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-bgSecondary"
        variants={sidebar}
      />
      {isOpen && (
        <motion.ul
          variants={reveal}
          initial={"hiddenVarient"}
          animate={"revealedVarient"}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute w-full h-full grid place-items-center gap-10 px-10 py-16 overflow-y-auto"
        >
          <Link href={"#"} className="flex justify-center items-center gap-3 ">
            <Image
              src={NavbarData.logo}
              alt="Shadient.co"
              priority
              className="max-md:w-7"
            />
            <span
              className={`${archivo_black.className} text-2xl font-extrabold`}
            >
              {NavbarData.logoText}
            </span>
          </Link>
          <div className="space-y-12">
            {NavbarData.links.map((link, index) => (
              <motion.li
                key={index}
                variants={reveal}
                initial={"hiddenVarient"}
                animate={"revealedVarient"}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                onClick={handleMenuOpen}
                className="font-semibold text-2xl"
              >
                <Link href={`/#${link.data.toLowerCase()}`}>{link.data}</Link>
              </motion.li>
            ))}
          </div>
          <Link href={"/#contact"}>
            <motion.button
              variants={reveal}
              initial={"hiddenVarient"}
              animate={"revealedVarient"}
              transition={{ delay: 0.8, duration: 0.5 }}
              onClick={handleMenuOpen}
              className="relative w-32 shadow-xl  inline-flex h-10 overflow-hidden rounded-full p-[1px] px-[1.5px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA800_0%,#FFFFFF_50%,#FFA800_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bgSecondary px-4 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
                CONTACT
              </span>
            </motion.button>
          </Link>
        </motion.ul>
      )}
      {/* <MenuToggle /> */}
      {/* Mobile Menu toggle */}
      <button
        onClick={handleMenuOpen}
        className="pointer-events-auto absolute right-4 top-[18px] z-30"
      >
        <Image
          src={NavbarData.sidebarIcon}
          alt="Shadient.co"
          priority
          className="w-7"
        />
      </button>
    </motion.nav>
  );
};

export default MobileNav;

const MenuToggle = () => (
  <button
    // onClick={handleMenuOpen}
    className="pointer-events-auto absolute right-4 top-[18px] z-30"
  >
    <Image
      src={NavbarData.sidebarIcon}
      alt="Shadient.co"
      priority
      className="w-7"
    />
  </button>
);
