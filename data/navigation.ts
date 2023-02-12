import { NavigationType } from "@/types/CMS/Navigation";

export const NAVIGATION_DATA : NavigationType= {
    "title": "DEGR0W  LAB",
    homePath: "/",
    options: [
        {label: "Flavours", path: "/flavours", items: [
            {
                label: "Original",
                path: "/flavours#original"
            },
            {
                label: "Harvest Spice",
                path: "/flavours#harvest-spice"
            },
            {
                label: "Tepache Sunrise",
                path: "/flavours#tepache-sunrise"
            },
            {
                label: "Nabij",
                path: "/flavours#nabij"
            },
            {
                label: "Collaborations",
                path: "/flavours#collaborations"
            },
        ]},
        {label: "About us", path: "/about-us", items: [{
            label: "The team",
            path: "/about-us#the-team"
        },
        {
            label: "Our story",
            path: "/about-us#our-story"
        },
        {
            label: "Collaborations",
            path: "/about-us#collaborations"
        }]
        },
        {label: "Find us", path: "/find-us", items: [{
            label: "Where we get served",
            path: "/find-us#where-we-get-served"
        },
        {
            label: "Instagram",
            path: "/find-us#instagram"
        },
        {
            label: "LinkedIn",
            path: "/find-us#linkedin"
        }]},
        {label: "Wholesale", path: "/wholesale", items: [{
            label: "Login",
            path: "https://wholesale.degrowlab.org"
        }]},
    ]
}