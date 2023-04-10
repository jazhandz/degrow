import { media } from "@/styles/media";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Picture, PictureProps } from "../Picture";
import { UploadCarePicture, UploadCarePictureProps } from "../UploadCarePicture";

export interface CenterImageBlockType {
  size?: "large" | "small";
  alt: string;
  picture: UploadCarePictureProps;
  imageFit?: "contain" | "cover";
  maxHeight?: string;
}

const RESIZE_WIDTH_LARGE = 700;
const RESIZE_HEIGHT_LARGE = 700;
const RESIZE_WIDTH_SMALL = 400;
const RESIZE_HEIGHT_SMALL = 400;

const LARGE_IMAGE_DESKTOP_SIZE = "100%";
const SMALL_IMAGE_DESKTOP_SIZE = "800px";

const LARGE_IMAGE_MOBILE_SIZE = "100%";
const SMALL_IMAGE_MOBILE_SIZE = "100%";

const CenterBlockImageStyled = styled(Container)`
  height: auto;
  display: block;
  position: relative;
  @media ${media.mobile} {
    width: ${({ $size }: { $size?: "large" | "small" }) =>
      $size === "small" ? SMALL_IMAGE_MOBILE_SIZE : LARGE_IMAGE_MOBILE_SIZE};
  }
  @media ${media.desktop} {
    width: ${({ $size }: { $size?: "large" | "small" }) =>
      $size === "small" ? SMALL_IMAGE_DESKTOP_SIZE : LARGE_IMAGE_DESKTOP_SIZE};
  }
  & picture {
    width: 100%;
    height: 100%;
  }
`;

export function CenterImageBlock({
  size = "small",
  picture,
  alt,
  imageFit = "cover",
  maxHeight = "600px",
}: CenterImageBlockType) {
  return (
    <CenterBlockImageStyled $size={size}>
      <UploadCarePicture
        maxHeight={maxHeight}
        objectFit={imageFit}
        resizeWidth={size === "large" ? RESIZE_WIDTH_LARGE : RESIZE_WIDTH_SMALL}
        resizeHeight={size === "large" ? RESIZE_HEIGHT_LARGE : RESIZE_HEIGHT_SMALL}
        {...picture}
        supportedTypes={["webp", "png"]}
        alt={alt}
      />
    </CenterBlockImageStyled>
  );
}
