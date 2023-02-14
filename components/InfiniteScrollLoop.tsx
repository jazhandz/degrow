import { color } from "@/styles/color";
import React, { WheelEvent } from "react";
import styled from "styled-components";

const InfiniteScrollLoopOuterStyled = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  /* &::after {
    z-index: 100;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${({ $height }: { $height: string }) => $height};
    background: linear-gradient(
      90deg,
      ${color.grey1} 0%,
      rgba(95, 95, 95, 0) calc(15%),
      rgba(95, 95, 95, 0) calc(85%),
      ${color.grey1} 100%
    );
    pointer-events: none;
  } */
`;

const InfiniteScrollLoopInnerStyled = styled.div`
  height: 100%;
  display: block;
  min-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SurroundingStyled = styled.div`
  display: flex;
`;

export function InfiniteScrollLoop({
  surroundingBackup = 4,
  children,
  height,
}: {
  surroundingBackup?: number;
  scrollPaddingPercentage?: number;
  height: string;
  children: (isScrolling: -1 | 0 | 1) => React.ReactElement[];
}): JSX.Element {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<0 | 1 | -1>(0);

  const backupWidth = width * surroundingBackup;

  const handleScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollLeft;
      if (scroll < backupWidth || scroll >= backupWidth + width) {
        scrollRef.current.scrollLeft = backupWidth + (scroll % width);
      }
    }
  }, [backupWidth, width]);

  React.useLayoutEffect(() => {
    if (contentRef.current && scrollRef.current) {
      setWidth(contentRef.current.offsetWidth);
      scrollRef.current.scrollLeft = backupWidth;
    }
  }, [backupWidth]);

  const handleWheel = React.useCallback(
    (ev: WheelEvent<HTMLDivElement>) => {
      if (ev.deltaX > 2 && isScrolling !== 1) {
        setIsScrolling(1);
      } else if (ev.deltaX < -2 && isScrolling !== -1) {
        setIsScrolling(-1);
      }
    },
    [isScrolling]
  );

  return (
    <InfiniteScrollLoopOuterStyled className="infinite-scroll-loop-outer" $height={height}>
      <InfiniteScrollLoopInnerStyled
        className="infinite-scroll-loop-inner"
        ref={scrollRef}
        style={{
          width,
        }}
        onWheel={handleWheel}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill(null)
          .map((_, index) => (
            <SurroundingStyled key={`pre_${index}`}>{children(isScrolling)}</SurroundingStyled>
          ))}
        <SurroundingStyled ref={contentRef}>{children(isScrolling)}</SurroundingStyled>
        {Array(surroundingBackup)
          .fill(null)
          .map((_, index) => (
            <SurroundingStyled key={`post_${index}`}>{children(isScrolling)}</SurroundingStyled>
          ))}
      </InfiniteScrollLoopInnerStyled>
    </InfiniteScrollLoopOuterStyled>
  );
}
