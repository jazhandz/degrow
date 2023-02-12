import { PageType } from "@/types/CMS/Page";

export const ABOUT_PAGE_DATA : PageType = {
    items: [
        {
            type: "section",
            data: {
                id: "team",
                color: "softPink",
                items: [
                    {
                        type: "heading",
                        data: {
                            title: "We’re a small team and we’re obsessed with brewing craft kombucha with impact.",
                            varient: "h1"
                        }
                    },
                    {
                        type: "rich-text",
                        data: {
                            body: "Jaz Hereford,<br/>Gabriël Bijleveld,<br/>Tom Sifrin &<br/>Lily Mengyao."
                        }
                    },
                    {
                        type: "center-image",
                        data: {
                            src: "/images/team_photo",
                            alt:"team photo",
                            objectFit: "cover",
                            size: "small",
                            supportedTypes: ["webp", "jpg"],
                            width: 639, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                            height: 427,
                        }
                    }

                ]
            }
        },
        {
            type: "section",
            data: {
                id: "our-story",
                items: [
                    {
                        type: "chapter-heading",
                        data: {
                            title: "OUR STORY",
                            varient: "h2",
                            color: "softPink",
                        }
                    },
                    {
                        type: "rich-text",
                        data: {
                            body: "We are four friends making kombucha to the best of our ability. Jaz is the founder and head brewer, Lilly leads our finances and makes sure the bills are paid, Gabriël is our technical lead and assists with brewing, and Tom leads our sales and marketing."
                        }
                    },
                    {
                        type:"link",
                        data: {
                            text: "Read our full story here",
                            href: "/story"
                        }
                    },

                ]
            }
        },
        {
            type: "section",
            data: {
                id: "merchandise",
                items: [
                    {
                        type: "chapter-heading",
                        data: {
                            title: "MERCHANDISE",
                            varient: "h2",
                            color: "softOrange",
                        }
                    },
                    {
                        type: "rich-text",
                        data: {
                            body: "We’re proud of our brand and our ideals so we want as many people to get to know us and our mission. Therefor we occasionally create cool merchandise that you can pick up at our HQ, if you’re in time that is."
                        }
                    },

                ]
            }
        },
        {
            type: "section",
            data: {
                id: "newsletter",
                color: "softGreen",
                items: [
                    {
                        type: "chapter-heading",
                        data: {
                            title: "NEWSLETTER"
                        }
                    }
                ]
            }
        }
    ]
}