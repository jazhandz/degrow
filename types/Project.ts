import { BlockImageQuote } from "@/components/Blocks/ImageQuote";

export default interface Project {
  id: number;
  categories: string[];
  title: string;
  date: string;
  owner: string;
  body: string;
  subtitle: string;
  images: string[];
  blocks: Array<BlockImageQuote>;
}
