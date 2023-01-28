import { HeadingBlockType } from "./Blocks/HeadingBlock"

export type BlockTypeOptions = HeadingBlockType;


export type BlockType<T = BlockTypeOptions> = {
    type: "heading",
    data: T
}