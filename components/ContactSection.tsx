import { ConnectWithIdeaData } from "@/data/ConnectIdeaSection";
import React from "react";
import { ContactForm } from "./ContactForm";
import AnimatedBtn from "./widgets/AnimatedBtn";
import Link from "next/link";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full h-full py-16 bg-bgSecondary space-y-5 p-5"
    >
      <div className="w-11/12 h-full relative m-auto">
        <div className="sm:p-10 md:p-16  sm:bg-bgPrimary text-white md:text-white flex max-lg:flex-col justify-center items-start gap-10 rounded-lg">
          <div className="lg:w-10/12 space-y-5 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold">
              {ConnectWithIdeaData.heading}
            </h3>
            <p className="text-lg">{ConnectWithIdeaData.desc}</p>
            <p className="font-semibold text-xl max-lg:hidden">
              Connect with us :)
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <Link href={"/"} className="w-11/12 m-auto flex justify-end">
        <AnimatedBtn>GO TO TOP</AnimatedBtn>
      </Link>
    </section>
  );
};

export default ContactSection;
