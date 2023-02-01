import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";

// Block Type
export type ChapterHeadingBlockType = {
  title: string;
  varient: "h1" | "h2" | "h3" | "h4";
};

// Styling
const MAX_WIDTH = "1000px";
const ChapterHeadingStyled = styled.h1`
  text-align: center;
  font-weight: ${fontWeight.light};
  max-width: ${MAX_WIDTH};

  @media ${media.mobile} {
    padding: 0 ${spacing.xl};
  }
  @media ${media.desktop} {
    padding: 0 ${spacing.xl};
  }
`;

const LineStyled = styled.hr`
  border: solid darkblue;
  border-width: thin;
`;

export function ChapterHeadingBlock({
  title,
  varient,
}: ChapterHeadingBlockType) {
  return (
    <>
      <LineStyled />
      <ChapterHeadingStyled as={varient}>
        {title}
        <LineStyled />
      </ChapterHeadingStyled>
    </>
  );
}
