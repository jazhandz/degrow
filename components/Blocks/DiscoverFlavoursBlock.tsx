import Link from "next/link";
import styled from "styled-components";
import { InfiniteScrollLoop } from "../InfiniteScrollLoop";
import CONTENT from "@/cms/content.json";
import { media } from "@/styles/media";
import { UploadCarePicture } from "../UploadCarePicture";

export type DiscoverFlavoursBlockType = {
  // empty
};

const FLAVOURS = CONTENT.flavours;

const DESKTOP_FLAVOUR_WIDTH = "200px";
const DESKTOP_FLAVOUR_CONTAINER_WIDTH = "300px";

const DESKTOP_FLAVOUR_SCROLL_HEIGHT = "600px";

const MAX_ROTATE_MOVEMENT = 5;

const DiscoverFlavoursStyled = styled.div`
  width: ${DESKTOP_FLAVOUR_CONTAINER_WIDTH};
  height: ${DESKTOP_FLAVOUR_SCROLL_HEIGHT};
  display: inline-block;
  & picture > img {
    width: ${DESKTOP_FLAVOUR_WIDTH};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DiscoverFlavourClickContainerStyled = styled(Link)`
  display: block;
  transform: ${({ $yOffset, $rotate }: { $yOffset: string; $rotate: number }) =>
    `rotate(${$rotate}deg) translateY(${$yOffset}) scale(100%)`};
  transition: transform 0.5s ease;
  @media ${media.desktop} {
    &:hover {
      transform: ${({ $yOffset, $rotate }: { $yOffset: string; $rotate: number }) =>
        `rotate(${$rotate}deg) translateY(${$yOffset}) scale(110%)`};
    }
  }
`;

export function DiscoverFlavoursBlock() {
  return (
    <InfiniteScrollLoop height={DESKTOP_FLAVOUR_SCROLL_HEIGHT}>
      {(isScrolling: -1 | 0 | 1) => {
        return FLAVOURS.filter(flavour => flavour.isCollaboration !== "1").map(flavour => (
          <DiscoverFlavoursStyled key={flavour.title}>
            <DiscoverFlavourClickContainerStyled
              href={`/flavours/${flavour.slug}`}
              $yOffset={flavour.discover.yOffset}
              $rotate={
                parseInt(flavour.discover.rotate) +
                isScrolling * (MAX_ROTATE_MOVEMENT * parseFloat(flavour.discover.stiffness))
              }
            >
              <UploadCarePicture {...flavour.picture} supportedTypes={["webp", "png"]} />
            </DiscoverFlavourClickContainerStyled>
          </DiscoverFlavoursStyled>
        ));
      }}
    </InfiniteScrollLoop>
  );
}
