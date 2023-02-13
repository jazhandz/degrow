import { ChapterHeadingBlockType } from "@/components/Blocks/ChapterHeadingBlock";
import { LargeImageBlockType } from "@/components/Blocks/LargeImageBlock";
import { BreakpointBlockType } from "@/components/Blocks/BreakpointBlock";
import { RichTextBlockType } from "@/components/Blocks/RichTextBlock";
import { CenterImageBlockType } from "@/components/Blocks/CenterImageBlock";
import { SectionBlockType } from "@/components/Blocks/SectionBlock";
import { LinkBlockType } from "@/components/Blocks/LinkBlock";
import { HeadingBlockType } from "@/components/Blocks/HeadingBlock";
import { LocationsBlockType } from "@/components/Blocks/LocationsBlock";

export type BlockTypeOptions =
  | HeadingBlockType
  | LargeImageBlockType
  | ChapterHeadingBlockType
  | BreakpointBlockType
  | RichTextBlockType
  | CenterImageBlockType
  | SectionBlockType
  | LinkBlockType
  | LocationsBlockType;

export type BlockType<T = BlockTypeOptions> = {
  type:
    | "heading"
    | "large-image"
    | "center-image"
    | "chapter-heading"
    | "breakpoint"
    | "rich-text"
    | "section"
    | "link"
    | "locations";
  data: T;
};
