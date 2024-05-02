import availablePrimary from "@/public/assets/availablePrimary.svg";
import availableSecondary from "@/public/assets/availableSecondary.svg";

export const PricingSectionData = {
  heading: {
    title: "Designed for business teams like yours",
    desc: "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  pricingList: [
    {
      title: "Free",
      desc: "Best option for personal use & for your next project.",
      price: "0",
      detailsList: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 1 months",
        "Free updates: 1 months",
      ],
    },
    {
      title: "Company",
      desc: "Relevant for multiple users, extended & premium support.",
      price: "99",
      detailsList: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developer",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      title: "Enterprise",
      desc: "Best for large scale uses and extended redistribution rights.",
      price: "499",
      detailsList: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ],
};

export const availableSVG = {
  availablePrimary,
  availableSecondary,
};
