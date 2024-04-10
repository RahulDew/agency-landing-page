import React from "react";
// import ReviewSlider from "./TestimonialSlider";
import { TestimonialSectionData } from "@/data/TestimonialsSectionData";
import TestimonialSlider from "./TestimonialSlider";

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
      <TestimonialSlider testimonials={testimonialList} />
    </section>
  );
};

export default TestimonialSection;
