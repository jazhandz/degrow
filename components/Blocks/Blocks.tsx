import { BlockType } from "@/types/CMS/Block";
import { FlavourType } from "@/types/CMS/Flavours";
import * as React from "react";
import styled from "styled-components";
import { ArticleBlock } from "./ArticleBlock";
import { BiologyBlock } from "./BiologyBlock";
import { BreakpointBlock } from "./BreakpointBlock";
import { CenterImageBlock } from "./CenterImageBlock";
import { ChapterHeadingBlock } from "./ChapterHeadingBlock";
import { DiscoverFlavoursBlock, DiscoverFlavoursBlockType } from "./DiscoverFlavoursBlock";
import { DiscoverFlavoursVerticalBlock } from "./DiscoverFlavoursVerticalBlock";
import { FlavourBlock } from "./FlavourBlock";
import { HeadingBlock } from "./HeadingBlock";
import { LargeImageBlock } from "./LargeImageBlock";
import { LinkBlock } from "./LinkBlock";
import { LocationsBlock } from "./LocationsBlock";
import { NewsletterBlock } from "./NewsletterBlock";
import { ProductsBlock } from "./ProductsBlock";
import { RichTextBlock } from "./RichTextBlock";
import { SectionBlock } from "./SectionBlock";

interface BlocksProps {
  data: Array<BlockType<any>>;
  key?: string;
  staticData: StaticDataType;
}

export type StaticDataType = {
  discoverFlavours?: {
    story: {
      content: {
        global: [DiscoverFlavoursBlockType];
      };
    };
  };
};

const BlocksContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default function BlocksComponent({ data, key, staticData }: BlocksProps) {
  return (
    <BlocksContainerStyled>
      {data.map((block, index) => {
        const itemKey = `${key}_${block.type}_${index}`;
        switch (block?.["component"]) {
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
            return <BreakpointBlock key={itemKey} {...block} staticData={staticData} />;
          }
          case "paragraph": {
            return <RichTextBlock key={itemKey} {...block} />;
          }
          case "section": {
            return <SectionBlock key={itemKey} {...block} staticData={staticData} />;
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
            return staticData.discoverFlavours === undefined ? (
              <>Static Data not available</>
            ) : (
              <DiscoverFlavoursBlock
                key={itemKey}
                {...block}
                discoverFlavours={staticData.discoverFlavours.story.content.global[0]}
              />
            );
          }
          case "discover-flavours-vertical": {
            return staticData.discoverFlavours === undefined ? (
              <>Static Data not available</>
            ) : (
              <DiscoverFlavoursVerticalBlock
                key={itemKey}
                {...block}
                discoverFlavours={staticData.discoverFlavours.story.content.global[0]}
              />
            );
          }
          case "flavour": {
            return <FlavourBlock key={itemKey} {...block} />;
          }
          case "newsletter": {
            return <NewsletterBlock key={itemKey} {...block} />;
          }
          case "biology": {
            return <BiologyBlock key={itemKey} {...block} />;
          }
          default: {
            console.log("unknown block", block);
            return <>Unknown block</>;
          }
        }
      })}
    </BlocksContainerStyled>
  );
}
