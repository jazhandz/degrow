import { PageType } from "@/types/CMS/Page";

export const ABOUT_PAGE_DATA : PageType = {
    items: [
        {
            type: "heading",
            data: {
                title: `About page title`,
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
        }
    ]
}