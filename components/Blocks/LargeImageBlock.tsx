import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { StoryblokPicture, StoryblokPictureProps } from "../StoryblokPicture";

export interface LargeImageBlockType {
  marginBottom?: string;
  marginTop?: string;
  maxHeight?: string;
  picture: [StoryblokPictureProps];
  imageFit?: "contain" | "cover";
  marginHorizontal?: "small" | "none";
}

const RESIZE_WIDTH = "1200";
const RESIZE_HEIGHT = "800";

const LargeBlockImageStyled = styled.div`
  margin-bottom: ${({
    $marginBottom,
  }: {
    $marginBottom: string;
    $marginTop: string;
    $maxHeight: string;
    $marginHorizontal: "small" | "none";
  }) => $marginBottom};
  margin-top: ${({
    $marginTop,
  }: {
    $marginBottom: string;
    $marginTop: string;
    $maxHeight: string;
    $marginHorizontal: "small" | "none";
  }) => $marginTop};
  max-height: ${({
    $maxHeight,
  }: {
    $marginBottom: string;
    $marginTop: string;
    $maxHeight: string;
    $marginHorizontal: "small" | "none";
  }) => $maxHeight};
  ${({
    $marginHorizontal,
  }: {
    $marginBottom: string;
    $marginTop: string;
    $maxHeight: string;
    $marginHorizontal: "small" | "none";
  }) => ($marginHorizontal === "small" ? `padding-left: ${spacing.m}; padding-right: ${spacing.m};` : "")};
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
  marginHorizontal = "none",
  picture,
  maxHeight = "650px",
  imageFit = "contain",
}: LargeImageBlockType) {
  console.log("image horiza", marginHorizontal);
  return (
    <LargeBlockImageStyled
      $marginBottom={marginBottom}
      $marginTop={marginTop}
      $maxHeight={`${maxHeight}`}
      $marginHorizontal={marginHorizontal}
    >
      <StoryblokPicture
        objectFit={imageFit}
        resizeWidth={RESIZE_WIDTH}
        resizeHeight={RESIZE_HEIGHT}
        {...picture[0]}
        maxHeight={`${maxHeight}`}
        supportedTypes={["webp", "png"]}
      />
    </LargeBlockImageStyled>
  );
}
