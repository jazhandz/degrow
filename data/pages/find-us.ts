import { PageType } from "@/types/CMS/Page";

export const FIND_US_PAGE_DATA : PageType = {
    items: [
        {
            type: "section",
            data: {
                id: "team",
                items: [
                    {
                        type: "heading",
                        data: {
                            title: "You can try our craft kombucha at the following places",
                            varient: "h1"
                        }
                    },
                    {
                        type: "chapter-heading",
                        data: {
                            title: "UTRECHT, NL",
                            varient: "h2",
                            color: "softBlue",
                        }
                    },
                    {
                        type: "chapter-heading",
                        data: {
                            title: "AMSTERDAM, NL",
                            varient: "h2",
                            color: "softGreen",
                        }
                    },

                ]
            }
        }
    ]
}