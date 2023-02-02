import { PageType } from "@/types/CMS/Page";

export const ABOUT_PAGE_DATA : PageType = {
    items: [
        {
            type: "heading",
            data: {
                title: `We're a small team and we're obsessed with brewing craft kombucha.`,
                varient: "h1"
            }
        },
        {
            type: "large-image",
            data: {
                alt:"large illustration",
                src: "/images/large_illustration",
                supportedTypes: ["webp", "png"]
            }
        },
        {
            type: "chapter-heading",
            data: {
                title: `Chapter heading!`,
                varient: "h1"
            }
        }
    ]
}