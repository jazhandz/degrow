import { HeadingBlockType } from "./Blocks/HeadingBlock"
import { LargeImageBlockType } from "./Blocks/LargeImageBlock"
import { ChapterHeadingBlockType } from "@/components/Blocks/ChapterHeadingBlock";


export type BlockTypeOptions = HeadingBlockType | LargeImageBlockType | ChapterHeadingBlockType;


export type BlockType<T = BlockTypeOptions> = {
    type: "heading" | "large-image" | "chapter-heading",
    data: T
}