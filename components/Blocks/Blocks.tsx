import { BlockType, BlockTypeOptions } from "@/types/CMS/Block";
import { HeadingBlockType } from "@/types/CMS/Blocks/HeadingBlock";
import * as React from "react";
import styled from "styled-components";
import { ChapterHeadingBlock } from "./ChapterHeadingBlock";
import { HeadingBlock } from "./HeadingBlock";
import LargeImageBlock from "./LargeImageBlock";

interface BlocksProps {
  data: Array<BlockType<any>>;
}

const BlocksContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function BlocksComponent({ data }: BlocksProps) {

  return (
    <BlocksContainerStyled>
      {data.map((block) => {
        switch (block.type) {
          case "heading": {
            return <HeadingBlock {...block.data} />;
          }
          case "large-image": {
            return <LargeImageBlock {...block.data} />;
          }
          case "chapter-heading": {
            return <ChapterHeadingBlock {...block.data} />;
          }
          default: {
            return <>Unknown block</>;
          }
        }
      })}
    </BlocksContainerStyled>
  );
}
