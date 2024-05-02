import Marketing from "@/public/assets/images/Marketing.avif";
import SEO from "@/public/assets/images/SEO.avif";
import Website from "@/public/assets/images/Website.avif";
import MobileApp from "@/public/assets/images/MobileApp.avif";

export const projectsPageData = [
  {
    imgURL: MobileApp,
    title: "Mobile Apps",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
    techUsed: [
      { data: "React Native" },
      { data: "FIrebase" },
      { data: "TypeScript" },
    ],
  },
  {
    imgURL: Website,
    title: "Advance Websites",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
    techUsed: [
      { data: "Next JS" },
      { data: "Supabase" },
      { data: "TypeScript" },
    ],
  },
  {
    imgURL: SEO,
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
    techUsed: [{ data: "Next JS" }, { data: "Node JS" }, { data: "Tailwind" }],
  },
  {
    imgURL: Marketing,
    title: "Marketing & Reasearch",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
    techUsed: [{ data: "MERN" }, { data: "Rapid API" }, { data: "TypeScript" }],
  },
];
