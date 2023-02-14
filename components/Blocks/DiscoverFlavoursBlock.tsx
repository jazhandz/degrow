import Link from "next/link";
import styled from "styled-components";
import { InfiniteScrollLoop } from "../InfiniteScrollLoop";
import { Picture, PictureProps } from "../Picture";

type FlavourListItemType = {
  title: string;
  picture: PictureProps;
  path: string;
  yOffset: string;
  rotate: number;
  stiffness: number;
};

export type DiscoverFlavoursBlockType = {
  flavours: FlavourListItemType[];
};

const DESKTOP_FLAVOUR_WIDTH = "200px";
const DESKTOP_FLAVOUR_CONTAINER_WIDTH = "300px";

const DESKTOP_FLAVOUR_SCROLL_HEIGHT = "600px";

const MAX_ROTATE_MOVEMENT = 15;

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
  &:hover {
    transform: ${({ $yOffset, $rotate }: { $yOffset: string; $rotate: number }) =>
      `rotate(${$rotate}deg) translateY(${$yOffset}) scale(110%)`};
  }
`;

export function DiscoverFlavoursBlock({ flavours }: DiscoverFlavoursBlockType) {
  return (
    <InfiniteScrollLoop height={DESKTOP_FLAVOUR_SCROLL_HEIGHT}>
      {(isScrolling: -1 | 0 | 1) => {
        return flavours.map(flavour => (
          <DiscoverFlavoursStyled key={flavour.title}>
            <DiscoverFlavourClickContainerStyled
              href={flavour.path}
              $yOffset={flavour.yOffset}
              $rotate={flavour.rotate + isScrolling * (MAX_ROTATE_MOVEMENT * flavour.stiffness)}
            >
              <Picture {...flavour.picture} />
            </DiscoverFlavourClickContainerStyled>
          </DiscoverFlavoursStyled>
        ));
      }}
    </InfiniteScrollLoop>
  );
}
