export type FooterType = {
    "title": string,
    homePath:string,
    contact: {
        title: string,
        body: string
    },
    links: FooterLinkType[],
    navigation: {
        title: "Other",
        links: FooterLinkType[]
    }
}

export type FooterLinkType = {
    label: string;
    path: string;
}