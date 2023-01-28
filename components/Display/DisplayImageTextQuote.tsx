import { Constants, Theme } from "@/constants";
import ReactMarkdown from "react-markdown";
import * as React from "react";
import styled from "styled-components";

const DESKTOP_IMAGE_SIZE = "150px";
const SPEECH_BUBBLE_SIZE = "20px";

const DisplayImageTextQuoteContainer = styled.blockquote`
  display: flex;
  margin: ${Theme.spacing.l} 0px;
  position: relative;
  @media ${Constants.media.desktop} {
    min-height: ${DESKTOP_IMAGE_SIZE};
    align-items: center;
    flex-direction: row;
  }
  @media ${Constants.media.mobile} {
    flex-direction: column;
  }
`;

const DisplayImageTextQuoteImageContainer = styled.div`
  @media ${Constants.media.desktop} {
    height: ${DESKTOP_IMAGE_SIZE};
    width: ${DESKTOP_IMAGE_SIZE};
  }
  @media ${Constants.media.mobile} {
    height: ${DESKTOP_IMAGE_SIZE};
    margin: ${Theme.spacing.l} auto;
  }
`;

const DisplayImageTextQuoteImage = styled.img`
  height: ${DESKTOP_IMAGE_SIZE};
  width: ${DESKTOP_IMAGE_SIZE};
  border-radius: 100%;
  object-fit: contain;
`;
const DisplayImageTextQuoteQuote = styled(ReactMarkdown)`
  background-color: ${Theme.palette.theme3};
  border-radius: 8px;
  padding: 5px 15px;
  flex: 1;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: ${SPEECH_BUBBLE_SIZE};
    height: ${SPEECH_BUBBLE_SIZE};
    transform: rotate(45deg);
    background-color: ${Theme.palette.theme3};
    left: calc(0px - ${SPEECH_BUBBLE_SIZE} / 2);
    top: 50%;
  }
  @media ${Constants.media.desktop} {
    margin-left: ${Theme.spacing.l};
    &::before {
      transform: translateY(-50%) rotate(45deg);
      left: calc(0px - ${SPEECH_BUBBLE_SIZE} / 2);
      top: 50%;
    }
  }
  @media ${Constants.media.mobile} {
    &::before {
      transform: translateX(-50%) rotate(45deg);
      top: calc(0px - ${SPEECH_BUBBLE_SIZE} / 2);
      left: 50%;
    }
  }
`;

interface DisplayImageTextQuoteProps {
  src: any;
  cite: string;
  children: string;
}

export default function DisplayImageTextQuoteComponent({
  children,
  src,
  cite,
}: DisplayImageTextQuoteProps) {
  return (
    <DisplayImageTextQuoteContainer cite={cite}>
      <DisplayImageTextQuoteImageContainer>
        <DisplayImageTextQuoteImage src={src}></DisplayImageTextQuoteImage>{" "}
      </DisplayImageTextQuoteImageContainer>
      <DisplayImageTextQuoteQuote>{children}</DisplayImageTextQuoteQuote>
    </DisplayImageTextQuoteContainer>
  );
}
