import { color } from "@/styles/color";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";

// Block Type
export type ChapterHeadingBlockType = {
  title: string;
  varient: "h1" | "h2" | "h3" | "h4";
};

// Styling
const ChapterHeadingStyled = styled(Container)`
  text-align: center;
  font-weight: ${fontWeight.light};
  font-size:${fontSize.h1};
  text-transform: uppercase;
  margin-top: ${spacing.m};
  margin-bottom: ${spacing.m};
`;

const BorderWrapperStyled = styled.div`
  width: 100%;
  border-top: 1px solid ${color.black};
  border-bottom: 1px solid ${color.black};
`

export function ChapterHeadingBlock({
  title,
  varient,
}: ChapterHeadingBlockType) {
  return (
    <BorderWrapperStyled>
      <ChapterHeadingStyled as={varient}>
        {title}
      </ChapterHeadingStyled>
    </BorderWrapperStyled>
  );
}
