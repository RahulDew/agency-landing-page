import logo from "@/public/logo.svg";

export const FooterData = {
  createdBy: "Shadient.co",
  footerLogoData: {
    logo: logo,
    logoText: "Shadient.co",
    textData: "Get latest updates",
  },
  footerList: [
    {
      name: "Company",
      values: [{ data: "About us" }, { data: "Team" }, { data: "Careers" }],
    },
    {
      name: "Services",
      values: [
        { data: "Branding" },
        { data: "Web development" },
        { data: "Digital marketing" },
        { data: "Mobile app" },
        { data: "SEO" },
        { data: "User testing" },
      ],
    },
    {
      name: "Resources",
      values: [
        { data: "Blog" },
        { data: "Case study" },
        { data: "Testimonials" },
      ],
    },
    {
      name: "FollowUs",
      values: [{ data: "Instagram" }, { data: "Figma" }],
    },
  ],
};

export const lastFooterText = "Created by Shadient.co";
