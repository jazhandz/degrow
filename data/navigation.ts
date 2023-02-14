import { NavigationType } from "@/types/CMS/Navigation";

export const NAVIGATION_DATA: NavigationType = {
  title: "DEGR0W  LAB",
  homePath: "/",
  colors: [
    { path: "/about-us", color: "softPink" },
    { path: "/our-story", color: "softGreen" },
    { path: "/flavours/original", color: "softBlue" },
  ],
  options: [
    {
      label: "Flavours",
      path: "/flavours/original",
      items: [
        {
          label: "Original",
          path: "/flavours/original",
        },
        {
          label: "Harvest Spice",
          path: "/flavours/harvest-spice",
        },
        {
          label: "Tepache Sunrise",
          path: "/flavours/tepache-sunrise",
        },
        {
          label: "Nabij",
          path: "/flavours/nabij",
        },
        {
          label: "Collaborations",
          path: "/flavours/collaborations",
        },
      ],
    },
    {
      label: "About us",
      path: "/about-us",
      items: [
        {
          label: "The team",
          path: "/about-us#team",
        },
        {
          label: "Our story",
          path: "/our-story",
        },
        {
          label: "Collaborations",
          path: "/about-us#collaborations",
        },
      ],
    },
    {
      label: "Find us",
      path: "/find-us",
      items: [
        {
          label: "Where we get served",
          path: "/find-us#where-we-get-served",
        },
        {
          label: "Instagram",
          path: "https://www.instagram.com/degrowlab/",
          target: "blank",
        },
        {
          label: "LinkedIn",
          path: "https://www.linkedin.com/company/de-grow-lab",
          target: "blank",
        },
      ],
    },
    {
      label: "Wholesale",
      path: "/wholesale",
      items: [
        {
          label: "Login",
          path: "https://wholesale.degrowlab.org",
        },
      ],
    },
  ],
};
