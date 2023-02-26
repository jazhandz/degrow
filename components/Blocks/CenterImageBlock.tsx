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
}

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

export function CenterImageBlock({ size = "small", picture, alt }: CenterImageBlockType) {
  console.log("picture", picture);
  return (
    <CenterBlockImageStyled $size={size}>
      <UploadCarePicture {...picture} supportedTypes={["webp", "png"]} alt={alt} />
    </CenterBlockImageStyled>
  );
}
