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
        switch (block?.[":type"]) {
          case "heading": {
            return <HeadingBlock key={itemKey} {...block} />;
          }
          case "large-image": {
            return <LargeImageBlock key={itemKey} {...block} />;
          }
          case "center-image": {
            return <CenterImageBlock key={itemKey} {...block} />;
          }
          case "chapter-heading": {
            return <ChapterHeadingBlock key={itemKey} {...block} />;
          }
          case "breakpoint": {
            return <BreakpointBlock key={itemKey} {...block} />;
          }
          case "paragraph": {
            return <RichTextBlock key={itemKey} {...block} />;
          }
          case "section": {
            return <SectionBlock key={itemKey} {...block} />;
          }
          case "link": {
            return <LinkBlock key={itemKey} {...block} />;
          }
          case "locations": {
            return <LocationsBlock key={itemKey} {...block} />;
          }
          case "article": {
            return <ArticleBlock key={itemKey} {...block} />;
          }
          case "products": {
            return <ProductsBlock key={itemKey} {...block} />;
          }
          case "discover-flavours": {
            return <DiscoverFlavoursBlock key={itemKey} {...block} />;
          }
          case "flavour": {
            return <FlavourBlock key={itemKey} {...block} />;
          }
          default: {
            return <>Unknown block</>;
          }
        }
      })}
    </BlocksContainerStyled>
  );
}
