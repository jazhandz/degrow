import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { ArticleBlock } from "./ArticleBlock";
import { BreakpointBlock } from "./BreakpointBlock";
import { CenterImageBlock } from "./CenterImageBlock";
import { ChapterHeadingBlock } from "./ChapterHeadingBlock";
import { DiscoverFlavoursBlock } from "./DiscoverFlavoursBlock";
import { FlavourBlock } from "./FlavourBlock";
import { HeadingBlock } from "./HeadingBlock";
import { LargeImageBlock } from "./LargeImageBlock";
import { LinkBlock } from "./LinkBlock";
import { LocationsBlock } from "./LocationsBlock";
import { ProductsBlock } from "./ProductsBlock";
import { RichTextBlock } from "./RichTextBlock";
import { SectionBlock } from "./SectionBlock";

interface BlocksProps {
  data: Array<BlockType<any>>;
  key?: string;
}

const BlocksContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default function BlocksComponent({ data, key }: BlocksProps) {
  return (
    <BlocksContainerStyled>
      {data.map((block, index) => {
        const itemKey = `${key}_${block.type}_${index}`;
        switch (block.type) {
          case "heading": {
            return <HeadingBlock key={itemKey} {...block.data} />;
          }
          case "large-image": {
            return <LargeImageBlock key={itemKey} {...block.data} />;
          }
          case "center-image": {
            return <CenterImageBlock key={itemKey} {...block.data} />;
          }
          case "chapter-heading": {
            return <ChapterHeadingBlock key={itemKey} {...block.data} />;
          }
          case "breakpoint": {
            return <BreakpointBlock key={itemKey} {...block.data} />;
          }
          case "rich-text": {
            return <RichTextBlock key={itemKey} {...block.data} />;
          }
          case "section": {
            return <SectionBlock key={itemKey} {...block.data} />;
          }
          case "link": {
            return <LinkBlock key={itemKey} {...block.data} />;
          }
          case "locations": {
            return <LocationsBlock key={itemKey} {...block.data} />;
          }
          case "article": {
            return <ArticleBlock key={itemKey} {...block.data} />;
          }
          case "products": {
            return <ProductsBlock key={itemKey} {...block.data} />;
          }
          case "discover-flavours": {
            return <DiscoverFlavoursBlock key={itemKey} {...block.data} />;
          }
          case "flavour": {
            return <FlavourBlock key={itemKey} {...block.data} />;
          }
          default: {
            return <>Unknown block</>;
          }
        }
      })}
    </BlocksContainerStyled>
  );
}
