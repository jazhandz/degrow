import { Constants, SCREEN_SIZES } from "@/constants";
import * as React from "react";
import styled from "styled-components";

interface LayoutHorizontalVerticalProps {
  leftComponent?: any;
  rightComponent?: any;
  leftFlex?: number;
  rightFlex?: number;
  backgroundColor?: string;
  swapMobileOrientation?: boolean;
  maxWidth?: string;
}

const LARGE_HEIGHT_PADDING = "60px";
const LARGE_HEIGHT = "300px";
const LARGE_MARGIN = "30px";
// const SMALL_HEIGHT_PADDING= 50px";
const SMALL_HEIGHT_PADDING = "10px";
const SMALL_HEIGHT = "200px";
const SMALL_MARGIN = "20px";

const LayoutHorizontalVerticalContainer = styled.section(
  ({ reverse, maxWidth }: { reverse: boolean; maxWidth: string }) => `
  position: relative;
  width: 100%;
  overflow: hidden;
  @media ${Constants.media.mobile}{
    min-height: ${SMALL_HEIGHT};
    display: relative;
  }
  @media ${Constants.media.desktop}{
    min-height: ${LARGE_HEIGHT};
    display: flex;
    justify-content: center;
    padding: 0px calc((100vw - ${maxWidth}) / 2);
  }
`
);

const LayoutHorizontalVerticalLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Constants.media.mobile} {
    margin-top: ${SMALL_MARGIN};
    align-items: center;
  }
  @media ${Constants.media.desktop} {
    margin-right: ${LARGE_MARGIN};
    justify-content: center;
  }
`;

const LayoutHorizontalVerticalRight = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Constants.media.mobile} {
    margin-bottom: ${SMALL_MARGIN};
    align-items: center;
  }
  @media ${Constants.media.desktop} {
    margin-right: ${LARGE_MARGIN};
    justify-content: center;
  }
`;

export default function LayoutHorizontalVerticalComponent({
  leftComponent,
  rightComponent,
  leftFlex,
  rightFlex,
  backgroundColor,
  maxWidth = SCREEN_SIZES.laptop,
  swapMobileOrientation = false,
}: LayoutHorizontalVerticalProps) {
  return (
    <LayoutHorizontalVerticalContainer
      maxWidth={maxWidth}
      style={
        backgroundColor
          ? {
              backgroundColor,
            }
          : {}
      }
      reverse={swapMobileOrientation}
    >
      <LayoutHorizontalVerticalLeft
        style={leftFlex ? { flex: leftFlex } : undefined}
      >
        {leftComponent}
      </LayoutHorizontalVerticalLeft>
      <LayoutHorizontalVerticalRight
        className="basicCard__right"
        style={rightFlex ? { flex: rightFlex } : undefined}
      >
        {rightComponent}
      </LayoutHorizontalVerticalRight>
    </LayoutHorizontalVerticalContainer>
  );
}
