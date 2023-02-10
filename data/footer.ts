import { FooterType } from "@/types/CMS/Footer";

export const FOOTER_DATA : FooterType = {
    "title": "DEGR0W LAB",
    homePath: "/",
    contact: {
        title: "Contact",
        body: "Saffierlaan 10,<br/>3523RC Utrecht<br/>The Netherlands"
    },
    links: [
        {label: "Email", path: "mailto: example@degrowlab.nl"},
        {label: "Instagram", path: "https://www.instagram.com/degrowlab/"},
        {label: "Linkedin", path: "https://www.linkedin.com/company/de-grow-lab"},
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