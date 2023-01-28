import { FooterType } from "@/types/CMS/Footer";

export const FOOTER_DATA : FooterType = {
    "title": "DEGROW LAB",
    homePath: "/",
    contact: {
        title: "Contact",
        body: "Saffierlaan 10,n/3523RC Utrecht/nThe Netherlands"
    },
    links: [
        {label: "Email", path: "example@degrowlab.nl"},
        {label: "Instagram", path: "degrowlab.instragram.com"},
        {label: "Linkedin", path: "example.linkedin.com"},
    ],
    navigation: {
        title: "Other",
        links: [{
            label: "FAQ",
            path: "/faq"
        },
        {
            label: "Privacy policy",
            path: "/privacy-policy"
        },
        {
            label: "Terms & Cond",
            path: "/terms-and-conditions"
        }]
    }
}