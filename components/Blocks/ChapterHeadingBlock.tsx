import { color } from "@/styles/color";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { color as colors } from "@/styles/color";
import { ColorDataType } from "@/types/CMS/Generic";

// Block Type
export type ChapterHeadingBlockType = {
  title: string;
  varient: "h1" | "h2" | "h3" | "h4";
  color?: [] | ColorDataType;
};

// Styling
const ChapterHeadingStyled = styled(Container)`
  text-align: center;
  font-weight: ${fontWeight.light};
  @media ${media.mobile} {
    font-size: ${fontSize.h1Mobile};
  }
  @media ${media.desktop} {
    font-size: ${fontSize.h1Desktop};
  }
  text-transform: uppercase;
  margin: ${spacing.m} 0;
  min-width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const BorderWrapperStyled = styled.div`
  width: 100%;
  border-top: 1px solid ${color.black};
  border-bottom: 1px solid ${color.black};
`;

const ColorContainerStyled = styled.div`
  width: 100%;
  padding: ${spacing.m} ${spacing.m};
  ${({ $color }: { $color?: string }) => ($color !== undefined ? `background-color: ${$color};` : "")}
`;

export function ChapterHeadingBlock({ title, varient, color }: ChapterHeadingBlockType) {
  return (
    <ColorContainerStyled $color={color != undefined && color.length != 0 ? colors[color[0].color] : undefined}>
      <BorderWrapperStyled>
        <ChapterHeadingStyled as={varient}>{title}</ChapterHeadingStyled>
      </BorderWrapperStyled>
    </ColorContainerStyled>
  );
}
