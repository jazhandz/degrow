import { BlockImageQuote } from "@/components/Blocks/ImageQuote";
import { BlockRichText } from "@/components/Blocks/RichText";

export default interface Project {
  id: number;
  categories: string[];
  title: string;
  date: string;
  owner: string;
  body: string;
  subtitle: string;
  images: string[];
  blocks: Array<BlockRichText | BlockImageQuote>;
}
