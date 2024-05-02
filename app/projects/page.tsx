import Image from "next/image";
import { OurWorksSectionData } from "@/data/OurWorksSectionData";
import LinkSVG from "@/public/assets/LinkSVG.svg";
import Link from "next/link";

export default function Page() {
  return (
    <section
      id="projects"
      className="py-32 px-5 sm:px-10 m-auto text-center space-y-10"
    >
      <div className="w-full lg:w-6/12 m-auto text-center space-y-5">
        <h3 className="text-3xl md:text-4xl font-semibold">
          {OurWorksSectionData.title}
        </h3>
        <p className="opacity-60 font-extralight">{OurWorksSectionData.desc}</p>
      </div>
      {OurWorksSectionData.OurWorks.map((projects, index) => (
        <div key={index} className="w-full flex flex-col justify-center items-center gap-5 m-auto">
          {projects.list.map((project, index) => (
            <div
              key={index}
              className="lg:w-10/12 h-full bg-bgSecondary flex max-md:flex-col justify-start items-start gap-10 p-5 md:pr-10 rounded-lg"
            >
              <div className="group min-w-full md:min-w-[300px] lg:w-[500px] h-[350px] cursor-pointer bg-gradient-to-tl from-neutral-900 to-primary rounded-md relative overflow-hidden">
                <Image
                  src={project.imgURL}
                  // width={600}
                  // height={200}
                  alt={project.title}
                  className="w-full h-full object-cover flex justify-center items-center rounded-lg group-hover:scale-125 ease-in-out duration-300 "
                />
              </div>
              <div className="lg:w-4/6 h-full text-left space-y-5 md:py-10 flex flex-col justify-around bottom-0 gap-5 md:gap-10">
                <div className="space-y-5">
                  <Link
                    href={"/"}
                    className="flex  justify-between gap-3 hover:text-primary duration-300"
                  >
                    <h3 className="text-3xl font-semibold break-all">
                      {project.title}
                    </h3>
                    <Image
                      src={LinkSVG}
                      width={26}
                      height={26}
                      alt={"VISIT"}
                    />
                  </Link>

                  <p className="opacity-60 break-all">{project.desc}</p>
                </div>
                <div className="flex flex-wrap justify-start items-center gap-5 ">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-black font-semibold py-1 px-4 rounded-full"
                    >
                      {tech.data}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
