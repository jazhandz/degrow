import { PageType } from "@/types/CMS/Page";

export const FIND_US_PAGE_DATA: PageType = {
  slug: "",
  seo: {
    title: "title",
    description: "description",
  },
  blocks: [
    {
      component: "section",
      id: "team",
      items: [
        {
          component: "heading",
          title: "You can try our craft kombucha at the following places",
          varient: "h1",
        },
        {
          component: "chapter-heading",
          title: "UTRECHT, NL",
          varient: "h2",
          color: "softBlue",
        },
        {
          component: "locations",
          locations: [
            {
              address: "The Village Coffee & Music<br/>Voorstraat 44-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 45-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 46-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 47-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 48-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 49-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
          ],
        },
        {
          component: "chapter-heading",
          title: "AMSTERDAM, NL",
          varient: "h2",
          color: "softGreen",
        },
        {
          component: "locations",
          locations: [
            {
              address: "The Village Coffee & Music<br/>Voorstraat 44-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 45-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 46-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 47-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 48-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
            {
              address: "The Village Coffee & Music<br/>Voorstraat 49-46,<br/>3512 AP Utrecht",
              link: "https://maps.google.com",
            },
          ],
        },
      ],
    },
  ],
};
