import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { parseStoryblokRichText } from "@/functions/parse-storyblok-richtext";

export interface RichTextBlockType {
  body: string;
}

const MOBILE_FONT_SIZE = fontSize.displayMobile;
const DESKTOP_FONT_SIZE = fontSize.displayDesktop;
const MOBILE_LINE_HEIGHT = fontSize.displayMobileLineHeight;
const DESKTOP_LINE_HEIGHT = fontSize.displayDesktopLineHeight;

const RichTextContainer = styled(Container)`
  text-align: center;
  margin: ${spacing.xl} auto;
  & p {
    margin: 0;
    min-height: ${MOBILE_FONT_SIZE};
  }
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
    line-height: ${MOBILE_LINE_HEIGHT};
    padding-left: ${spacing.m};
    padding-right: ${spacing.m};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
    line-height: ${DESKTOP_LINE_HEIGHT};
  }
`;

export function RichTextBlock({ body }: RichTextBlockType) {
  return <RichTextContainer dangerouslySetInnerHTML={parseStoryblokRichText(body)}></RichTextContainer>;
}
