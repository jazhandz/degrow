import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { BreakpointBlock } from "./BreakpointBlock";
import { CenterImageBlock } from "./CenterImageBlock";
import { ChapterHeadingBlock } from "./ChapterHeadingBlock";
import { HeadingBlock } from "./HeadingBlock";
import { LargeImageBlock } from "./LargeImageBlock";
import { LinkBlock } from "./LinkBlock";
import { LocationsBlock } from "./LocationsBlock";
import { RichTextBlock } from "./RichTextBlock";
import { SectionBlock } from "./SectionBlock";

interface BlocksProps {
  data: Array<BlockType<any>>;
}

const BlocksContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default function BlocksComponent({ data }: BlocksProps) {
  return (
    <BlocksContainerStyled>
      {data.map((block, index) => {
        const key = `${block.type}_${index}`;
        switch (block.type) {
          case "heading": {
            return <HeadingBlock key={key} {...block.data} />;
          }
          case "large-image": {
            return <LargeImageBlock key={key} {...block.data} />;
          }
          case "center-image": {
            return <CenterImageBlock key={key} {...block.data} />;
          }
          case "chapter-heading": {
            return <ChapterHeadingBlock key={key} {...block.data} />;
          }
          case "breakpoint": {
            return <BreakpointBlock key={key} {...block.data} />;
          }
          case "rich-text": {
            return <RichTextBlock key={key} {...block.data} />;
          }
          case "section": {
            return <SectionBlock key={key} {...block.data} />;
          }
          case "link": {
            return <LinkBlock key={key} {...block.data} />;
          }
          case "locations": {
            return <LocationsBlock key={key} {...block.data} />;
          }
          default: {
            return <>Unknown block</>;
          }
        }
      })}
    </BlocksContainerStyled>
  );
}
