import Marketing from "@/public/assets/images/Marketing.avif";
import SEO from "@/public/assets/images/SEO.avif";
import Website from "@/public/assets/images/Website.avif";
import MobileApp from "@/public/assets/images/MobileApp.avif";

export const OurWorksSectionData = {
  title: "Some pieces of our work",
  desc: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.",
  button: "SHOW MORE",
  OurWorks: [
    {
      list: [
        {
          boxHeight: 270,
          imgURL: MobileApp,
          tag: "Website",
          title: "Creative landing page",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "React Native" },
            { data: "FIrebase" },
            { data: "TypeScript" },
          ],
        },
        {
          boxHeight: 150,
          imgURL: Website,
          tag: "Branding",
          title: "Creative Branding",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "Next JS" },
            { data: "Supabase" },
            { data: "TypeScript" },
          ],
        },
        {
          boxHeight: 150,
          imgURL: SEO,
          tag: "DEVELOPMENT",
          title: "Automation. Advanced Level",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "Next JS" },
            { data: "Node JS" },
            { data: "Tailwind" },
          ],
        },
      ],
    },
    {
      list: [
        {
          boxHeight: 150,
          imgURL: Marketing,
          tag: "Digital marketing",
          title: "Why We Collect User’s Data",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "Next JS" },
            { data: "Supabase" },
            { data: "TypeScript" },
          ],
        },
        {
          boxHeight: 270,
          tag: "User testing",
          imgURL: Website,
          title: "Creative landing page",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "Next JS" },
            { data: "Node JS" },
            { data: "Tailwind" },
          ],
        },
        {
          boxHeight: 150,
          imgURL: SEO,
          tag: "SEO",
          title: "How We Optimized Our SEO",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, qui excepturi suscipit corporis libero quae. Temporibus illum voluptatibus, assumenda odio suscipit expedita praesentium rerum, debitis sunt odit id saepe consequuntur.",
          techUsed: [
            { data: "MERN" },
            { data: "Rapid API" },
            { data: "TypeScript" },
          ],
        },
      ],
    },
  ],
};

// OurWorks: [
//     {
//       // size: [270, 150, 150],
//       list: [
//         {
//           boxHeight: 270,
//           tag: "Website",
//           title: "Creative landing page",
//           more: "",
//         },
//         {
//           boxHeight: 150,
//           tag: "Branding",
//           title: "Creative Branding",
//           more: "",
//         },
//         {
//           boxHeight: 150,
//           tag: "DEVELOPMENT",
//           title: "Automation. Advanced Level",
//           more: "",
//         },
//       ],
//     },
//     {
//       // size: [150, 270, 150],
//       list: [
//         {
//           boxHeight: 150,
//           tag: "Digital marketing",
//           title: "Why We Collect User’s Data",
//           more: "",
//         },
//         {
//           boxHeight: 270,
//           tag: "User testing",
//           title: "Creative landing page",
//           more: "",
//         },
//         {
//           boxHeight: 150,
//           tag: "SEO",
//           title: "How We Optimized Our SEO",
//           more: "",
//         },
//       ],
//     },
//   ],
