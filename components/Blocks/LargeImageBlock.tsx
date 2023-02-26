import * as React from "react";
import styled from "styled-components";
import { Picture, PictureProps } from "../Picture";
import { UploadCarePicture, UploadCarePictureProps } from "../UploadCarePicture";

export interface LargeImageBlockType {
  alt: string;
  marginBottom?: string;
  marginTop?: string;
  picture: UploadCarePictureProps;
}

const LargeBlockImageStyled = styled.div`
  margin-bottom: ${({ $marginBottom }: { $marginBottom: string; $marginTop: string }) => $marginBottom};
  margin-top: ${({ $marginTop }: { $marginBottom: string; $marginTop: string }) => $marginTop};
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
  ...pictureProps
}: LargeImageBlockType) {
  return (
    <LargeBlockImageStyled $marginBottom={marginBottom} $marginTop={marginTop}>
      <UploadCarePicture {...picture} supportedTypes={["webp", "png"]} alt={alt} />
    </LargeBlockImageStyled>
  );
}
