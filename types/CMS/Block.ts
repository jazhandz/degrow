import { ChapterHeadingBlockType } from "@/components/Blocks/ChapterHeadingBlock";
import { LargeImageBlockType } from "@/components/Blocks/LargeImageBlock";
import { BreakpointBlockType } from "@/components/Blocks/BreakpointBlock";
import { RichTextBlockType } from "@/components/Blocks/RichTextBlock";
import { CenterImageBlockType } from "@/components/Blocks/CenterImageBlock";
import { SectionBlockType } from "@/components/Blocks/SectionBlock";
import { LinkBlockType } from "@/components/Blocks/LinkBlock";
import { HeadingBlockType } from "@/components/Blocks/HeadingBlock";
import { LocationsBlockType } from "@/components/Blocks/LocationsBlock";
import { ArticleBlockType } from "@/components/Blocks/ArticleBlock";
import { ProductsBlockType } from "@/components/Blocks/ProductsBlock";
import { DiscoverFlavoursBlockType } from "@/components/Blocks/DiscoverFlavoursBlock";
import { DiscoverFlavoursVerticalBlockType } from "@/components/Blocks/DiscoverFlavoursVerticalBlock";
import { FlavourBlockType } from "@/components/Blocks/FlavourBlock";

export type BlockTypeOptions =
  | HeadingBlockType
  | LargeImageBlockType
  | ChapterHeadingBlockType
  | BreakpointBlockType
  | RichTextBlockType
  | CenterImageBlockType
  | SectionBlockType
  | LinkBlockType
  | LocationsBlockType
  | ArticleBlockType
  | ProductsBlockType
  | DiscoverFlavoursBlockType
  | DiscoverFlavoursVerticalBlockType
  | FlavourBlockType;

export type BlockType<T = BlockTypeOptions> = {
  component:
    | "heading"
    | "large-image"
    | "center-image"
    | "chapter-heading"
    | "breakpoint"
    | "paragraph"
    | "section"
    | "link"
    | "locations"
    | "article"
    | "products"
    | "discover-flavours"
    | "discover-flavours-vertical"
    | "flavour";
} & T;
