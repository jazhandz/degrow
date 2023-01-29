import { HeadingBlockType } from "./Blocks/HeadingBlock"
import { LargeImageBlockType } from "./Blocks/LargeImageBlock"

export type BlockTypeOptions = HeadingBlockType | LargeImageBlockType;


export type BlockType<T = BlockTypeOptions> = {
    type: "heading" | "large-image",
    data: T
}