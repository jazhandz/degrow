import { PageType } from "@/types/CMS/Page";

export const HOME_PAGE_DATA : PageType = {
    items: [
        {
            type: "heading",
            data: {
                title: `Degrow lab is an Utrecht- based kombucha
                Microbrewery. We are obsessed with brewing
                craft kombucha, while also determined to
                run our company according to principles
                of sustainability.`,
                varient: "h1"
            }
        },
        {
            type: "large-image",
            data: {
                alt:"large illustration",
                src: "/images/large_illustration",
                supportedTypes: ["webp", "png"],
                marginBottom: "-20px"
            }
        },
        {
            type: "chapter-heading",
            data: {
                title: `What is kombucha?`,
                varient: "h2"
            }
        },
        {
            type: "heading",
            data: {
                title: `KOMBUCHA IS COMUNITY`,
                varient: "h3"
            }
        },
        {
            type: "heading",
            data: {
                title: `KOMBUCHA FOR A MORE VIBRANT COMMUNITY`,
                varient: "h3"
            }
        },
        {
            type: "chapter-heading",
            data: {
                title: `WE ARE A LOCAL BREWERY`,
                varient: "h2"
            }
        },
        {
            type: "chapter-heading",
            data: {
                title: `OUR CORE VALUES`,
                varient: "h2"
            }
        },
        {
            type: "heading",
            data: {
                title: `DISCOVER OUR FLAVOURS`,
                varient: "h3"
            }
        },
    ]
}