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
        }
    ]
}