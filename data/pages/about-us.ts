import { PageType } from "@/types/CMS/Page";

export const ABOUT_PAGE_DATA: PageType = {
  slug: "about-us",
  seo: {
    title: "title",
    description: "description",
  },
  blocks: [
    {
      component: "section",
      id: "team",
      color: [{ color: "softPink" }],
      items: [
        {
          component: "heading",
          data: {
            title: "We’re a small team and we’re obsessed with brewing craft kombucha with impact.",
            varient: "h1",
          },
        },
        {
          component: "rich-text",
          data: {
            body: "Jaz Hereford,<br/>Gabriël Bijleveld,<br/>Tom Sifrin &<br/>Lily Mengyao.",
          },
        },
        {
          component: "center-image",
          data: {
            src: "/images/team_photo",
            alt: "team photo",
            objectFit: "cover",
            size: "small",
            supportedTypes: ["webp", "jpg"],
            width: 639, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
            height: 427,
          },
        },
      ],
    },
    {
      component: "section",
      id: "our-story",
      items: [
        {
          component: "chapter-heading",
          data: {
            title: "OUR STORY",
            varient: "h2",
            color: "softPink",
          },
        },
        {
          component: "rich-text",
          data: {
            body: "We are four friends making kombucha to the best of our ability. Jaz is the founder and head brewer, Lilly leads our finances and makes sure the bills are paid, Gabriël is our technical lead and assists with brewing, and Tom leads our sales and marketing.",
          },
        },
        {
          component: "link",
          data: {
            text: "Read our full story here",
            href: "/our-story",
          },
        },
      ],
    },
    {
      component: "section",
      id: "merchandise",
      items: [
        {
          component: "chapter-heading",
          data: {
            title: "MERCHANDISE",
            varient: "h2",
            color: "softOrange",
          },
        },
        {
          component: "rich-text",
          data: {
            body: "We’re proud of our brand and our ideals so we want as many people to get to know us and our mission. Therefor we occasionally create cool merchandise that you can pick up at our HQ, if you’re in time that is.",
          },
        },
        {
          component: "products",
          products: [
            {
              picture: {
                src: "/images/product_tote_bag",
                alt: "Degrow Lab Kombucha Tote bag",
                objectFit: "cover",
                size: "small",
                supportedTypes: ["webp", "jpg"],
                width: 2130, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                height: 1420,
              },
              title: "Degrow Lab Kombucha Tote bag",
              details: "100% Organic cotton<br/>Glow in the dark details",
              whereToBuy: "Degrow Lab HQ",
              price: 25,
            },
            {
              picture: {
                src: "/images/product_tshirt",
                alt: "Degrow Lab Zero T-Shirt",
                objectFit: "cover",
                size: "small",
                supportedTypes: ["webp", "jpg"],
                width: 2130, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                height: 1420,
              },
              title: "Degrow Lab Zero T-Shirt",
              details: "100% Organic cotton<br/>Size: S,M,L,XL",
              whereToBuy: "Degrow Lab HQ",
              price: 25,
            },
            {
              picture: {
                src: "/images/product_stickers",
                alt: "Degrow Lab Stickers",
                objectFit: "cover",
                size: "small",
                supportedTypes: ["webp", "jpg"],
                width: 2130, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                height: 1420,
              },
              title: "Degrow Lab Stickers",
              details: "100% Recycled Plastic",
              whereToBuy: "Degrow Lab HQ",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      component: "section",
      id: "newsletter",
      color: [{ color: "softGreen" }],
      items: [
        {
          component: "chapter-heading",
          data: {
            title: "NEWSLETTER",
          },
        },
      ],
    },
  ],
};
