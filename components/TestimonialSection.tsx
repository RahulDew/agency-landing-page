import React from "react";
import { TestimonialSectionData } from "@/data/TestimonialsSectionData";
import Slider from "./widgets/Slider";
import Image from "next/image";

const TestimonialSection = () => {
  const { heading, testimonialList } = TestimonialSectionData;
  return (
    <section
      id="testimonials"
      className="w-full md:w-11/12 space-y-5 my-16 px-10"
    >
      <div className="space-y-5 text-center">
        <h3 className="text-center text-3xl md:text-4xl font-semibold">
          {heading.title}
        </h3>
        <p className="md:w-4/6 m-auto font-extralight opacity-60">
          {heading.desc}
        </p>
      </div>
      <Slider>
        {testimonialList.map((Testimonial, idx) => (
          <li
            className="w-[250px] md:w-[350px] max-w-full relative rounded-md bg-bgSecondary border border-borderColor hover:border-primary flex flex-col justify-start items-start gap-4 flex-shrink-0 px-8 py-6 duration-300"
            key={idx}
          >
            <div className="flex justify-start items-start gap-2">
              <Image
                priority
                src={Testimonial.ProfileImg}
                alt={Testimonial.name}
              />
              <div>
                <span className="text-sm font-bold">{Testimonial.name}</span>
                <p className="text-sm text-left opacity-60">
                  {Testimonial.from}
                </p>
              </div>
            </div>
            <p className="text-left text-base font-light">
              {Testimonial.testimonial}
            </p>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
