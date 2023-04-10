import * as React from "react";
import styled from "styled-components";
import { UploadCarePicture, UploadCarePictureProps } from "../UploadCarePicture";

export interface LargeImageBlockType {
  alt: string;
  marginBottom?: string;
  marginTop?: string;
  maxHeight?: string;
  picture: UploadCarePictureProps;
  imageFit?: "contain" | "cover";
}

const RESIZE_WIDTH = "1200";
const RESIZE_HEIGHT = "800";

const LargeBlockImageStyled = styled.div`
  margin-bottom: ${({ $marginBottom }: { $marginBottom: string; $marginTop: string; $maxHeight: string }) =>
    $marginBottom};
  margin-top: ${({ $marginTop }: { $marginBottom: string; $marginTop: string; $maxHeight: string }) => $marginTop};
  max-height: ${({ $maxHeight }: { $marginBottom: string; $marginTop: string; $maxHeight: string }) => $maxHeight};
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  & picture {
    width: 100%;
    height: 100%;
  }
`;

export function LargeImageBlock({
  marginBottom = "0",
  marginTop = "0",
  alt,
  picture,
  maxHeight = "650px",
  imageFit = "contain",
}: LargeImageBlockType) {
  return (
    <LargeBlockImageStyled $marginBottom={marginBottom} $marginTop={marginTop} $maxHeight={maxHeight}>
      <UploadCarePicture
        objectFit={imageFit}
        resizeWidth={RESIZE_WIDTH}
        resizeHeight={RESIZE_HEIGHT}
        {...picture}
        maxHeight={maxHeight}
        supportedTypes={["webp", "png"]}
        alt={alt}
      />
    </LargeBlockImageStyled>
  );
}
