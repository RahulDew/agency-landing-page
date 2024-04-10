"use client";

import { cn } from "@/lib/utils";
// import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const TestimonialSlider = ({
  testimonials,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
}: {
  testimonials: {
    ProfileImg: any;
    // for SVG type: React.FC<React.SVGProps<SVGSVGElement>>
    name: string;
    from: string;
    testimonial: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((Testimonial, idx) => (
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
      </ul>
    </div>
  );
};

export default TestimonialSlider;
