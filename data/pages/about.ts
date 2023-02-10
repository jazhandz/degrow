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
            type: "section",
            data: {
                items: [
                    { type: "breakpoint", data: {
                        mobile: {
                            type: "large-image",
                            data: {
                                alt:"large illustration",
                                objectFit: "contain",
                                src: "/images/bee_illustration",
                                supportedTypes: ["webp", "png"],
                                marginTop: "-10vw",
                                width: 2006, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                                height: 1380,
                            }
                        },
                        desktop: {
                            type: "large-image",
                            data: {
                                alt:"large illustration",
                                src: "/images/bees_illustration",
                                supportedTypes: ["webp", "png"],
                                width: 748,
                                height: 334,
                                marginTop: "-8vw"
                            }
                        },
                    }},
                ]
            }
        },
    ]
}