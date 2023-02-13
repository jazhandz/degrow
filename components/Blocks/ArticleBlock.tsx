import * as React from "react";
import styled from "styled-components";
import { RichText } from "@/components/RichText";
import { Container } from "../Container";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";

export interface ArticleBlockType {
  body: string;
}

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const ArticleContainer = styled(Container)`
  text-align: left;
  margin: ${spacing.m} auto;
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

export function ArticleBlock({ body }: ArticleBlockType) {
  return (
    <ArticleContainer>
      <RichText>{body}</RichText>
    </ArticleContainer>
  );
}
