import * as React from "react";
import styled from "styled-components";
import { RichText } from "@/components/RichText";
import { Container } from "../Container";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";

export interface RichTextBlockType {
  body: string;
}

const MOBILE_FONT_SIZE = fontSize.displayMobile;
const DESKTOP_FONT_SIZE = fontSize.displayDesktop;

const RichTextContainer = styled(Container)`
  text-align: center;
  margin: ${spacing.xl} auto;
  & p {
    margin: 0;
  }
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

export function RichTextBlock({ body }: RichTextBlockType) {
  return (
    <RichTextContainer>
      <RichText>{body}</RichText>
    </RichTextContainer>
  );
}
