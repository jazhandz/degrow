export type FooterType = {
  title: string;
  homePath: string;
  contactTitle: string;
  contactBody: string;
  links: FooterLinkType[];
  navigation: FooterLinkType[];
  navigationTitle: string;
};

export type FooterLinkType = {
  label: string;
  path: string;
  external: boolean;
};
