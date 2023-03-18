import { BlockType } from "./Block";

type SEOType = {
  title: string;
  description: string;
};

export type PageType = {
  slug: string;
  seo: SEOType;
  blocks: BlockType[];
};
