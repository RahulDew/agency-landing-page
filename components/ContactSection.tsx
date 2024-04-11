import { ConnectWithIdeaData } from "@/data/ConnectIdeaSection";
import React from "react";
import { ContactForm } from "./ContactForm";
import AnimatedBtn from "./widgets/AnimatedBtn";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div id="contact" className="w-full py-16 bg-bgSecondary space-y-5">
      <div className="w-11/12 m-auto p-5  sm:p-10 md:p-16  sm:bg-bgPrimary md:bg-primary text-white md:text-black flex max-lg:flex-col justify-center items-start gap-10 rounded-md">
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
      <Link href={"#"} className="w-11/12 m-auto flex justify-end">
        <AnimatedBtn>GO TO TOP</AnimatedBtn>
      </Link>
    </div>
  );
};

export default ContactSection;

{
  /* <h3 className="text-3xl font-bold">{ConnectWithIdeaData.heading}</h3>
        <p className="w-3/6 text-center">{ConnectWithIdeaData.desc}</p>

        <div className="w-full flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Email"
            className=" w-[300px] bg-white outline-none py-3 px-4 text-sm border border-borderColor bg-transparent rounded-full"
          />
          <button className="bg-black text-white py-3 px-6 rounded-full text-sm font-semibold">
            SEND
          </button>
        </div> */
}
