import { StoryBlokRichText } from "./StoryBlok";

export type FooterType = {
  title: string;
  homePath: string;
  contactTitle: string;
  contactBody: StoryBlokRichText;
  links: FooterLinkType[];
  navigation: FooterLinkType[];
  navigationTitle: string;
};

export type FooterLinkType = {
  label: string;
  path: string;
  external: boolean;
};
