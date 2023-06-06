import Link from "next/link";
import styled from "styled-components";
import { InfiniteScrollLoop } from "../InfiniteScrollLoop";
import CONTENT from "@/cms/content.json";
import { media } from "@/styles/media";
import { UploadCarePicture } from "../UploadCarePicture";
import { FlavourType } from "@/types/CMS/Flavours";
import { FlavourBlockType } from "./FlavourBlock";
import { StoryblokPicture } from "../StoryblokPicture";

type DiscoverFlavourItemType = {
  flavour: { content: FlavourBlockType; slug: string };
  rotate: `${number}`;
  stiffness: `${number}`;
  yOffset: `${number}`;
};

export type DiscoverFlavoursStaticDataType = {
  items: DiscoverFlavourItemType[];
};

export type DiscoverFlavoursBlockType = {
  discoverFlavours: DiscoverFlavoursStaticDataType;
};

const FLAVOURS = CONTENT.flavours;

const CAN_RESIZE_WIDTH = 260;
const CAN_RESIZE_HEIGHT = 520;

const DESKTOP_FLAVOUR_WIDTH = "280px";
const MOBILE_FLAVOUR_WIDTH = "200px";
const DESKTOP_FLAVOUR_CONTAINER_WIDTH = "420px";
const MOBILE_FLAVOUR_CONTAINER_WIDTH = "300px";

const DESKTOP_FLAVOUR_SCROLL_HEIGHT = "800px";
const MOBILE_FLAVOUR_SCROLL_HEIGHT = "500px";

const MAX_ROTATE_MOVEMENT = 5;

const DiscoverFlavoursStyled = styled.div`
  width: ${DESKTOP_FLAVOUR_CONTAINER_WIDTH};
  height: ${DESKTOP_FLAVOUR_SCROLL_HEIGHT};
  @media ${media.mobile} {
    width: ${MOBILE_FLAVOUR_CONTAINER_WIDTH};
    height: ${MOBILE_FLAVOUR_SCROLL_HEIGHT};
  }
  @media ${media.desktop} {
    width: ${DESKTOP_FLAVOUR_CONTAINER_WIDTH};
    height: ${DESKTOP_FLAVOUR_SCROLL_HEIGHT};
  }
  display: inline-block;
  & picture > img {
    @media ${media.mobile} {
      width: ${MOBILE_FLAVOUR_WIDTH};
    }
    @media ${media.desktop} {
      width: ${DESKTOP_FLAVOUR_WIDTH};
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DiscoverFlavourClickContainerStyled = styled(Link)`
  display: block;
  transform: ${({ $yOffset, $rotate }: { $yOffset: string; $rotate: number }) =>
    `rotate(${$rotate}deg) translateY(${$yOffset}%) scale(100%)`};
  transition: transform 0.5s ease;
  @media ${media.desktop} {
    &:hover {
      transform: ${({ $yOffset, $rotate }: { $yOffset: string; $rotate: number }) =>
        `rotate(${$rotate}deg) translateY(${$yOffset}%) scale(110%)`};
    }
  }
`;

export function DiscoverFlavoursBlock({ discoverFlavours }: DiscoverFlavoursBlockType) {
  console.log("fladdd", discoverFlavours);
  return (
    <InfiniteScrollLoop height={DESKTOP_FLAVOUR_SCROLL_HEIGHT}>
      {(isScrolling: -1 | 0 | 1) => {
        return discoverFlavours.items.map(item => (
          <DiscoverFlavoursStyled key={item.flavour.content.title}>
            <DiscoverFlavourClickContainerStyled
              href={`/flavours/${item.flavour.slug}`}
              $yOffset={item.yOffset}
              $rotate={parseInt(item.rotate) + isScrolling * (MAX_ROTATE_MOVEMENT * (parseFloat(item.stiffness) / 10))}
            >
              <StoryblokPicture
                resizeWidth={CAN_RESIZE_WIDTH}
                resizeHeight={CAN_RESIZE_HEIGHT}
                {...item.flavour.content.picture[0]}
                supportedTypes={["webp", "png"]}
              />
            </DiscoverFlavourClickContainerStyled>
          </DiscoverFlavoursStyled>
        ));
      }}
    </InfiniteScrollLoop>
  );
}
